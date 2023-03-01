<script lang="ts">
    import Plus from 'svelte-material-icons/Plus.svelte';
    import Delete from 'svelte-material-icons/Delete.svelte';
    import Hero from "$lib/components/Hero.svelte";
    import src from '$data/site.json';

    let data = src;

    let serialized: string;
    $: serialized = JSON.stringify(data);

    function addPage(): any {
        const p = {
            title: "New page",
            url: "/",
            icon: ""
        };

        data.pages.push(p);

        //  Force svelte to update component
        data = data;

        return p;
    }

    function removePage(idx: number): any {
        if(idx < 0 || idx >= data.pages.length)
            return false;

        const removed = data.pages.splice(idx, 1);

        //  Force svelte to update component
        data = data;

        return removed;
    }

    function writeBack(): void {
        data = JSON.parse(serialized);

        console.log("WRITEBACK")
    }
</script>

<Hero wide="{true}">
    <h1>Site administration</h1>

        <form>
            <section id="pages">
                <h2>Pages</h2>

                {#each data.pages as page, idx}
                    <fieldset>
                        <legend>{page.title}</legend>
                        <p>
                            <label for="title_{idx}">Title</label>
                            <input type="text" id="title_{idx}" bind:value={page.title}>
                        </p>
                        <p>
                            <label for="url_{idx}">URL (path)</label>
                            <input type="text" id="url_{idx}" bind:value={page.url}>
                        </p>
                        <p>
                            <label for="icon_{idx}">Icon</label>
                            <input type="text" id="icon_{idx}" bind:value={page.icon}>
                        </p>

                        <button class="icon remove" on:click={removePage.bind(null, idx)}>
                            <Delete/>
                        </button>
                    </fieldset>
                {/each}

                <button type="button" class="icon add" on:click={addPage}>
                    <Plus size="3rem"/>
                </button>
            </section>

            <section id="output">
                <h2>Output (site.json)</h2>
                <textarea bind:value={serialized} on:blur={writeBack}></textarea>
            </section>
        </form>

</Hero>

<style>
    h2 {
        border: none;
    }

    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
        gap: 2rem;
    }

    form > section {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    fieldset {
        margin-bottom: 3rem;
        position: relative;
        align-self: stretch;
    }

    fieldset button.remove {
        position: absolute;
        top: 0;
        right: 0;
    }

    fieldset, textarea {
        background: var(--main-bg-gradient);
        border: 2px solid var(--secondary-text-col);
        color: var(--main-text-col);
        border-radius: .7rem;
        padding: 2rem 5rem;
    }

    button {
        font-size: 1.5rem;
        text-transform: uppercase;
        padding: 1rem 2rem;
        background-color: transparent;
        border: 3px solid var(--accent-col);
        color: var(--accent-col);
        border-radius: .6rem;
        cursor: pointer;

        transition: all 300ms ease-out;
    }

    button:hover {
        background-color: var(--accent-col);
        border-color: transparent;
        color: var(--main-bg-col);
    }

    button.icon {
        border: none;
    }

    button.icon:hover {
        background-color: unset;
        color: unset;

        transform: scale(1.1);
    }

    button.remove {
        color: crimson;
        border-color: crimson;
    }

    button.remove:hover {
        color: crimson;
        border-color: crimson;
        filter: brightness(.8);
    }

    button.add {
        color: #ffd200;
        border-color: #ffd200;
    }

    button.add:hover {
        color: #ffd200;
        border-color: #ffd200;
        filter: brightness(.8);
    }

    fieldset > p {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
    }

    input, textarea {
        min-height: 2rem;
        font-size: 1.2rem;
        border-radius: .6rem;
        padding: .5rem 1rem;
        opacity: .8;

        transition: all 300ms ease-out;
    }

    input:hover,
    input:active,
    input:focus,
    textarea:hover,
    textarea:active,
    textarea:focus{
        opacity: 1;
    }

    textarea {
        align-self: stretch;
        min-height: 20vh;
    }

    label {
        text-transform: uppercase;
        font-size: .9rem;
        font-style: italic;
        text-align: center;
    }

    @media only screen and (max-width: 768px){
        fieldset, textarea {
            padding: 1rem;
        }
    }
</style>