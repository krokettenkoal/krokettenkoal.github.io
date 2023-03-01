<script lang="ts">
    import type {IMedia} from "$lib/media";

    export let media: IMedia;
</script>

<p  {...$$props}>
    {media.caption}
</p>