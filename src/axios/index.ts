import axios from "axios";

import { GiphyParams } from "../interfaces";

export const fetchTrendingGifs = ({ api_key, limit, rating, offset} : GiphyParams) => {
    return axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key,
          limit,
          rating,
          offset,
        },
    });
};