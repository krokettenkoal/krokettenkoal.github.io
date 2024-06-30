<script lang="ts">
    import type {IMedia} from "$lib/media";

    export let media: IMedia;

    let audio: HTMLAudioElement;

    export function play(): void {
        audio?.play();
    }

    export function pause(): void {
        audio?.pause();
    }
</script>

<audio controls src="{media.source}" on:play on:ended {...$$restProps}>
    <a href="{media.source}">Download</a>
</audio>

<style>
    audio {
        width: 100%;
        height: 100%;
    }
</style>