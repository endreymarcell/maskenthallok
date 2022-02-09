import { loadPageContent, loadPagesMeta } from '$lib/api';

export async function loadPage(fetch: Function, slug: string) {
    const pagesMeta = await loadPagesMeta(fetch);
    const availableSlugs = ['fooldal', ...pagesMeta.map((page) => page.url)];
    if (!availableSlugs.includes(slug)) {
        return {
            status: 404,
            error: 'Page not found',
        };
    } else {
        const pageContent = await loadPageContent(fetch, slug);
        return {
            props: {
                slug,
                title: pageContent.title,
                content: pageContent.content,
            },
        };
    }
}
