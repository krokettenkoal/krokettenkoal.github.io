/**
 * Hydrate after the specified delay
 * @type {import('astro').ClientDirective}
 */
export default (load, opts, el) => {
    /**
     * @type {number}
     */
    const delayMs = opts.value.ms ?? (opts.value.seconds * 1000);
    setTimeout(async () => {
        const hydrate = await load();
        await hydrate();
    }, delayMs);
}