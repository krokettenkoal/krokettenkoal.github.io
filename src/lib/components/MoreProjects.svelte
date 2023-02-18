<script lang="ts">
    import ProjectList from "$lib/components/ProjectList.svelte";

    export let prev: string | undefined = undefined;
    export let current: string | undefined = undefined;
    export let next: string | undefined = undefined;

    let ids: Array<string | undefined>;

    $: ids = [prev, current, next].filter(id => id);
</script>

<article class="projects-more" id="more">
    <h2>More projects</h2>

    <ProjectList projects="{ids}" active="{current}"/>
</article>