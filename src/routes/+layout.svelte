<script lang="ts">
    import Theme from "$lib/components/Theme.svelte";
    import NavBar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$src/colors.css';
    import '$src/app.css';

    export const prerender = true;
</script>

<Theme/>

<NavBar/>

<div id="content">
    <main>
        <slot></slot>
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