import React, { MouseEventHandler, ReactNode } from 'react';
import './Button.scss';

interface IButton {
  title: string | ReactNode;
  clickHandler?: MouseEventHandler;
  isDisabled?: boolean;
  styling?: Object
}

const Button: React.FC<IButton> = ({ title, clickHandler, isDisabled, styling }) => {
  
  return (
    <button
      className={isDisabled
        ? 'button button-disabled'
        : 'button'}
      onClick={clickHandler}
      disabled={isDisabled}
      style={styling}>
      {title}
    </button>

  );
}

export default Button