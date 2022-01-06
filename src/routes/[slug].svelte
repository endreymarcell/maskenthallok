<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { loadPageContent, loadPagesMeta } from '$lib/api';
    export const load: Load = async ({ fetch, page }) => {
        const pagesMeta = await loadPagesMeta(fetch);
        const availableSlugs = pagesMeta.map((page) => page.url);
        if (!availableSlugs.includes(page.params.slug)) {
            return {
                status: 404,
                title: 'Not Found',
                content: 'Page not found',
            };
        } else {
            const pageContent = await loadPageContent(fetch, page.params.slug);
            return {
                props: {
                    title: pageContent.title,
                    content: pageContent.content,
                },
            };
        }
    };
</script>

<script lang="ts">
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    export let title: string;
    export let content: any;
</script>

<h1>{title}</h1>
<div>
    {@html documentToHtmlString(content)}
</div>
