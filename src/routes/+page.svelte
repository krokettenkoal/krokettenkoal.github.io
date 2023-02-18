<script>
    import Hero from "$lib/components/Hero.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";
    import HumanGreeting from 'svelte-material-icons/HumanGreeting.svelte';
</script>

<Hero>
    <article id="welcome">
        <section>
            <h1>Welcome! <HumanGreeting color="#27EEF5"/></h1>
            <p>
                My name is <strong>Cajetan Grill</strong> and I am an <strong>Austrian</strong> software developer/designer with a focus on game development.
                On this site, I show you who I am and where I come from, as well as some of my projects and creations.
            </p>
        </section>
    </article>

    <PrevNext/>
</Hero>

