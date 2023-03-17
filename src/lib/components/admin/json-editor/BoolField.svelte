<script lang="ts">
    import {TextUtils} from "$lib/utils";

    export let key: string;
    export let value: boolean;

    let id: string;
    $: id = (key ? `${key}_` : '') + TextUtils.hash(key ?? '', value);
</script>

<label for="{id}">{key}</label>
<input type="checkbox" id="{id}" name="{id}" bind:checked="{value}">

<style>
    input {
        min-width: 1.5rem;
        min-height: 1.5rem;
        background-color: transparent;
        border: 2px solid var(--main-text-col);
        color: var(--main-text-col);
    }
</style>