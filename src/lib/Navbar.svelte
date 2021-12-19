<nav>
    <span class="nav-item">Rólunk</span>
    <span class="nav-item">Tagok</span>
    <span class="nav-item">Kutatási eredmények</span>
    <span class="nav-item">Kapcsolat</span>
    <span class="nav-item">English version</span>
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
        color: white;
    }

    .nav-item:not(:first-child)::before {
        content: ' \2022';
        margin-right: 1rem;
    }
</style>
