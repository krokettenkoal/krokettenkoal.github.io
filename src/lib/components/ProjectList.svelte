<script context="module" lang="ts">
    import type {IProject} from "../portfolio";

    function getImgStyle(p: IProject): string {
        if(p.background)
            return `--img: url('${p.bg}')`;

        return '--img: var(--main-bg-gradient)';
    }
</script>

<script lang="ts">
    import {Project, Portfolio} from "$lib/portfolio.ts";
    import {TextUtils} from "$lib/utils";
    import {Circle} from "svelte-loading-spinners";

    export let projects: Array<string> = [];
    export let source: Array<IProject> | undefined = undefined;
    export let active: string | undefined = undefined;
    export let descriptions = false;

    let loading: Promise<Array<IProject>>;
    $: loading = source ? Promise.resolve(source) : Portfolio.findProjects(...projects);
</script>

<section class="projects">
        {#await loading}
            <Circle/>
        {:then projects}
            {#each projects as data}
                {@const p = new Project(data)}
                <a href="/portfolio/{p.id}{active ? '#more' : ''}"
                   id="{p.id}"
                   class="project"
                   class:active={p.id === active}
                   class:secondary={active}
                   style="{getImgStyle(p)}"
                   title="{p.title}">

                    <img class="project-logo" src="{p.logoUrl}" width="80" alt="{p.title} logo"/>
                    <span class="project-title">{p.title}</span>

                    {#if descriptions && p.id !== active}
                        <span class="project-description">{TextUtils.limit(p.description, 150)}</span>
                    {/if}
                </a>

            {/each}
        {:catch err}
            <!-- SKIP -->
        {/await}
</section>

<style>
    .projects {
        min-height: 17rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: stretch;
        padding: 1rem;
        gap: 2rem;
    }

    .project {
        --img: url('/img/portfolio/bg.jpg');

        position: relative;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        gap: 1.1rem;
        border-radius: .5rem;
        padding: 3rem;
        overflow: clip;

        color: var(--main-text-col);
        font-family: var(--font-heading);
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        line-height: 2rem;

        background-image: var(--img);
        background-size: cover;
        border: none;
        z-index: 0;

        transition: all 200ms ease-out;
    }

    .project::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        opacity: .8;
        background-image: var(--bg-gradient);

        transition: all 200ms linear;
    }

    .project.secondary {
        filter: brightness(.6);
        transform: scale(.8);
    }

    .project.active,
    .project:hover {
        filter: brightness(1);
    }

    .project.active::before,
    .project:hover::before {
        opacity: .4;
    }

    .project.active {
        cursor: default;
        border: 2px solid var(--accent-col);
        transform: scale(1);
    }

    .project.active::before,
    .project:hover::before {
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
    }

    .project-logo {
        opacity: .8;
    }

    .project-title {
        font-weight: normal;
        text-shadow: 2px 3px 10px var(--main-bg-col);
        opacity: .8;
    }

    .project-description {
        padding: 1rem;
        font-family: var(--font-normal);
        font-size: 1.3rem;
        line-height: 1.3rem;
        text-align: justify;
        font-weight: normal;
        opacity: .8;
    }
</style>