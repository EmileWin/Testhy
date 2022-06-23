import React from 'react';

import { ButtonProps } from '../../interfaces';
import "./Button.scss";

const Header = ({ buttonText, onClick } : ButtonProps) => {
  return (
    <div className='header-refresh-button' onClick={onClick}>{buttonText}</div>
  );
};

export default Header;