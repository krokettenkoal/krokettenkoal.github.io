<script lang="ts">
  const pageTitle = 'Cajetan Grill';
  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;
</script>

<svelte:head>
  <title>{title ? `${title} | ${pageTitle}` : pageTitle}</title>

  {#if description}
    <meta property="description" name="description" content="{description}" />
  {/if}
</svelte:head>