<script lang="ts">
    import type {IMedia} from "$lib/media";

    export let media: IMedia;
</script>

<audio controls src="{media.source}" {...$$restProps}>
    <a href="{media.source}">Download</a>
</audio>

<style>
    audio {
        width: 100%;
        height: 100%;
    }
</style>