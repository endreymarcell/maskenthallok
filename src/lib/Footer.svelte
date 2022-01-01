<script>
    import LinkIcons from '$lib/LinkIcons.svelte';
</script>

<footer>
    <div id="link-icons-container">
        <LinkIcons />
    </div>
    <div id="footer-text">Másként Hallók Történeti Kutatócsoportja</div>
</footer>

<style>
    footer {
        background-color: #595854;
        padding: 2rem;
        color: white;
        text-transform: uppercase;
    }

    #link-icons-container {
        margin-bottom: 1rem;
    }

    #footer-text {
        color: grey;
    }
</style>
