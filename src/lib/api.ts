const urlBase = `https://graphql.contentful.com/content/v1/`;
const spaceId = import.meta.env.VITE_MASKENTHALLOK_CONTENTFUL_SPACE_ID;
const environmentId = import.meta.env.VITE_MASKENTHALLOK_CONTENTFUL_ENV_ID;
const accessToken = import.meta.env.VITE_MASKENTHALLOK_CONTENTFUL_ACCESS_TOKEN;
const url = urlBase + `spaces/${spaceId}/environments/${environmentId}/?access_token=${accessToken}`;

export type PageMeta = {
    title: string;
    url: string;
};

export type Page = PageMeta & { content: string };

export async function loadPagesMeta(fetch: Function): Promise<PageMeta[]> {
    const query = `query {
      orderCollection(limit: 1) {
        items {
          pagesInNavbarCollection {
            items {
              title
              url
            }
          }
        }
      }
    }`;
    const content = (await fetchContent(query, fetch)) as any;
    return content.orderCollection.items[0].pagesInNavbarCollection.items;
}

export async function loadPageContent(fetch: Function, url: string): Promise<Page> {
    const query = `query {
      pageCollection(where: {url: "${url}"}) {
        items {
          title
          content {
            json
          }
        }
      }
    }`;
    const content = (await fetchContent(query, fetch)) as any;
    const page = content.pageCollection.items[0];
    return {
        url,
        title: page.title,
        content: page.content.json,
    };
}

async function fetchContent(query: string, fetch: Function) {
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ query }),
    };
    const response = await fetch(url, options);
    if (response.ok) {
        const parsed = await response.json();
        return parsed.data;
    } else {
        throw new Error(response.statusText);
    }
}
