<script lang="ts">
    import {SvelteComponent} from "svelte";
    import ChevronDoubleDown from 'svelte-material-icons/ChevronDoubleDown.svelte';

    export let icon: typeof SvelteComponent = ChevronDoubleDown;
    export let target: string;
    export let text = "Skip";
</script>

<a href="{target}">
    <span class="skip-icon">
        <svelte:component this="{icon}"/>
    </span>
    <span class="skip-text">
        {text}
    </span>
</a>

<style>
    a {
        border: 0;
    }

    .skip-icon {
        vertical-align: middle;
    }
</style>