<script lang="ts">
    import {getValueField} from "./JsonEditor.svelte";
    import {SvelteComponent} from "svelte";
    import MenuRight from 'svelte-material-icons/MenuRight.svelte';
    import MenuDown from 'svelte-material-icons/MenuDown.svelte';

    export let key: string | undefined = undefined;
    export let value: object;
    export let collapsed = false;

    let collapseIcon: SvelteComponent;
    $: collapseIcon = collapsed ? MenuRight : MenuDown;

    function toggleCollapse(): void {
        collapsed = !collapsed;
    }
</script>

<fieldset class:root={key == null} class:collapsed={collapsed}>
    {#if key != null}
        <legend>
            {key}
            <button class="icon" on:click={toggleCollapse} type="button">
                <svelte:component this={collapseIcon} size="2rem"/>
            </button>
        </legend>
    {/if}

    {#if value}
        {#each Object.keys(value) as k}
            <p>
                <svelte:component this={getValueField(value[k])} bind:value={value[k]} key="{k}"/>
            </p>
        {/each}
    {/if}
</fieldset>

<style>
    fieldset {
        margin-bottom: 3rem;
        border: 2px solid var(--secondary-text-col);
        border-radius: .6rem;
        background: var(--main-bg-gradient);
    }

    fieldset.root {
        border: none;
        padding: 0;
        background: unset;
    }

    legend {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: baseline;
        padding: 1rem;
    }

    button {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        color: var(--main-text-col);
        cursor: pointer;
        opacity: .8;
        text-shadow: 2px 3px 7px var(--main-bg-col);
        align-self: center;
        font-size: 1rem;
        font-style: italic;
        gap: .2rem;

        transition: all 300ms ease-out;
    }

    button:hover {
        transform: scale(1.1);
        opacity: 1;
    }

    button.icon {
        display: inline-flex;
    }

    p {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-self: stretch;
    }

    fieldset.collapsed > *:not(legend) {
        display: none;
    }
</style>