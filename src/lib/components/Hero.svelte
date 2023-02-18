<script lang="ts">
    export let bg: string | undefined = undefined;
    export let bgPortrait: string | undefined = undefined;

    let _bgPortrait, _bgStyle, _bgPortraitStyle;
    $: _bgPortrait = bgPortrait || bg;
    $: _bgStyle = bg ? `--bg-img: url('${bg}');` : '';
    $: _bgPortraitStyle = _bgPortrait ? `--bg-portrait: url('${_bgPortrait}');` : '';
</script>

<div class="hero" style="{_bgStyle}{_bgPortraitStyle}">
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
        background-image: var(--bg-img), var(--default-bg-img);
        background-size: cover;
        background-attachment: fixed;
        backdrop-filter: brightness(0.3) sepia(1) hue-rotate(30deg);
        -webkit-backdrop-filter: brightness(0.3) sepia(1) hue-rotate(30deg);

        transition: background 500ms linear;
    }

    .hero::before {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        content: '';
        background-image: var(--bg-gradient);
        background-attachment: fixed;
        z-index: -1;

        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
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

    @media screen and (min-width: 1200px){
        .hero {
            padding-left: 25vw;
            padding-right: 25vw;
        }
    }

    @media screen and (max-width: 768px) {
        .hero {
            --offset-top: calc(3rem + var(--navbar-height));

            min-height: calc(100vh - var(--navbar-height) - 3rem);
            padding-top: var(--offset-top);
            background-image: var(--bg-portrait), var(--default-bg-portrait);
        }

        .hero {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
</style>