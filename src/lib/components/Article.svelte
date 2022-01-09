<script lang="ts">
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    export let title: string;
    export let content: any;
</script>

<h1>{title}</h1>
<article>
    {@html documentToHtmlString(content)}
</article>

<style>
    h1 {
        margin-top: 0;
        margin-left: 1rem;
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 800px) {
        h1 {
            display: none;
        }
    }

    :global(article > h2) {
        margin-top: 3rem;
    }

    :global(article > h2, article > h3) {
        padding-left: 1rem;
    }

    :global(article > h3:not(:first-child)) {
        margin-top: 3rem;
    }

    :global(article > p) {
        margin-block-start: 10px;
        margin-block-end: 0;
    }
</style>
