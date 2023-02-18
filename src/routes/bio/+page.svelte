<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Forest from 'svelte-material-icons/Forest.svelte';
    import DesktopClassic from 'svelte-material-icons/DesktopClassic.svelte';
    import Web from 'svelte-material-icons/Web.svelte';
    import CityVariant from 'svelte-material-icons/CityVariant.svelte';
    import Bookshelf from 'svelte-material-icons/Bookshelf.svelte';
    import FaceAgent from 'svelte-material-icons/FaceAgent.svelte';
    import NaturePeople from 'svelte-material-icons/NaturePeople.svelte';
    import Controller from 'svelte-material-icons/Controller.svelte';
    import Creation from 'svelte-material-icons/Creation.svelte';
    import HeartPulse from 'svelte-material-icons/HeartPulse.svelte';
    import CodeJson from 'svelte-material-icons/CodeJson.svelte';
    import CameraControl from 'svelte-material-icons/CameraControl.svelte';
    import CameraPartyMode from 'svelte-material-icons/CameraPartyMode.svelte';
    import Waveform from 'svelte-material-icons/Waveform.svelte';
    import Multimedia from 'svelte-material-icons/Multimedia.svelte';
    import ChevronDoubleUp from 'svelte-material-icons/ChevronDoubleUp.svelte';
    import SkipLink from "$lib/components/SkipLink.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";
</script>

<a class="anchor" id="top"></a>

