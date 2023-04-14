<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectList from "$lib/components/ProjectList.svelte";
    import FileCertificate from "svelte-material-icons/FileCertificate.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";
    import Seo from "$lib/components/Seo.svelte";

    const pageDescription = "A selection of my most recent, relevant or fun projects. Feel free to check out the projects' additional links for more info.";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<Seo title="Portfolio" description="{pageDescription}" />

<Hero>
    <h1>Portfolio <span class="title-icon"><FileCertificate color="#efd358"/></span></h1>
    <p>{pageDescription}</p>
    <ProjectList source="{data.projects}" descriptions="{true}"/>
    <PrevNext/>
</Hero>
