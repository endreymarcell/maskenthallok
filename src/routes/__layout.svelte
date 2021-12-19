<script>
    import '../global.css';
    import Hero from '$lib/Hero.svelte';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    import TitleImage from '$lib/TitleImage.svelte';
</script>

<div id="background">
    <div id="main-column">
        <Hero />
        <Navbar />
        <TitleImage />
        <slot />
        <Footer />
    </div>
</div>

<style>
    #background {
        background-color: var(--color-bg);
        text-align: center;
    }

    #main-column {
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        background-color: white;
    }
</style>
