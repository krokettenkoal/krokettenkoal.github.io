<script lang="ts">
    import { page } from '$app/stores';
    import EmoticonSad from 'svelte-material-icons/EmoticonSad.svelte';
    import Hero from "$lib/components/Hero.svelte";
    import PrevNext from "$lib/components/PrevNext.svelte";

    const descriptions: any = {
        '404': `The page <strong>${$page.url.pathname}</strong> could not be found. What are you searching for, Sherlock?`
    }

    function getErrorDescription(code: number): string | undefined {
        const k = String(code);

        return descriptions[k];
    }
</script>

<Hero>
    {@const desc = getErrorDescription($page.status)}
    <article id="error">
        <section>
            <h1>We has error
                {#if $page.error.id}
                    {$page.error.id}
                {/if}
                <EmoticonSad color="red"/>
            </h1>

            <p><em>{$page.status}: {$page.error.message}</em></p>

            {#if desc}
                <p>{@html desc}</p>
            {/if}

        </section>
    </article>

    <PrevNext/>
</Hero>

