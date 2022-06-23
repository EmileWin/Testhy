import React from 'react';
import { useDispatch } from "react-redux";

import Button from '../Button';
import InfoSVG from '../../assets/info.svg';
import TesthySVG from '../../assets/testhy.svg';
import { gifsActions } from '../../store';
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <img className='header-logo' src={TesthySVG} alt="TESTHY" />
      <div className="header-controls">
        <div className='header-info'>
          <img src={InfoSVG} alt="info" />
          <div>Press <span className="header-spacebar-text">spacebar</span> to shuffle or</div>
        </div>
        <Button onClick={() => dispatch(gifsActions.setOffset())} buttonText='Click here' />
      </div>
    </div>
  );
};

export default Header;
