<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectList from "$lib/components/ProjectList.svelte";
    import FileCertificate from "svelte-material-icons/FileCertificate.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Hero>
    <h1>Portfolio <span class="title-icon"><FileCertificate color="#efd358"/></span></h1>
    <ProjectList source="{data.projects}" descriptions="{true}"/>
    <PrevNext/>
</Hero>
