<script lang="ts">
    import {page} from '$app/stores';
    import type {PrevNextData} from "$lib/navdata";
    import {getPrevNext} from "$lib/navdata";
    import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';
    import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';

    let data: PrevNextData;

    $: data = getPrevNext($page.url.pathname);
</script>

{#if data.prev || data.next}
    <section>
        <a href="{data.prev?.url ?? '#'}" class:invisible={!data.prev}><ChevronLeft/> {data.prev?.title ?? ''}</a>
        <a href="{data.next?.url ?? '#'}" class:invisible={!data.next}>{data.next?.title ?? ''} <ChevronRight/></a>
    </section>
{/if}

<style>
    section {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: baseline;
        margin-top: 5rem;
    }

    .invisible {
        visibility: hidden;
    }

    a {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-end;
    }
</style>