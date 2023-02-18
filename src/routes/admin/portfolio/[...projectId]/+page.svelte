<script lang="ts">
    import ProjectEditor from "$lib/components/admin/ProjectEditor.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    export const prerender = false;
</script>

<ProjectEditor project="{data.project}"/>