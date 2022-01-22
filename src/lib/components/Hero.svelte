<script>
    import Logo from '$lib/components/Logo.svelte';
</script>

<header>
    <div id="logo-container">
        <a href="/">
            <Logo />
        </a>
    </div>
    <div id="title-container">
        <a href="/">
            <h1>Máskénthallók</h1>
            <h1>Történeti</h1>
            <h1>Kutatócsoportja</h1>
        </a>
    </div>
</header>

<style>
    header {
        display: flex;
        flex-direction: column;
    }

    #logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
    }

    a {
        color: black;
        text-decoration: none;
    }

    #title-container a {
        display: flex;
        gap: 0.6rem;
        justify-content: center;
    }

    h1 {
        font-family: var(--font-title);
        color: #0b696b;
    }

    @media only screen and (max-width: 800px) {
        header {
            flex-direction: row-reverse;
            margin-top: -1rem;
            justify-content: space-between;
            padding: 0 2rem;
        }

        #title-container a {
            flex-direction: column;
            gap: 0;
            justify-content: flex-start;
        }

        h1 {
            margin: 0 0 1rem 0;
            text-align: left;
            font-size: 1.6rem;
            line-height: 1.4rem;
        }

        #logo-container {
            padding: 0;
            transform: scale(0.6);
        }
    }
</style>
