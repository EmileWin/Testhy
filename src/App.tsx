import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Body from "./components/Body";
import Header from "./components/Header";
import { fetchTrendingGifs } from "./axios";
import { AppState } from "./interfaces";
import { Gif } from "./types";
import { gifsActions } from "./store/index";

const App = () => {
  const dispatch = useDispatch();
  const offset = useSelector((state: AppState) => state.offset);

  const spaceClickHandler = useCallback((event) => {
    event.preventDefault();
    if (event.code === "Space" && event.target === document.body) {
      dispatch(gifsActions.setOffset());
    }
  }, [dispatch])

  useEffect(() => {
    window.addEventListener("keydown", spaceClickHandler);

    const giphyParams = {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      limit: 12,
      rating: "g",
      offset,
    }

    const processData = async () => {
      const result = await fetchTrendingGifs(giphyParams);

      const gifs = result.data.data
        .sort(
          (a: Gif, b: Gif) =>
            new Date(b.import_datetime).valueOf() -
            new Date(a.import_datetime).valueOf()
        )
        .map((gif: Gif, index: number) => {
          const lockedGif = window.localStorage.getItem("" + index);
          if (lockedGif) {
            return JSON.parse(lockedGif);
          }

          return {
            index,
            id: gif.id,
            url: gif.images.original.url,
          };
        });

      dispatch(gifsActions.setGifs(gifs));
    };

    processData();
    return () => window.removeEventListener('keydown', spaceClickHandler);
  }, [offset, dispatch, spaceClickHandler]);

  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

export default App;
