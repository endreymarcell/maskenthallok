<script>
    import LinkIcons from '$lib/components/LinkIcons.svelte';
</script>

<footer>
    <div id="link-icons-container">
        <LinkIcons />
    </div>
    <div id="footer-text">Máskénthallók Történeti Kutatócsoportja</div>
</footer>

<style>
    footer {
        background-color: #595854;
        padding: 2rem;
        color: white;
        text-transform: uppercase;
        font-family: var(--font-sans);
        letter-spacing: 1.2pt;
        word-spacing: 4pt;
    }

    #link-icons-container {
        margin-bottom: 1rem;
    }

    #footer-text {
        color: #a29f9f;
    }
</style>
