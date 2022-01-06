<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { loadPageContent } from '$lib/api';
    export const load: Load = async ({ fetch, page }) => {
        const pageContent = await loadPageContent(fetch, 'rolunk');
        return {
            props: {
                title: pageContent.title,
                content: pageContent.content,
            },
        };
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
