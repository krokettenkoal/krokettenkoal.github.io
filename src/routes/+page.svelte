<script>
    import Hero from "$lib/components/Hero.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";
    import HumanGreeting from 'svelte-material-icons/HumanGreeting.svelte';
    import Seo from '$lib/components/Seo.svelte'
</script>

<Seo description="I am an Austrian software engineer with a focus on (full stack) web and game development, creating cutting-edge audiovisual user experiences and interfaces." />

<Hero>
    <article id="welcome">
        <section>
            <h1>Welcome! <HumanGreeting color="#27EEF5"/></h1>
            <p>
                My name is <strong>Cajetan Grill</strong> and I am a software engineer/developer with a focus on (full stack) <strong>web</strong> and <strong>game development</strong>, creating cutting-edge audiovisual user experiences and interfaces.
                My passion lies in designing and crafting UI and UX of any kind from start to finish, with a strong attention to <strong>user-centric design</strong>.
            </p>
            <p>
                On this site, I show you <a href="/bio">who I am</a> and where I come from, as well as some of my <a href="/portfolio">projects</a> and creations.
            </p>
        </section>
    </article>

    <PrevNext/>
</Hero>

