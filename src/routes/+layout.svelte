<script>
    import {page} from "$app/stores";
    import HumanGreeting from 'svelte-material-icons/HumanGreeting.svelte';
    import CardAccountDetails from 'svelte-material-icons/CardAccountDetails.svelte';
    import FileCertificate from 'svelte-material-icons/FileCertificate.svelte';

    const navIconSize = 27;
</script>

<nav>
    <a href="/" class="navlink" class:active={$page.url.pathname === "/"}>
        <span class="navlink-icon">
            <HumanGreeting width="{navIconSize}" height="{navIconSize}"/>
        </span>
        <span class="navlink-text">
            Welcome
        </span>
    </a>
    <a href="/about" class="navlink" class:active={$page.url.pathname === "/about"}>
        <span class="navlink-icon">
            <CardAccountDetails width="{navIconSize}" height="{navIconSize}"/>
        </span>
        <span class="navlink-text">
            About me
        </span>
    </a>
    <a href="/portfolio" class="navlink" class:active={$page.url.pathname === "/portfolio"}>
        <span class="navlink-icon">
            <FileCertificate width="{navIconSize}" height="{navIconSize}"/>
        </span>
        <span class="navlink-text">
            Portfolio
        </span>
    </a>
</nav>

<div id="content">
    <main>
        <slot></slot>
    </main>
</div>

<footer>
    <ul class="toe">
       <li>Images from <a href="https://picsum.photos" target="_blank">Lorem picsum</a> & <a href="https://unsplash.com" target="_blank">Unsplash</a></li>
    </ul>
</footer>

<style>
    :root {
        --navbar-height: 10vh;
    }

    #content {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    main {
        width: 100%;
    }

    main > *:first-child {
        margin-top: var(--navbar-height);
    }


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
        color: var(--link-hover-col);
        border-color: var(--link-hover-col);
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

    footer {
        display: flex;
        flex-flow: row-reverse wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 2rem;
        color: var(--secondary-text-col);
    }

    footer .toe {
        list-style: none;
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