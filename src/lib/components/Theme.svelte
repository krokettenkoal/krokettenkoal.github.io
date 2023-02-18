<script context="module" lang="ts">
    const themesFolderPath = '../../data/themes/';

    export async function loadTheme(name?: string): Promise<any> {
        if(!name)
            return Promise.reject(`Theme overwrite removed.`);

        try {

            return import(
                /* @vite-ignore */
                `${themesFolderPath}${name}.css?raw`
                );
        }
        catch(err: any){
            return Promise.reject(err);
        }
    }
</script>

<script lang="ts">
    import {theme} from '../../stores';

    let loading: Promise<string>;
    $: loading = loadTheme($theme);
</script>

{#await loading}
    <!-- LOAD THEME SILENTLY -->
{:then module}
    {@html `<style>${module.default}</style>`}
    {:catch err}
        <!-- NOTHING TO LOAD -->
{/await}