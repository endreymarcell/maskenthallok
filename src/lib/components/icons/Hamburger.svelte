<script lang="ts">
    export let isOpen: false;
</script>

<svg class:isOpen width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" />
    <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" />
    <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" />
</svg>

<style>
    svg {
        cursor: pointer;
        transition: all 0.2s;
    }

    svg path {
        fill: white !important;
    }

    .isOpen {
        transform: rotate(180deg);
    }
</style>
