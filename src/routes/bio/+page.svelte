<script lang="ts">
    import Forest from 'svelte-material-icons/Forest.svelte';
    import DesktopClassic from 'svelte-material-icons/DesktopClassic.svelte';
    import Web from 'svelte-material-icons/Web.svelte';
    import CityVariant from 'svelte-material-icons/CityVariant.svelte';
    import Bookshelf from 'svelte-material-icons/Bookshelf.svelte';
    import FaceAgent from 'svelte-material-icons/FaceAgent.svelte';
    import NaturePeople from 'svelte-material-icons/NaturePeople.svelte';
    import Controller from 'svelte-material-icons/Controller.svelte';
    import Creation from 'svelte-material-icons/Creation.svelte';
</script>

<article class="hero" id="bio">
    <h1>Cajetan Grill</h1>
    <div class="hero-img" style="background-image:url('/img/cgrill.jpg')" />
    <section>
        <h2>Where I'm from</h2>
        <p>
            Born and raised in the <strong><span class="austria">Austrian</span> forests</strong> (or at least next to one), I have gained interest in computers at an early age, especially in software.
            Soon, I started creating my <strong>first websites</strong>, adopting the basic concepts of HTML, CSS and ― later on ― PHP and JavaScript.
        </p>
        <div class="emoji-row"><Forest size="2rem"/><DesktopClassic size="2rem"/><Web size="2rem"/></div>

        <p>
            After years of messing around with horrible spaghetti code just for fun (besides graduating from school), I decided to move to <strong>Vienna</strong> and to enrol in <em><strong>Media Informatics and Visual Computing</strong></em> at TU Wien.
            Initially working part-time at the Austrian daily newspaper <em>DER STANDARD</em>'s IT department alongside studying, I soon focused on work and stocked up to being a full-time <strong>Support & Operations engineer</strong>.
        </p>
        <div class="emoji-row"><CityVariant size="2rem"/><Bookshelf size="2rem"/><FaceAgent size="2rem"/></div>

        <p>
            Years went by and the urge to improve my skills and to develop my full potential grew in me, which finally made me start studying <em><strong>Media Technology</strong></em> at FH St. Pölten, moving to my former school's town, <strong>Melk</strong>.
            Originally primarily interested in the programme's audio production part (my second favorite hobby), I re-discovered my love for programming and I specialized in <em><strong>Interactive Technologies</strong></em> and its <em><strong>Digital Game Production</strong></em> module.
        </p>
        <div class="emoji-row"><NaturePeople size="2rem"/><Controller size="2rem"/><Creation size="2rem"/></div>
    </section>
    <section>
        <h2>Where I'm at</h2>
        <p>
            While I still enjoy creating websites (like this one) and applications or tools of any kind, my heart is beating for <strong>game development</strong>. From writing simple and complex game logic and mechanics to designing and implementing intuitive in-game UIs and creating realistic acoustic environments, I love every aspect of it.
        </p>
        <p>
            Primarily working with <em>Unity</em>, I have already had the pleasure of creating and releasing a short story-based 3D game (called <a href="/portfolio#nftp">Notes from the Past</a>) in a small team.
        </p>
    </section>
</article>

<style>
    .emoji-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        color: var(--secondary-text-col);
        margin: 2rem 0 2rem 0;
        gap: 2rem;
    }
</style>