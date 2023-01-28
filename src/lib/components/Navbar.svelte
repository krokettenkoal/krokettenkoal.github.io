<script lang="ts">
    import {page} from "$app/stores";
    import {data} from '$lib/navdata';

    export let iconSize = 27;

    let scrollY = 0;
    let innerHeight = 1;
    let scrollPos = 0;

    $: scrollPos = scrollY / innerHeight;

</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={innerHeight}/>

<nav class:collapsed={scrollPos > 0.2}>
    {#each data.pages as navPage}
        <a title="{navPage.title}" href="{navPage.url}" class="navlink" class:active={$page.url.pathname === navPage.url}>
            {#if !!navPage.icon}
                <span class="navlink-icon">
                    <svelte:component this="{navPage.icon}" width="{iconSize}" height="{iconSize}"/>
                </span>
            {/if}
            <span class="navlink-text">
            {navPage.title}
        </span>
        </a>
    {/each}
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        min-height: var(--navbar-height);
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: stretch;
        gap: 3rem;
        z-index: 99;
        background-image: linear-gradient(to bottom, var(--main-bg-col) 20%, transparent);

        mask-image: radial-gradient(ellipse at top, black 60%, transparent);
        -webkit-mask-image: -webkit-radial-gradient(50% 0%, black 60%, transparent);

    }

    nav .navlink {
        min-width: 12rem;
        text-align: center;

        transition: min-width 200ms ease-out, transform 200ms ease-out;
    }

    nav a {
        font-size: 1.2rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        gap: .7rem;
        border: none;
        text-shadow: 1px 3px 7px rgba(0, 0, 0, 0.4);

        transition: transform 200ms ease-out;
    }

    nav a.active {
        cursor: default;
        font-weight: 600;
        color: rgb(255, 210, 0);
        border-color: var(--link-hover-col);
        background-image: var(--rainbow-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    nav a.active, nav a:not(.active):hover {
    }

    nav a:not(.active) {
        color: var(--main-text-col);
        border-color: var(--main-text-col);
    }

    nav a:not(.active):hover {
        font-weight: bold;
        color: var(--link-col);
        border-color: var(--link-col);
        transform: translateX(-.15rem);
    }

    nav.collapsed {
        gap: 0.5rem;
    }

    nav.collapsed .navlink-text {
        display: none;
    }

    nav.collapsed .navlink {
        min-width: 4rem;
    }

    @media screen and (max-width: 800px){
        nav {
            gap: 1rem;
        }

        nav .navlink {
            min-width: 6rem;
        }

        .navlink-text {
            display: none;
        }
    }
</style>