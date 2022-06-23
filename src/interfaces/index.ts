export interface GifProps {
    gif: {
        index: string;
        id: string;
        url: string;
    }
}

export interface AppState {
    gifs: {
        index: string;
        id: string;
        url: string;
    }[];
    offset: number;
}

export interface ButtonProps {
    buttonText: string;
    onClick: (event) => void;
}

export interface GiphyParams {
    api_key: string;
    limit: number;
    rating: string;
    offset: number;
}