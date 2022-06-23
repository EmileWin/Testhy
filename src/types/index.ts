export type Gif = {
    index: string;
    id: string;
    url: string;
    import_datetime: Date;
    images: {
        original: {
            url: string;
        }
    }
}