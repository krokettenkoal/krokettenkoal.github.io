<script lang="ts">
    import {icon} from "$lib/utils";

    export let name: string;
</script>

{#await icon(name)}
    <!-- Loading.. -->
{:then i}
    <svelte:component this={i.default} {...$$props}/>
{:catch err}
    <!-- Icon not found -->
{/await}