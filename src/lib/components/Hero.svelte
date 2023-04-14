<script lang="ts">
    export let bg: string | undefined = undefined;
    export let bgPortrait: string | undefined = undefined;
    export let wide = false;

    let hero: HTMLElement;

    let _bgPortrait, _bgStyle, _bgPortraitStyle, isOverflowing, windowHeight = 0;
    $: _bgPortrait = bgPortrait || bg;
    $: _bgStyle = bg ? `--bg-img: url('${bg}');` : '';
    $: _bgPortraitStyle = _bgPortrait ? `--bg-portrait: url('${_bgPortrait}');` : '';
    $: isOverflowing = (hero?.getBoundingClientRect().height ?? 0) > (windowHeight * 1.1);

</script>

<svelte:window bind:innerHeight={windowHeight}/>

<svelte:head>
    <link rel="preload" href="{bg ?? 'https://picsum.photos/1920/1080'}" as="image" />
    <link rel="preload" href="{bgPortrait ?? 'https://picsum.photos/600/1067'}" as="image" />
</svelte:head>

<div class="hero"
     style="{_bgStyle}{_bgPortraitStyle}"
     bind:this={hero}
     class:long={isOverflowing}
     class:wide>
    <slot/>
</div>

<style>
    .hero {
        --offset-top: calc(10rem + var(--navbar-height));
        --default-bg-img: url('https://picsum.photos/1920/1080');
        --default-bg-portrait: url('https://picsum.photos/600/1067');
        --bg-img: var(--default-bg-img);
        --bg-portrait: var(--default-bg-portrait);

        position: relative;
        width: 100vw;
        min-height: 100vh;
        padding: var(--offset-top) 10rem 5rem 10rem;
        box-sizing: border-box;
        font-size: 1.5rem;
        line-height: 1.8rem;
        background: var(--bg-gradient), var(--bg-img, var(--default-bg-img, var(--main-bg-gradient)));
        background-size: cover !important;
        background-attachment: fixed;
        background-repeat: no-repeat;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        transition: all 200ms linear;
    }

    .hero :global(h1),
    .hero :global(.h1) {
        background-image: var(--title-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
        letter-spacing: -.15rem;
    }

    .hero :global(a) {
        font-weight: bold;
    }

    .hero :global(article section p) {
        text-align: justify;
    }

    @media screen and (min-width: 1600px){
        .hero:not(.wide) {
            padding-left: 25vw;
            padding-right: 25vw;
        }
    }

    @media screen and (min-width: 1200px){
        .hero:not(.wide) {
            padding-left: 18vw;
            padding-right: 18vw;
        }
    }

    @media screen and (max-width: 1200px){
        .hero {
            padding-left: 8vw;
            padding-right: 8vw;
        }
    }

    @media screen and (max-width: 1000px){
        .hero {
            padding-left: 10vw;
            padding-right: 10vw;
        }
    }

    @media screen and (max-width: 768px) {
        .hero {
            --offset-top: calc(3rem + var(--navbar-height));

            min-height: calc(100vh - var(--navbar-height) - 3rem);
            padding-top: var(--offset-top);
            background: var(--bg-gradient), var(--bg-portrait, var(--default-bg-portrait, var(--main-bg-gradient)));
            background-repeat: repeat-y;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .hero.long {
            background: var(--main-bg-gradient);
        }
    }
</style>