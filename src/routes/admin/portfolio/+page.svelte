<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import portfolio from '$data/portfolio/portfolio.json';
    import JsonEditor from "$lib/components/admin/json-editor/JsonEditor.svelte";
</script>

<Hero wide="{true}">
    <JsonEditor src="{portfolio}" filename="portfolio.json"/>
</Hero>

<style>

</style>