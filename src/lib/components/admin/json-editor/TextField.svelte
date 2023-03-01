<script lang="ts">
    import {icon, TextUtils} from "$lib/utils";
    import Icon from "$lib/components/Icon.svelte";

    export let key: string;
    export let value: string;

    let id: string;
    $: id = (key ? `${key}_` : '') + ((key && value) ? TextUtils.hash(key+value) : '');
</script>

<label for="{id}">{key}</label>

{#if key.toLowerCase() === 'icon'}
    <span class="icon">
        <Icon name="{value}" size="2rem"/>
    </span>
{/if}

<input type="text" id="{id}" name="{id}" bind:value={value}>

<style>
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

    .icon {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin-bottom: .5rem;
    }
</style>