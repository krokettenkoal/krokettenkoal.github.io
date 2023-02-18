<script context="module" lang="ts">
    import type {IProject} from "$lib/portfolio";
    import {Project} from "$lib/portfolio";

    function getImgStyle(p: Project): string {
        const url = p.thumb || p.bg;

        if(url)
            return `--img: url('${url}');`;

        return '--img: var(--main-bg-gradient);';
    }
</script>

<script lang="ts">
    import {page} from "$app/stores";
    import {Portfolio} from "$lib/portfolio.ts";
    import {TextUtils} from "$lib/utils";
    import {Circle} from "svelte-loading-spinners";

    export let projects: Array<string> = [];
    export let source: Array<IProject> | undefined = undefined;
    export let descriptions = false;
    export let exclude: Array<string> = [];

    let active: string | undefined;
    let loading: Promise<Array<IProject>>;
    $: active = $page.params.projectId;
    $: loading = source ? Promise.resolve(source) : Portfolio.findProjects(...projects);
</script>

<section class="projects">
        {#await loading}
            <Circle/>
        {:then projects}
            {#each projects.filter(p => p.id !== active && !exclude.includes(p)) as data}
                {@const p = new Project(data)}
                <a href="/portfolio/{p.id}{active ? '#more' : ''}"
                   id="{p.id}"
                   class="project"
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
        --border-gradient: radial-gradient(ellipse, var(--accent-col) 20%, transparent);

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

        background: var(--bg-gradient), var(--img, var(--main-bg-gradient));
        background-size: cover;
        border: none;
        filter: brightness(.8);
        box-shadow: 3px 4px 20px var(--main-bg-col);

        transition: all 200ms ease-out;
    }

    .project:hover {
        filter: brightness(1);
        transform: scale(1.01);
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