<script lang="ts">
    import Plus from 'svelte-material-icons/Plus.svelte';
    import Delete from 'svelte-material-icons/Delete.svelte';
    import MenuRight from 'svelte-material-icons/MenuRight.svelte';
    import MenuDown from 'svelte-material-icons/MenuDown.svelte';
    import {getValueField} from "./JsonEditor.svelte";
    import {SvelteComponent} from "svelte";

    export let key: string;
    export let value: Array<any>;
    export let collapsed = !!(value?.length) && value.length > 5;

    let collapseIcon: SvelteComponent;
    $: collapseIcon = collapsed ? MenuRight : MenuDown;

    function createElement(): any {
        if(!value?.length){
            console.error(`[${key}] Elements can not be added to empty arrays at the moment. At least one existing element is needed as a template.`);
            return false;
        }

        //  Clone first element and reset all properties to their default values
        const clone = JSON.parse(JSON.stringify(value[0]));
        for(const k in clone){
            clone[k] = clone[k].constructor.call();
        }

        value.push(clone);

        //  Force svelte to update component
        value = value;

        return clone;
    }

    function removeElement(idx: number): any {
        if(idx < 0 || idx >= (value?.length ?? 0))
            return false;

        const removed = value.splice(idx, 1);

        //  Force svelte to update component
        value = value;

        return removed;
    }

    function toggleCollapse(): void {
        collapsed = !collapsed;
    }
</script>

<fieldset class:collapsed={collapsed}>
    {#if key}
        <legend>
            {key} ({value?.length ?? 0})
            <button class="icon" on:click={toggleCollapse} type="button">
                <svelte:component this={collapseIcon} size="2.5rem"/>
            </button>
        </legend>
    {/if}

    {#if value}
        <ul class="elems">

        {#each value as elem, i}
            <li>
                <svelte:component this={getValueField(elem)} bind:value={elem} key="{key}: {elem.id || i}" />
                <button class="icon remove" type="button" on:click={removeElement.bind(null, i)}>
                    <Delete size="1.5rem"/>
                </button>
            </li>
        {/each}

        </ul>
        {#if value.length > 0}
            <button type="button" class="add">
                <Plus size="2.5rem"/> Add to {key}
            </button>
        {/if}
    {/if}
</fieldset>

<style>
    fieldset {
        border: none;
        background: transparent;
        padding: 2rem 0 0 0;
        margin-top: 2rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
    }

    legend {
        text-transform: uppercase;
        font-size: 4rem;
        font-family: var(--font-heading);
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

    button.remove {
        color: crimson;
        border-color: crimson;

        position: absolute;
        top: 3rem;
        right: 1rem;
    }

    button.remove:hover {
        color: crimson;
        border-color: crimson;
        filter: brightness(.8);
    }

    button.add {
        color: #ffd200;
        border-color: #ffd200;
    }

    button.add:hover {
        color: #ffd200;
        border-color: #ffd200;
        filter: brightness(.8);
    }

    ul.elems {
        list-style: none;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
        padding: 2rem;
    }

    ul.elems li {
        position: relative;
    }

    fieldset.collapsed > *:not(legend) {
        display: none;
    }

    @media only screen and (max-width: 768px){
        ul.elems {
            padding: 0;
        }
    }
</style>