<script context="module" lang="ts">
    import {Project} from "$lib/portfolio";

    function getStyle(p: Project): string {
        return `--logo:url('${p.logoUrl}');`;
    }
</script>

<script lang="ts">
    import {onDestroy} from "svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Hero from "$lib/components/Hero.svelte";
    import MoreProjects from "$lib/components/MoreProjects.svelte";
    import {theme} from '$stor';
    import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte'
    import Slideshow from "$lib/components/Slideshow.svelte";
    import Seo from "$lib/components/Seo.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let current: Project;
    let idx: number, next: string | undefined, prev: string | undefined;
    $: current = new Project(data.current);
    $: idx = data?.projects.findIndex(p => p.id === current.id) ?? -1;
    $: prev = idx > 0 ? (data.projects[idx - 1]?.id ?? undefined) : undefined;
    $: next = idx < (data.projects.length - 1) ? (data.projects[idx + 1]?.id ?? undefined) : undefined;
    $: $theme = current.hasTheme ? current.id : '';

    onDestroy(() => {
        $theme = undefined;
    })
</script>

{#if current}
    <Seo title="{current.title}" description="{current.description}" />
{/if}

<Hero bg="{current.bg}" wide="{true}">

    <div class="logo" style="{getStyle(current)}"></div>

    <article id="{current.id}">

        <section id="short">
            <h1>{current.title}</h1>
            <p>{current.description}</p>
        </section>

        {#if current.media && current.media.length > 0}
            <section id="slideshow">
                <Slideshow media="{current.media}"/>
            </section>
        {/if}

        <section id="long">
            <SvelteMarkdown source="{current.text}"/>
        </section>

        {#if current.links && current.links.length > 0}
            <section id="links">
                <h2>Links</h2>
                <p>Check out the following links if you want to find out more:</p>
                <ul>
                    {#each current.links as link}
                        <li><a href="{link.target}" title="{link.title}" target="_blank" rel="noreferrer">{link.label}</a></li>
                    {/each}
                </ul>
            </section>
        {/if}
    </article>

    <MoreProjects current="{current.id}" prev="{prev}" next="{next}"/>

    <a href="/portfolio" title="Back to portfolio" class="back"><ChevronLeft/> Back to portfolio</a>
</Hero>

<style>
    h1 {
        font-size: 5rem;
    }

    .logo {
        position: absolute;
        height: 35vh;
        top: calc(var(--navbar-height) + 2rem);
        right: 0;
        filter: grayscale(1);
        mix-blend-mode: lighten;
        opacity: .3;
        z-index: -1;
        mask-image: linear-gradient(45deg, black 0%, transparent 30%);
        -webkit-mask-image: -webkit-gradient(linear, right top, left bottom, color-stop(0%, black), color-stop(30%, transparent));
    }

    div.logo {
        width: 100%;
        background-image: var(--logo);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
    }

    @media screen and (min-width: 1200px){
        .logo {
            right: 20vw;
        }
    }

    @media screen and (max-width: 768px) {
        .logo {
            top: 5vh;
        }
    }

    article {
        margin-top: 5rem;
    }

    .back {
        margin-top: 3rem;
        display: inline-flex;
        align-items: center;
    }


    ul {
        list-style: square;
    }

    ul li {
        margin-bottom: .5rem;
    }
</style>