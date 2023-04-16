<script lang="ts">
    import type {IMedia} from "$lib/media";

    export let media: IMedia;
</script>

<img src="{media.source}" alt="{media.caption}"  {...$$restProps}/>

<style>
    img {
        width: 100%;
    }
</style>