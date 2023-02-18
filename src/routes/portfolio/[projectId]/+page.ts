import {Portfolio} from "$lib/portfolio";

/** @type {import('./$types').PageLoad} */
export async function load({ params }: any) {
    const proj = await Portfolio.findProjects();

    return {
        projectId: params.projectId,
        projects: proj,
        current: await Portfolio.findProject({id: params.projectId})
    }
}