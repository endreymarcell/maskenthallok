<script lang="ts">
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    export let title: string;
    export let content: any;
</script>

<h1>{title}</h1>
<div>
    {@html documentToHtmlString(content)}
</div>

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
</style>
