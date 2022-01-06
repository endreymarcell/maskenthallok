<script lang="ts">
    import type { PageMeta } from '$lib/api';

    export let pagesMeta: PageMeta[];
    export let activePageUrl: string;
</script>

<nav>
    {#each pagesMeta as pageMeta (pageMeta.url)}
        <span class="nav-item" class:active={activePageUrl === pageMeta.url}>
            <a href={pageMeta.url}>{pageMeta.title}</a>
        </span>
    {/each}
</nav>

<style>
    nav {
        background-color: var(--color-main);
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-family: sans-serif;
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
</style>
