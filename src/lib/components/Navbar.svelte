<script lang="ts">
    import type { PageMeta } from '$lib/api';
    import Hamburger from '$lib/components/icons/Hamburger.svelte';

    export let pagesMeta: PageMeta[];
    export let activePageUrl: string;

    $: activePageMeta =
        activePageUrl === undefined
            ? { url: 'fooldal', title: 'Főoldal' }
            : pagesMeta.find((pageMeta) => pageMeta.url === activePageUrl);

    let isOpen: false;
</script>

<nav class:collapsed={!isOpen} on:click={() => (isOpen = !isOpen)}>
    <div class="active-item-on-mobile">
        <div id="hamburger-icon">
            <Hamburger {isOpen} />
        </div>
        <div id="hamburger-menu-title">
            {isOpen ? 'Menü:' : activePageMeta.title}
        </div>
    </div>
    {#each pagesMeta as pageMeta, index (pageMeta.url)}
        <div class="nav-item" class:active={activePageUrl === pageMeta.url}>
            <a href={pageMeta.url}>{pageMeta.title}</a>
        </div>
    {/each}
</nav>

<style>
    nav {
        background-color: var(--color-main);
        line-height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-family: sans-serif;
        transition: all 0.2s;
    }

    #hamburger-icon {
        display: none;
    }

    .nav-item {
        text-transform: uppercase;
        --color: white;
    }

    .nav-item.active {
        --color: #b1e2e2;
    }

    .nav-item::before {
        content: ' \2022';
        margin-right: 1rem;
        color: #b1e2e2;
    }

    .nav-item:nth-child(1)::before,
    .nav-item:nth-child(2)::before {
        content: '';
    }

    .nav-item a {
        color: var(--color);
        text-decoration: none;
    }

    .nav-item a:hover {
        border-bottom: 1px solid var(--color);
    }

    .active-item-on-mobile {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        nav {
            flex-direction: column;
            gap: 0;
            align-items: start;
            justify-content: flex-start;
            padding: 0.5rem 2rem;
            height: 18rem;
        }

        nav.collapsed {
            height: 3rem;
            overflow: hidden;
        }

        .active-item-on-mobile {
            display: flex;
        }

        #hamburger-icon {
            display: flex;
            margin-right: 1rem;
            margin-top: 2px;
        }

        #hamburger-menu-title {
            text-transform: uppercase;
            font-size: 1.4rem;
            color: white;
        }

        .nav-item {
            display: flex;
            align-items: center;
            font-size: 1.4rem;
            margin-left: 1rem;
        }

        .nav-item a:hover {
            border-bottom: none;
        }

        .nav-item::before {
            content: ' \2022' !important;
            margin-right: 2rem !important;
        }
    }
</style>
