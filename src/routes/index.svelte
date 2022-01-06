<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { loadPageContent, loadPagesMeta } from '$lib/api';
    export const load: Load = async ({ fetch, page }) => {
        const pages = await loadPagesMeta(fetch);
        const pageContent = await loadPageContent(fetch, 'rolunk');
        return {
            props: {
                pages,
                pageContent,
            },
        };
    };
</script>

<script lang="ts">
    import type { Page, PageMeta } from '$lib/api';

    export let pages: PageMeta[];
    export let pageContent: Page;
</script>

parsed pages: {JSON.stringify(pageContent)}
