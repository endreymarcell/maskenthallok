<script lang="ts">
    import type { PageMeta } from '$lib/api';
    import Hamburger from '$lib/components/icons/Hamburger.svelte';

    export let pagesMeta: PageMeta[];
    export let activePageUrl: string;

    let isOpen: false;
</script>

<nav class:collapsed={!isOpen} on:click={() => (isOpen = !isOpen)}>
    {#each pagesMeta as pageMeta, index (pageMeta.url)}
        <div class="nav-item" class:active={activePageUrl === pageMeta.url}>
            {#if index === 0}
                <div id="hamburger-icon">
                    <Hamburger {isOpen} />
                </div>
            {/if}
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

    .nav-item:not(:first-child)::before {
        content: ' \2022';
        margin-right: 1rem;
        color: #b1e2e2;
    }

    .nav-item a {
        color: var(--color);
        text-decoration: none;
    }

    .nav-item a:hover {
        border-bottom: 1px solid var(--color);
    }

    @media only screen and (max-width: 800px) {
        nav {
            flex-direction: column;
            gap: 0;
            align-items: start;
            justify-content: flex-start;
            padding: 0.5rem;
            height: 15rem;
        }

        nav.collapsed {
            height: 3rem;
            overflow: hidden;
        }

        #hamburger-icon {
            display: flex;
            margin-right: 1rem;
        }

        .nav-item {
            display: flex;
            align-items: center;
            font-size: 1.4rem;
            margin-left: 2.5rem;
        }

        .nav-item.active {
            --color: white;
            margin-left: 0;
        }

        .nav-item::before {
            content: '' !important;
        }

        .nav-item a:hover {
            border-bottom: none;
        }
    }
</style>
