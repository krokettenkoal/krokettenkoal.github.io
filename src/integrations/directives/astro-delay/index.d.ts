import 'astro'

export type DelayDirectiveOptions = {
    seconds: number;
    ms?: never;
} | {
    ms: number;
    seconds?: never;
}

declare module 'astro' {
    interface AstroClientDirectives {
        'client:delay'?: DelayDirectiveOptions
    }
}