<Hero>
    <article class="hero" id="bio">
        <h1>Cajetan Grill</h1>
        <div class="hero-img" style="background-image:url('/img/cgrill.jpg')" />

        <section>
            <a class="anchor" id="history"></a>
            <h2>Where I'm from <SkipLink target="#current"/></h2>
            <p>
                Born and raised in the <strong>Austrian forests</strong> (or at least next to one), I have gained interest in computers at an early age, especially in software.
                Soon, I started creating my <strong>first websites</strong>, adopting the basic concepts of HTML, CSS and ― later on ― PHP and JavaScript.
            </p>
            <div class="emoji-row"><Forest size="2rem"/><DesktopClassic size="2rem"/><Web size="2rem"/></div>

            <p>
                After years of messing around with horrible spaghetti code just for fun (besides graduating from school), I decided to move to <strong>Vienna</strong> and to enrol in <a href="https://informatics.tuwien.ac.at/bachelor/media-informatics-and-visual-computing/" target="_blank" rel="noreferrer"><em>Media Informatics and Visual Computing</em></a> at TU Wien.
                Initially working part-time at the Austrian daily newspaper <em>DER STANDARD</em>'s IT department alongside studying, I soon focused on work and stocked up to being a full-time <strong>Support & Operations engineer</strong>.
            </p>
            <div class="emoji-row"><CityVariant size="2rem"/><Bookshelf size="2rem"/><FaceAgent size="2rem"/></div>

            <p>
                Years went by and the urge to improve my skills and to develop my full potential grew in me, which finally made me start studying <a href="https://www.fhstp.ac.at/en/academic-studies-continuing-education/media-digital-technologies/media-technology/course-contents" target="_blank" rel="noreferrer"><em>Media Technology</em></a> at FH St. Pölten, moving to my former school's town, <strong>Melk</strong>.
                Originally primarily interested in the programme's audio production part (my second favorite hobby), I re-discovered my love for programming and I specialized in <em><strong>Interactive Media</strong></em> and its <em><strong>Digital Game Production</strong></em> module.
            </p>
            <div class="emoji-row"><NaturePeople size="2rem"/><Controller size="2rem"/><Creation size="2rem"/></div>
        </section>

        <section>
            <a class="anchor" id="current"></a>
            <h2>Where I'm at <SkipLink target="#skillset"/></h2>
            <p>
                While I still enjoy creating websites (like this one) and applications or tools of any kind (see my <a href="/portfolio">Portfolio</a>), my heart is beating for <strong>game development</strong>. From writing simple and complex game logic and mechanics to designing and implementing intuitive in-game UIs and creating realistic acoustic environments, I love every aspect of it.
            </p>
            <div class="emoji-row"><HeartPulse size="2rem"/><CodeJson size="2rem"/><CameraControl size="2rem"/></div>

            <p>
                Primarily working with <em>Unity</em> and <em>Wwise</em>, I have already had the pleasure of creating and releasing a short story-based 3D game (called <a href="/portfolio/nftp">Notes from the Past</a>) in a small team. Thanks to my previous experience, I was able to contribute to the game's development (character controller, UI, camera system, Wwise plugins...) as well as creating artworks of all kind (concept art, branding, cutscenes).
            </p>
            <div class="emoji-row"><CameraPartyMode size="2rem"/><Waveform size="2rem"/><Multimedia size="2rem"/></div>
        </section>

        <section>
            <a class="anchor" id="skillset"></a>
            <h2>My skillset <SkipLink target="#cv"/></h2>
            <p>
                Having gathered extensive development and design experience over the years, I can fondly count the following <strong>hard skills</strong> to my repertoire:
            </p>
            <ul id="hard-skills">
                <li>
                    <h3>Programming/coding languages:</h3>
                    <ul id="prog-lang">
                        <li>C# (.NET)</li>
                        <li>JavaScript/TypeScript</li>
                        <li>C++</li>
                        <li>SQL</li>
                        <li>PHP</li>
                        <li>Python</li>
                    </ul>
                </li>

                <li>
                    <h3>Technologies/Frameworks:</h3>
                    <ul id="tech">
                        <li>Unity (engine & editor)</li>
                        <li>Wwise (Unity integration & authoring)</li>
                        <li>Adobe CC (Photoshop, Illustrator, XD)</li>
                        <li>Web stack (Svelte[Kit], Node.js, mongodb ...)</li>
                        <li>Git</li>
                        <li>Scrum (utilizing Jira)</li>
                    </ul>
                </li>
            </ul>

            <p>
                Because hard skills are not worth a lot without having some according <strong>soft skills</strong>, my skillset also includes:
            </p>

            <ul id="soft-skills">
                <li>Enjoy working on projects in a team</li>
                <li>Solution-oriented communication</li>
                <li>Happy to learn new things</li>
                <li>Very high quality standards</li>
                <li>Creative mind</li>
                <li>I can be funny</li>
            </ul>
        </section>

        <section>
            <a class="anchor" id="cv"></a>
            <h2>Curriculum Vitae <SkipLink target="#top" icon="{ChevronDoubleUp}" text="To top"/></h2>
            <p>TBA</p>
        </section>
    </article>

    <PrevNext/>
</Hero>


<style>
    .hero-img {
        position: absolute;
        height: 60vh;
        top: calc(10vh + 1rem);
        right: 0;
        filter: grayscale(1);
        mix-blend-mode: lighten;
        opacity: .6;
        z-index: -1;
    }

    div.hero-img {
        width: 100%;
        height: 60vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        mask-image: linear-gradient(to bottom, black 0%, transparent 90%);
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(90%, transparent));
    }

    @media screen and (min-width: 1200px){
        .hero-img {
            right: 20vw;
        }
    }

    @media screen and (max-width: 800px) {
        .hero-img {
            top: 5vh;
        }
    }

    .emoji-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        color: var(--secondary-text-col);
        margin: 3rem 0 3rem 0;
        gap: 2rem;
        opacity: .3;
    }

    section {
        margin-bottom: 5rem;
    }

    section h2 {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    section ul {
        margin-top: 1.2rem;
    }

    section h3 {
        margin-bottom: .5rem;
    }

    section ul li {
        margin-top: .2rem;
    }

    .anchor {
        display: block;
        position: relative;
        top: calc(var(--navbar-height) * -1);
        visibility: hidden;
        z-index: -99;
    }
</style>