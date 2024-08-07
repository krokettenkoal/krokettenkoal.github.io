<script context="module" lang="ts">
</script>

<script lang="ts">
    import {onDestroy, onMount, type ComponentType} from "svelte";
    import Circle from "svelte-material-icons/Circle.svelte";
    import CircleSlice8 from "svelte-material-icons/CircleSlice8.svelte";
    import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';
    import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';
    import VideoIcon from 'svelte-material-icons/Video.svelte';
    import Waveform from "svelte-material-icons/Waveform.svelte";
    import {MediaType} from "$lib/media";
    import type {IMedia} from "$lib/media";
    import Image from "$lib/components/media/Image.svelte";
    import Audio from "$lib/components/media/Audio.svelte";
    import Video from "$lib/components/media/Video.svelte";
    import Text from "$lib/components/media/Text.svelte";

    export let media: IMedia[];
    export let current = 0;
    export let autoplay = true;
    export let duration = 7;

    let curr: IMedia | undefined;

    $: current = media ? (media.length + current) % media.length : -1;
    $: curr = media ? media[current] : undefined;

    let currentTimeout: number;

    function getMediaComponent(t: IMedia): ComponentType {
        switch (t.type){
            case MediaType.Image:
                return Image;
            case MediaType.Audio:
                return Audio;
            case MediaType.Video:
                return Video;
        }

        return Text;
    }

    function getMediaIndicator(t: IMedia): ComponentType {
        switch (t.type){
            case MediaType.Image:
                return Circle;
            case MediaType.Audio:
                return Waveform;
            case MediaType.Video:
                return VideoIcon;
        }

        return Circle;
    }

    function show(idx: number): void {
        current = idx;

        if(currentTimeout)
            clearTimeout(currentTimeout);

        currentTimeout = setTimeout(show.bind(null, idx + 1), duration * 1000);
    }

    function showPrev(): void {
        show(current - 1);
    }

    function showNext(): void {
        show(current + 1);
    }

    function pause(): void {
        if(currentTimeout)
            clearTimeout(currentTimeout);
    }

    function play(): void {
        if(autoplay)
            show(current);
    }

    onMount(() => {
        play();
    });

    onDestroy(() => {
        pause();
    });

</script>

<div class="slideshow">

    {#each media as m, i (i)}
    {@const comp = getMediaComponent(m)}
        <div class="slide" data-caption="{m.caption}"
            class:current={i === current}
            class:previous={i < current}
            class:next={i > current}>
            <svelte:component this={comp} media={m} on:play={pause} on:ended={play} />
        </div>
    {/each}


    <button class="navigator" id="prev" on:click={showPrev} title="Previous">
        <ChevronLeft/>
    </button>
    <button class="navigator" id="next" on:click={showNext} title="Next">
        <ChevronRight/>
    </button>

    <div class="indicators">
        {#each media as m, i (i)}
        {@const isActive = i === current}
        {@const ind = getMediaIndicator(m)}
            <button class="indicator" class:active={isActive} on:click={show.bind(null, i)} title="{m.caption}">
                {#if isActive}
                    <CircleSlice8 />
                {:else}
                    <svelte:component this={ind} />
                {/if}
            </button>
        {/each}
    </div>
</div>

<style>

    .slideshow {
        width: 100%;
        display: grid;
        grid-template-columns: 3rem auto 3rem;
        grid-template-rows: 3rem auto 3rem;
        grid-template-areas:
            "header header header"
            "prev main next"
            "footer footer footer";

        justify-items: stretch;
        align-items: stretch;
    }

    .slide {
        position: relative;
        grid-area: main;
        border-radius: .5rem;
        overflow: clip;
        opacity: 0;
        min-height: 40vh;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        transition: transform 400ms ease-out, opacity 250ms linear;
    }

    .slide :global(> *){
        border-radius: .5rem;
    }

    @media screen and (max-width: 768px) {
        .slide {
            min-height: 20vh;
        }
    }

    .slide::after {
        content: attr(data-caption);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        max-height: 30%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        padding: 1rem 2rem;
        font-size: 1rem;
        z-index: 5;
        background: linear-gradient(to bottom, var(--main-bg-col) 2%, transparent 60%);
        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms ease-out;
    }

    .slideshow:hover .slide::after {
        opacity: 1;
    }

    .slide.previous {
        transform: translateX(-5rem);
    }

    .slide.next {
        transform: translateX(5rem);
    }

    .slide.current {
        opacity: 1;
        transform: translateX(0);
    }

    .indicators {
        grid-area: footer;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        overflow-x: auto;
        gap: .5rem;
        z-index: 10;
    }

    button.indicator {
        border: none;
        background: none;
    }

    .indicator {
        color: var(--main-text-col);
        cursor: pointer;
        opacity: .6;
        font-size: 1rem;
        transition: all 200ms ease-out;
    }

    .indicator.active,
    .indicator:hover {
        opacity: 1;
    }

    .indicator.active {
        font-size: 1.2rem;
    }

    .navigator {
        cursor: pointer;
        font-size: 3rem;
        padding: 0;
        z-index: 10;
        opacity: .6;

        transition: opacity 200ms ease-out;
    }

    .navigator:hover {
        opacity: 1;
    }

    button.navigator {
        background: transparent;
        border: none;
        color: var(--main-text-col);
    }

    .navigator#prev {
        grid-area: prev;
    }

    .navigator#next {
        grid-area: next;
    }
</style>