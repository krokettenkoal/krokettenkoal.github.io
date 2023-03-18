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
                <a href="/portfolio/{p.id}"
                   id="{p.id}"
                   class="project"
                   style="{getImgStyle(p)}"
                   title="{p.title}">

                    <span class="header">
                        <img class="project-logo" src="{p.logoUrl}" height="80" alt="{p.title} logo"/>
                        <span class="project-title">{p.title}</span>
                    </span>

                    {#if descriptions && p.id !== active}
                        <span class="project-description">{TextUtils.limit(p.description, 200)}</span>
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
        justify-content: flex-end;
        align-items: flex-start;
        gap: 1rem;
        border-radius: .5rem;
        padding: 3rem;
        overflow: clip;
        flex-grow: 1;
        min-height: 20rem;

        color: var(--main-text-col);
        font-family: var(--font-heading);
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        line-height: 2rem;

        background: linear-gradient(to top, black 20%, transparent 90%), var(--img, var(--main-bg-gradient));
        background-size: cover;
        background-position: center;
        border: none;

        transition: box-shadow 200ms ease-out;
    }

    .project:hover {
        box-shadow: 3px 4px 20px rgba(0, 0, 0, .2);
    }

    .project::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        backdrop-filter: blur(5px);
        transition: all 300ms ease-out;
    }

    .project:hover::before {
        backdrop-filter: unset;
    }

    .project .header {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        gap: .8rem;
    }

    .project-logo {
        height: 2.2rem;
        opacity: .8;
    }

    .project-title {
        font-weight: normal;
        text-shadow: 2px 3px 10px var(--main-bg-col);
        opacity: .8;
    }

    .project-description {
        font-family: var(--font-normal);
        font-size: 1.3rem;
        line-height: 1.3rem;
        text-align: justify;
        font-weight: normal;
        opacity: .5;
    }

    @media only screen and (min-width: 1200px){
        .project-description {
            max-width: 50%;
        }
    }
</style>