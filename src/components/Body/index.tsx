import React from 'react';
import { useSelector } from "react-redux";

import Gif from "../Gif";
import { AppState } from '../../interfaces';
import "./Body.scss";

const Body = () => {
  const gifs = useSelector((state: AppState) => state.gifs);

  return (
    <div className="body">
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default Body;
