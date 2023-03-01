<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import JsonEditor from "$lib/components/admin/json-editor/JsonEditor.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Hero wide="{true}">
    <JsonEditor src="{data.project}" filename="{data.project.title}"/>
</Hero>

<style>

</style>