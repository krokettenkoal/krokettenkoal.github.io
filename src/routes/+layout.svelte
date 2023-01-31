<script lang="ts">
    import NavBar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import PrevNext from "$lib/components/PrevNext.svelte";
</script>

<NavBar/>

<div id="content">
    <main class="hero">
        <slot></slot>
        <PrevNext/>
    </main>
</div>

<Footer/>

<style>
    #content {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;

        box-shadow: 0 5px 20px black;
    }

</style>