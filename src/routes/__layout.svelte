<script>
    import '../global.css';
    import Hero from '$lib/Hero.svelte';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div id="background">
    <div id="main-column">
        <Hero />
        <Navbar />
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
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        background-color: white;
        display: grid;
        grid-template-rows: 250px 50px auto 150px;
    }

    main {
        padding: 2rem;
        text-align: start;
    }
</style>
