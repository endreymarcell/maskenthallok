<script lang="ts">
    import Article from '$lib/components/Article.svelte';

    export let slug: string;
    export let title: string;
    export let content: any;

    $: imageSuffix = slug === 'english' ? '-en' : '-hu';
</script>

<Article {title} {slug} {content} />
{#if ['fooldal', 'rolunk', 'english'].includes(slug)}
    <div id="logo-container">
        <img src="/img/elte-logo{imageSuffix}.png" alt="ELTE Logo" />
        <img src="/img/atelier-logo{imageSuffix}.png" alt="Atelier Logo" />
    </div>
{/if}

<style>
    #logo-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #logo-container img {
        margin-top: 20px;
        padding: 50px;
        width: 300px;
    }

    @media only screen and (max-width: 800px) {
        #logo-container {
            flex-direction: column;
        }

        #logo-container img {
            width: 75% !important;
        }
    }
</style>
