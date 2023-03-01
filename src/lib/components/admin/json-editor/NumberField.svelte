<script lang="ts">
    import {TextUtils} from "$lib/utils";

    export let key: string;
    export let value: number;

    let id: string;
    $: id = (key ? `${key}_` : '') + TextUtils.hash(key ?? '', value);
</script>

<label for="{id}">{key}</label>
<input type="number" id="{id}" name="{id}" bind:value={value}>