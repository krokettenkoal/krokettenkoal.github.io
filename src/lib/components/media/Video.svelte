<script lang="ts">
    import type {IMedia} from "$lib/media";

    export let media: IMedia;

    let video: HTMLVideoElement;

    export function play(): void {
        video?.play();
    }

    export function pause(): void {
        video?.pause();
    }
</script>

<video bind:this={video} controls playsinline on:play on:ended {...$$restProps}>
    <source src="{media.source}" type="{media.mime}">
    <a href="{media.source}">Download</a>
</video>

<style>
    video {
        width: 100%;
        height: 100%;
    }
</style>