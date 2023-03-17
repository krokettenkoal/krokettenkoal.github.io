<script lang="ts">
    import {getValueField} from "./JsonEditor.svelte";
    import {SvelteComponent} from "svelte";
    import MenuRight from 'svelte-material-icons/MenuRight.svelte';
    import MenuDown from 'svelte-material-icons/MenuDown.svelte';
    import Plus from 'svelte-material-icons/Plus.svelte';
    import Modal from "$lib/components/Modal.svelte";

    export let key: string | undefined = undefined;
    export let value: object;
    export let collapsed = false;

    let openModal: () => void, closeModal: (any?) => void;

    let newPropKey: string, newPropVal: any;

    let collapseIcon: SvelteComponent;
    $: collapseIcon = collapsed ? MenuRight : MenuDown;

    function toggleCollapse(): void {
        collapsed = !collapsed;
    }

    function createProperty(event: CustomEvent){

        if(!(event.detail?.key && event.detail?.value))
            throw new Error(`Cannot create new property in ${key}: Key and value must not be empty`);

        const k = event.detail.key;
        const v = event.detail.value;

        //  Avoid calling Object.prototype methods directly on objects: https://eslint.org/docs/latest/rules/no-prototype-builtins
        if(Object.prototype.hasOwnProperty.call(value, k))
            throw new Error(`Key '${k}' already exists in ${key}.`);

        value[k] = v;
    }

    function clearNewProperty(){
        newPropKey = "";
        newPropVal = undefined;
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
        {#each Object.keys(value) as k (k)}
            <p>
                <svelte:component this={getValueField(value[k])} bind:value={value[k]} key="{k}"/>
            </p>
        {/each}
    {/if}

    <button type="button" class="add" on:click={openModal}>
        <Plus size="2.5rem"/> Create property in {key}
    </button>

    <Modal bind:showModal={openModal} bind:closeModal={closeModal} on:submit={createProperty}>
        <span slot="title">
            Create property in {key}
        </span>

        <div slot="content" class="form">
            <div class="form-group">
                <label for="propKey">Key</label>
                <input type="text" bind:value={newPropKey} name="propKey" id="propKey">
            </div>
            <div class="form-group">
                <label for="propVal">Value</label>
                <input type="text" bind:value={newPropVal} name="propKey" id="propVal">
            </div>
        </div>

        <div slot="bottom">
            <button on:click|preventDefault={closeModal.bind(null, {key: newPropKey, value: newPropVal})} class="form-button" type="button">Create</button>
            <button on:click|preventDefault={clearNewProperty} class="form-button" type="button">Reset</button>
        </div>
    </Modal>
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

    button:not(.form-button):hover {
        transform: scale(1.1);
        opacity: 1;
    }

    button.icon {
        display: inline-flex;
    }

    button.form-button {
        border: 3px solid var(--accent-col);
        color: var(--accent-col);
        font-weight: bold;
        font-size: 1.2rem;
        border-radius: .7rem;
        padding: .5rem 2rem;
        text-shadow: unset;
        font-style: unset;
    }

    button.form-button:hover {
        border-color: transparent;
        background-color: var(--accent-col);
        color: var(--main-bg-col);
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

    .form-group {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
        padding: .5rem 2rem;
    }

    label {
        display: block;
        font-style: italic;
        color: var(--secondary-text-col);
        font-size: .9rem;
        text-align: center;
    }

    input {
        border: none;
        border-radius: .6rem;
        font-size: 1.2rem;
        padding: .5rem .5rem .5rem 1rem;
        opacity: .8;

        transition: all 200ms ease-out;
    }

    input:hover,
    input:active,
    input:focus {
        opacity: 1;
    }
</style>