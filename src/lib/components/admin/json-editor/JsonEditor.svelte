<script context="module" lang="ts">
    import {SvelteComponent} from "svelte";
    import NumberField from "./NumberField.svelte";
    import TextArea from "./TextArea.svelte";
    import TextField from "./TextField.svelte";
    import ArrayField from "./ArrayField.svelte";
    import ObjectField from "./ObjectField.svelte";
    import BoolField from "./BoolField.svelte";

    export function getValueField(v: unknown): SvelteComponent | undefined {
        if(v === undefined || v === null)
            return;

        if(v.constructor === Boolean)
            return BoolField;

        if(v.constructor === Number)
            return NumberField;

        if(v.constructor === String){
            const s = String(v);
            if(s.length > 100)
                return TextArea;

            return TextField;
        }

        if(v.constructor === Array)
            return ArrayField;

        if(v.constructor === Object)
            return ObjectField;

        return TextField;
    }
</script>

<script lang="ts">
    export let src: any;
    export let filename: string;
</script>

<article class="json-editor">
    <section id="in">
        <h2>{filename}</h2>
        <form>
            <svelte:component this={getValueField(src)} bind:value={src}/>
        </form>
    </section>

    <section id="out">
        <h2>Output ({filename})</h2>
        <textarea>{JSON.stringify(src)}</textarea>
    </section>
</article>

<style>
    article, article > section {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
    }

    textarea {
        color: var(--main-text-col);
        font-size: 1.2rem;
        background: var(--main-bg-gradient);
        border: 2px solid var(--secondary-text-col);
        min-height: 40vh;
        border-radius: .6rem;
    }
</style>
