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

<Hero bg="{current.bg}">

    <div class="logo" style="{getStyle(current)}"></div>

    <article id="{current.id}">

        <section id="short">
            <h1>{current.title}</h1>
            <p>{current.description}</p>
        </section>

        <section id="long">
            <SvelteMarkdown source="{current.text}"/>
        </section>

        <section id="links">
            <h2>Links</h2>
            <p>Check out the following links if you want to find out more:</p>
            <ul>
                {#each current.links as link}
                    <li><a href="{link.target}" title="{link.title}" target="_blank" rel="noreferrer">{link.label}</a></li>
                {/each}
            </ul>
        </section>
    </article>

    <MoreProjects current="{current.id}" prev="{prev}" next="{next}"/>
</Hero>

<style>
    h1 {
        font-size: 5rem;
    }

    .logo {
        --logo: url('/img/portfolio/logo.png');

        position: absolute;
        top: calc(var(--offset-top) - 7rem);
        left: 0;
        right: 0;
        height: 10rem;

        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        background-image: var(--logo);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>