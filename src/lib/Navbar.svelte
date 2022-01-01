<nav>
    <span class="nav-item"><a href="rolunk">Rólunk</a></span>
    <span class="nav-item"><a href="tagok">Tagok</a></span>
    <span class="nav-item"><a href="kutatasi-eredmenyek">Kutatási eredmények</a></span>
    <span class="nav-item"><a href="kapcsolat">Kapcsolat</a></span>
    <span class="nav-item"><a href="english">English version</a></span>
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

    .nav-item a {
        color: white;
        text-decoration: none;
    }

    .nav-item a:hover {
        border-bottom: 1px solid white;
    }
</style>
