import {Portfolio, DEFAULT_PROJECT} from "$lib/portfolio";
import {error} from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }: any) {
    try {
        const proj = params.projectId ? await Portfolio.findProject(params.projectId) : DEFAULT_PROJECT;

        return {
            project: proj
        }
    }
    catch(err: any){
        throw error(500, err);
    }
}

export const prerender = false;