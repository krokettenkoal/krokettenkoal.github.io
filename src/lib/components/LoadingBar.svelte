<script lang="ts">
import {BarLoader} from "svelte-loading-spinners";
</script>

<p class="loading">
    <BarLoader color="var(--accent-col)"/>
    <span><slot></slot></span>
</p>

<style>
    p.loading {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        color: var(--accent-col);
        font-size: .7rem;
        opacity: .8;
        padding: 1rem;
    }
</style>