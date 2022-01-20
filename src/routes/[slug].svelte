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
                    slug: page.params.slug,
                    title: pageContent.title,
                    content: pageContent.content,
                },
            };
        }
    };
</script>

<script lang="ts">
    import Article from '$lib/components/Article.svelte';

    export let slug: string;
    export let title: string;
    export let content: any;

    $: imageSuffix = slug === 'english' ? '-en' : '-hu';
</script>

<Article {title} {content} />
{#if slug === 'rolunk' || slug === 'english'}
    <div id="logo-container">
        <img src="/img/elte-logo{imageSuffix}.png" alt="ELTE Logo" />
        <img src="/img/atelier-logo{imageSuffix}.png" alt="Atelier Logo" />
    </div>
{/if}

<style>
    #logo-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #logo-container img {
        margin-top: 20px;
        padding: 50px;
        width: 300px;
    }

    @media only screen and (max-width: 800px) {
        #logo-container {
            flex-direction: column;
        }

        #logo-container img {
            width: 75% !important;
        }
    }
</style>
