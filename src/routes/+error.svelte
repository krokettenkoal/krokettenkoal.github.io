<script>
    import { page } from '$app/stores';
    import EmoticonSad from 'svelte-material-icons/EmoticonSad.svelte';
</script>

<article class="hero" id="welcome">
    <section>
        <h1>We has error {#if $page.error.id}
                {$page.error.id}
            {/if}<EmoticonSad/></h1>
        <p><em>{$page.error.message}</em></p>
    </section>
    <a href="/" class="hero-link">&lt; Go to start</a>
</article>

<style>
    .hero {
        position: relative;
        padding: calc(10rem + 10vh) 10rem 10rem 10rem;
        min-height: calc(90vh - 20rem);
        background-image: url('https://picsum.photos/1920/1080?blur');
        background-size: cover;
        background-attachment: fixed;
        backdrop-filter: brightness(0.3);
    }

    @media screen and (max-width: 800px){
        .hero {
            min-height: calc(90vh - 2rem);
            background-image: url('https://picsum.photos/600/1067?blur');
            padding: calc(10vh + 3rem) 1rem 1rem 1rem;
        }
    }

    .hero::before {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        content: '';
        background-image: radial-gradient(ellipse at center, var(--main-bg-col), rgba(0, 4, 35, 0.8) 40%, rgba(0, 4, 35, 0.6));
        z-index: -1;
    }

    .hero h1 {
        font-family: 'Futura Heading';
        font-size: 6rem;
        text-shadow: 10px 10px 0 var(--main-bg-col);
        margin-bottom: 2rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: -.15rem;
    }

    .hero p {
        font-size: 1.5rem;
        line-height: 1.8rem;
    }

    .hero .hero-link {
        font-size: 1.5rem;
        font-weight: bold;
    }

    @media screen and (min-width: 1200px){
        .hero {
            padding-left: 20vw;
            padding-right: 20vw;
        }
    }
</style>