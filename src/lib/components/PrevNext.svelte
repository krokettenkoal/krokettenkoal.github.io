<script lang="ts">
    import {page} from '$app/stores';
    import type {PrevNextData} from "$lib/navdata";
    import {getPrevNext} from "$lib/navdata";

    let data: PrevNextData;

    $: data = getPrevNext($page.url.pathname);
</script>

{#if data.prev || data.next}
    <section>
        <a href="{data.prev?.url ?? '#'}" class:invisible={!data.prev}>&lt; {data.prev?.title ?? ''}</a>
        <a href="{data.next?.url ?? '#'}" class:invisible={!data.next}>{data.next?.title ?? ''} &gt;</a>
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
</style>