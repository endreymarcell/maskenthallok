<script lang="ts">
    import Article from '$lib/components/Article.svelte';

    export let title: string;
    export let content: string;
</script>

<div id="container">
    <div id="article-container">
        <Article {title} {content} />
    </div>
    <div id="logo-sidebar">
        <img src="/img/atelier-logo.png" alt="Atelier Logo" width="150%" />
        <img src="/img/elte-logo-allo.png" alt="ELTE Logo" width="100%" />
    </div>
</div>
<div id="logo-bottom-bar">
    <img src="/img/elte-logo-fekvo.png" alt="ELTE Logo" />
    <img src="/img/atelier-logo.png" alt="Atelier Logo" />
</div>

<style>
    #container {
        display: grid;
        grid-template-columns: auto 0px;
    }

    #logo-sidebar {
        padding: 80px 30px 0 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #logo-sidebar img {
        margin-bottom: 100px;
    }

    #logo-bottom-bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media only screen and (max-width: 800px) {
        #logo-bottom-bar {
            flex-direction: column;
        }

        #logo-bottom-bar img {
            width: 75% !important;
        }
    }

    #logo-bottom-bar img {
        margin-top: 20px;
        padding: 50px;
        width: 300px;
    }
</style>
