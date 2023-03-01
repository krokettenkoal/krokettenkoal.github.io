/**
 * Enumeration of supported/known media types (e.g. for slideshows).
 * Primarily used for dynamic component binding.
 */
export enum MediaType {
    Image = 'img',
    Video = 'video',
    Audio = 'audio',
}

/**
 * Interface representing a media source (e.g. for slideshows)
 */
export interface IMedia {
    type: string;
    source: string;
    mime?: string;
    caption?: string;
}