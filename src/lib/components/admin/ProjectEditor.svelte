<script lang="ts">
    import type {IProject} from "$lib/portfolio.ts";
    import {Editor, Viewer} from "bytemd";
    import gfm from "@bytemd/plugin-gfm";

    export let project: IProject;
    let value: string;

    const plugins = [
        gfm(),
    ];

    $: value = project?.text ?? 'beidl';

    function handleChange(e) {
        console.log('text changed');
        value = e.detail.value;
    }
</script>

<article class="split-view">
    <section class="view" id="editor">
        <Editor {value} {plugins} on:change={handleChange}/>
    </section>
    <div class="separator"></div>
    <section class="view" id="preview">
        <Viewer {value} {plugins} on:change={handleChange}/>
    </section>
</article>

<style>
    .split-view {
        --offset-top: calc(var(--navbar-height));

        width: 100%;
        height: 70vh;
        display: flex;
        flex-flow: row nowrap;
        justify-content: stretch;
        align-items: stretch;
        box-sizing: border-box;
        padding-top: var(--offset-top);

        overflow-y: auto;
    }

    .split-view > .view {
        flex-grow: 1;
    }

    .view {
        background-color: var(--main-bg-col);
    }

    .separator {
        background-color: var(--secondary-text-col);
        width: 3px;
    }

</style>