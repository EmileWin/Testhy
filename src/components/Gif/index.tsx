import React, { useState } from "react";

import { GifProps } from "../../interfaces";
import LockSVG from '../../assets/lock.svg'
import UnlockSVG from '../../assets/unlock.svg'
import "./Gif.scss";

const Gif = ({ gif }: GifProps) => {
  const [locked, setLocked] = useState(
    !!window.localStorage.getItem(gif.index)
  );

  const gifClickHandler = () => {
    if (!locked) {
      window.localStorage.setItem(gif.index, JSON.stringify(gif));
    } else {
      window.localStorage.removeItem(gif.index);
    }
    setLocked((prev) => !prev);
  };

  return (
    <div className="gif" onClick={gifClickHandler}>
      {locked && ( <img className="lock-image main-lock" src={LockSVG} alt="lock" /> )}
      <div className="block">
        <img className="lock-image" src={locked ? UnlockSVG : LockSVG} alt="lock" />
        <div className="lock-text">Click to {locked ? "unlock" : "lock"}</div>
      </div>
      <img className="gif-image" src={gif.url} alt={gif.id} />
    </div>
  );
};

export default Gif;
