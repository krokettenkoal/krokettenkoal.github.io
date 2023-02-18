<script context="module" lang="ts">
    const themesFolderUrl = '/themes/';
    export const themeUrl = (themeName: string): string => themesFolderUrl + themeName + '.css';
</script>

<script lang="ts">
    import {theme} from '../../stores';
</script>

{#if $theme}
    <link rel="stylesheet" href="{themeUrl($theme)}"/>
{/if}