<script>
    import Hero from "$lib/components/Hero.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";
    import HumanGreeting from 'svelte-material-icons/HumanGreeting.svelte';
    import Seo from '$lib/components/Seo.svelte'
</script>

<Seo description="I am an Austrian software engineer with a focus on (full stack) web and game development." />

<Hero>
    <article id="welcome">
        <section>
            <h1>Welcome! <HumanGreeting color="#27EEF5"/></h1>
            <p>
                My name is <strong>Cajetan Grill</strong> and I am an <strong>Austrian</strong> software engineer with a focus on (full stack) <strong>web</strong> and <strong>game development</strong>.
                On this site, I show you who I am and where I come from, as well as some of my projects and creations.
            </p>
        </section>
    </article>

    <PrevNext/>
</Hero>

