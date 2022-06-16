/**
 * A type to describe picture use in the carousel
 */
export type LCDPicture = {
    /** unique id to identify object  */
    id: number;
    /** title of the picture */
    title: string;
    /** content to describe the picture */
    description?: string,
    /** file path to the picture */
    path: string
}
