import { Portfolio } from "$lib/portfolio";
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const proj = await Portfolio.findProjects();
    return {
        projectId: params.projectId,
        projects: proj,
        current: await Portfolio.findProject({ id: params.projectId })
    };
}
//# sourceMappingURL=+page.js.map