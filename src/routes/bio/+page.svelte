<script>
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
    import Dotnet from '$lib/components/svelte-simple-icons/src/components/Dotnet.svelte';
    import Typescript from '$lib/components/svelte-simple-icons/src/components/Typescript.svelte';
    import Php from '$lib/components/svelte-simple-icons/src/components/Php.svelte';
    import Html5 from '$lib/components/svelte-simple-icons/src/components/Html5.svelte';
    import Unity from '$lib/components/svelte-simple-icons/src/components/Unity.svelte';
    import Wwise from '$lib/components/svelte-simple-icons/src/components/Wwise.svelte';
    import Adobecreativecloud from '$lib/components/svelte-simple-icons/src/components/Adobecreativecloud.svelte';
    import Svelte from '$lib/components/svelte-simple-icons/src/components/Svelte.svelte';
    import Nodedotjs from '$lib/components/svelte-simple-icons/src/components/Nodedotjs.svelte';
    import Git from '$lib/components/svelte-simple-icons/src/components/Git.svelte';
    import Jira from '$lib/components/svelte-simple-icons/src/components/Jira.svelte';
    import SkipLink from "$lib/components/SkipLink.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import MiniQuiz from "$lib/components/quiz/MiniQuiz.svelte";
    import PersonalTriviaQuiz from "$data/quiz/personal-trivia.quiz";
    import SkillBadge from "$lib/components/SkillBadge.svelte";
</script>

<Seo title="Bio" description="Where I'm from, where I'm at and where I'll be." />

<a class="anchor" id="top"></a>

<Hero>
    <article class="hero" id="bio">
        <h1>Cajetan Grill</h1>
        <div class="hero-img" style="background-image:url('/img/cgrill_opaque.webp')" />

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
                Years went by and the urge to improve my skills and to develop my full potential grew in me, which finally made me start studying <a href="https://www.fhstp.ac.at/en/academic-studies-continuing-education/media-digital-technologies/media-technology/course-contents" target="_blank" rel="noreferrer"><em>Media Technology</em></a> at St. Pölten UAS, moving to my former school's town, <strong>Melk</strong>.
                Originally primarily interested in the programme's audio production part (my second favorite hobby), I re-discovered my love for programming and I specialized in <em><strong>Interactive Media</strong></em> and its <em><strong>Digital Game Production</strong></em> module.
                Finishing my studies with a <strong>Bachelor's degree</strong> in 2023, I have decided to deepen and expand my knowledge in the field by starting a <strong>Master's degree</strong> in <a href="https://www.fhstp.ac.at/en/academic-studies-continuing-education/media-digital-technologies/interactive-technologies" target="_blank" rel="noreferrer">Interactive Technologies</a> at St. Pölten UAS (visit the page to see me on the cover photo). To further specialize, I chose <a href="https://www.fhstp.ac.at/en/onepager/master-class-augmented-virtual-reality" target="_blank" rel="noreferrer">Augmented & Virtual Reality</a> as a masterclass.
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
            <ul class="skills-list" id="hard-skills">
                <li>
                    <h3>Programming & coding languages:</h3>
                    <ul class="skill-badges" id="prog-lang">
                        <li>
                            <SkillBadge color="#5027d5">
                                <Dotnet slot="icon" />
                                C# (.NET)
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#2d79c7">
                                <Typescript slot="icon" />
                                JavaScript / TypeScript
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#787cb4">
                                <Php slot="icon" />
                                PHP
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#e44d26">
                                <Html5 slot="icon" />
                                HTML5 / CSS3
                            </SkillBadge>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3>Technologies & frameworks:</h3>
                    <ul class="skill-badges" id="tech">
                        <li>
                            <SkillBadge color="#000000">
                                <Unity slot="icon" />
                                Unity
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#00549f">
                                <Wwise slot="icon" />
                                Wwise
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#ff3c00">
                                <Svelte slot="icon" />
                                Svelte(Kit)
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#539e43">
                                <Nodedotjs slot="icon" />
                                Node.js
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#f05030">
                                <Git slot="icon" />
                                Git
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#da1f26">
                                <Adobecreativecloud slot="icon" />
                                Adobe CC
                            </SkillBadge>
                        </li>
                        <li>
                            <SkillBadge color="#0071ed">
                                <Jira slot="icon" />
                                Scrum (Jira)
                            </SkillBadge>
                        </li>
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
            <h2>Curriculum Vitae <SkipLink target="#quiz"/></h2>
            <img id="curriculum-vitae" src="/img/cv.webp" alt="CV - Cajetan Grill" class="">
        </section>

        <section>
            <a class="anchor" id="quiz"></a>
            <h2>Let's play! <SkipLink target="#top" icon="{ChevronDoubleUp}" text="Top"/></h2>
            <MiniQuiz src={PersonalTriviaQuiz} />
        </section>
    </article>

    <PrevNext/>
</Hero>


<style>
    .hero-img {
        position: absolute;
        height: 60vh;
        top: calc(var(--navbar-height) + 2rem);
        right: 0;
        filter: grayscale(1);
        mix-blend-mode: lighten;
        opacity: .6;
        z-index: -1;
    }

    div.hero-img {
        width: 100%;
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

    @media screen and (max-width: 768px) {
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

    .emoji-row:last-child {
        margin-bottom: 0;
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

    #curriculum-vitae {
        width: 100%;
    }

    ul.skills-list {
        list-style: none;
    }

    ul.skill-badges {
        list-style: none;
        padding: 0;
    }

    .skill-badges {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 1rem;
        row-gap: .5rem;
    }
</style>