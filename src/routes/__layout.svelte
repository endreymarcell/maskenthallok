<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { loadPagesMeta } from '$lib/api';
    export const load: Load = async ({ fetch, page }) => {
        const pagesMeta = await loadPagesMeta(fetch);
        return {
            props: {
                pagesMeta,
            },
        };
    };
</script>

<script lang="ts">
    import '../global.css';
    import Hero from '$lib/components/Hero.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import type { PageMeta } from '$lib/api';
    import { page } from '$app/stores';

    export let pagesMeta: PageMeta[];
    $: filteredPagesMeta = pagesMeta.filter((pageMeta) => pageMeta.url !== 'fooldal');
</script>

<svelte:head>
    <title>Máskénthallók Történeti Kutatócsoportja</title>
</svelte:head>

<div id="background">
    <div id="main-column">
        <Hero />
        <Navbar pagesMeta={filteredPagesMeta} activePageUrl={$page.params.slug} />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</div>

<style>
    #background {
        background-color: var(--color-bg);
        text-align: center;
        height: 100%;
    }

    #main-column {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 2rem;
        background-color: white;
    }

    main {
        padding: 3rem 6rem;
        text-align: start;
    }

    @media only screen and (max-width: 800px) {
        main {
            padding: 1rem;
        }
    }
</style>
