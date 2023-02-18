<script>
    import Socials from "$lib/components/Socials.svelte";
</script>

<footer>
    <ul class="toe">
        <li>Images from <a href="https://picsum.photos" target="_blank" rel="noreferrer">Lorem picsum</a> & <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a></li>
        <li>Crafted with love using <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a></li>
    </ul>

    <Socials/>
</footer>

<style>
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

    footer .toe > * {
        margin-top: .7rem;
    }

    @media screen and (max-width: 768px) {
        footer {
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
        }
    }
</style>