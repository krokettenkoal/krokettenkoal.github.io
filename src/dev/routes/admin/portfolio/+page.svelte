<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import portfolio from '$data/portfolio/portfolio.data.js';
    import JsonEditor from "$lib/components/admin/json-editor/JsonEditor.svelte";

    export const prerender = false;
</script>

<Hero wide="{true}">
    <JsonEditor src="{portfolio}" filename="portfolio.json"/>
</Hero>