import {Portfolio} from "$lib/portfolio";

/** @type {import('./$types').PageLoad} */
export async function load({ params }: any) {
    const proj = await Portfolio.findProjects();

    return {
        projects: proj
    }
}