<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { loadPage } from '$lib/helpers';
    export const load: Load = async ({ fetch, page }) => loadPage(fetch, page.params.slug);
</script>

<script lang="ts">
    import ArticlePage from '$lib/pages/ArticlePage.svelte';

    export let slug: string;
    export let title: string;
    export let content: any;
</script>

<ArticlePage {slug} {title} {content} />
