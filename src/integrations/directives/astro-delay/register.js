/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
    name: "client:delay",
    hooks: {
        "astro:config:setup": ({addClientDirective}) => {
            addClientDirective({
                name: "delay",
                entrypoint: "./src/integrations/directives/astro-delay/delay.js",
            });
        },
    },
});