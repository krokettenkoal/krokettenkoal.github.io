import { Portfolio } from "$lib/portfolio";
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const proj = await Portfolio.findProjects();
    return {
        projects: proj
    };
}
//# sourceMappingURL=+page.js.map