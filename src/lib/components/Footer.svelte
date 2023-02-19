<script>
    import Socials from "$lib/components/Socials.svelte";
    import Logo from "$lib/components/Logo.svelte";
</script>

<footer>
    <div class="toe" id="powered">
        <p>Images from <a href="https://picsum.photos" target="_blank" rel="noreferrer">Lorem picsum</a> & <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a></p>
        <p>Crafted with love using <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a></p>
    </div>

    <div class="toe" id="logo">
        <Logo size="48"/>
    </div>

    <div class="toe" id="socials">
        <Socials/>
    </div>

</footer>

<style>
    footer {
        display: flex;
        flex-flow: row-reverse wrap;
        justify-content: space-between;
        align-items: flex-start;
        padding: 2rem;
        color: var(--secondary-text-col);
        gap: .5rem;
    }

    .toe {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: .7rem;
    }

    .toe > * {
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        footer {
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
        }

        .toe {
            align-items: center;
        }

        #logo {
            order: 99;
            transform: scale(.8);
        }
    }
</style>