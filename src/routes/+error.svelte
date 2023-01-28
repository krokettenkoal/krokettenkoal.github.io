<script>
    import { page } from '$app/stores';
    import EmoticonSad from 'svelte-material-icons/EmoticonSad.svelte';
</script>

<article id="error">
    <section>
        <h1>We has error
            {#if $page.error.id}
                {$page.error.id}
            {/if}
            <EmoticonSad color="red"/>
        </h1>

        <p><em>{$page.error.message}</em></p>

        {#if $page.error.message === 'Not Found'}
            <p>The page <strong>{$page.url.pathname}</strong> could not be found. What are you searching for, Sherlock?</p>
        {/if}

    </section>
</article>
