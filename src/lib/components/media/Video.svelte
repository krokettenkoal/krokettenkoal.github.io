<script lang="ts">
    import type {IMedia} from "$lib/media";

    export let media: IMedia;
</script>

<video controls autoplay muted {...$$restProps}>
    <source src="{media.source}" type="{media.mime}">

    <a href="{media.source}">Download</a>
</video>

<style>
    video {
        width: 100%;
        height: 100%;
    }
</style>