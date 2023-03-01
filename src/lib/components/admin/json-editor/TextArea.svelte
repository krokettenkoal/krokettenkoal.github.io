<script lang="ts">
    import {TextUtils} from "$lib/utils";

    export let key: string;
    export let value: string;

    let id: string;
    $: id = (key && value) ? TextUtils.hash(key+value) : '';
</script>

<label for="{id}">{key}</label>
<textarea id="{id}" name="{id}" bind:value={value}></textarea>

<style>
    textarea {
        font-size: 1.2rem;
        border: 2px solid var(--secondary-text-col);
        min-height: 20vh;
        border-radius: .6rem;
        padding: .5rem .5rem .5rem 1rem;
        opacity: .8;

        transition: all 200ms ease-out;
    }

    textarea:hover,
    textarea:active,
    textarea:focus {
        opacity: 1;
    }

    label {
        display: block;
        font-style: italic;
        color: var(--secondary-text-col);
        font-size: .9rem;
        text-align: center;
    }

</style>