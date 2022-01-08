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
    import Article from '$lib/components/Article.svelte';

    export let title: string;
    export let content: any;
</script>

<Article {title} {content} />
