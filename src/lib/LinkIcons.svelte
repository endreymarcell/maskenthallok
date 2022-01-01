<script lang="ts">
    import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
    import EmailIcon from '$lib/icons/EmailIcon.svelte';
    import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
</script>

<div id="link-icons">
    <div class="link-icon">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
    </div>
    <div class="link-icon">
        <a href="mailto:TODO"><EmailIcon /></a>
    </div>
    <div class="link-icon">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
    </div>
</div>

<style>
    #link-icons {
        display: flex;
        justify-content: center;
        gap: 2em;
        --size: 2.5rem;
    }

    .link-icon {
        width: var(--size);
        line-height: var(--size);
        color: white;
        background-color: var(--color-main);
        margin-bottom: 1rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link-icon a {
        width: var(--size);
        height: var(--size);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
