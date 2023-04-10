import portfolio from "$data/portfolio/portfolio.data";

/** @type {import('./$types').PageLoad} */
export async function load({ params }: any) {
    const proj = portfolio.projects.find(p => p.id === params.projectId);

    return {
        projectId: params.projectId,
        project: proj
    }
}