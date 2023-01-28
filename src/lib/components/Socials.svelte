<script lang="ts">
    import GitHub from 'svelte-material-icons/Github.svelte';
    import Instagram from 'svelte-material-icons/Instagram.svelte';
    import LinkedIn from 'svelte-material-icons/Linkedin.svelte';
</script>

<ul>
    <li>
        <a title="krokettenkoal on GitHub" id="github" href="https://github.com/krokettenkoal/" target="_blank" rel="noreferrer">
            <GitHub size="2rem"/>
        </a>
    </li>
    <li>
        <a title="krokettenkoal on Instagram" id="instagram" href="https://www.instagram.com/krokettenkoal/" target="_blank" rel="noreferrer">
            <Instagram size="2rem"/>
        </a>
    </li>
    <li>
        <a title="Cajetan Grill on LinkedIn" id="linkedin" href="https://www.linkedin.com/in/cajetan-grill-0597081b7/" target="_blank" rel="noreferrer">
            <LinkedIn size="2rem"/>
        </a>
    </li>
</ul>

<style>
    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        list-style: none;
        padding: 0;
    }

    a {
        border: none;
        color: var(--secondary-text-col);

        transition: color 200ms linear;
    }

    a:hover {
        color: var(--main-text-col);
    }

    #github:hover {
        color: #f2f2f2;
    }

    #instagram:hover {
        color: #b400a1;
    }

    #linkedin:hover {
        color: #0961b8;
    }
</style>
