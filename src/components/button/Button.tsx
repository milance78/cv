import React, { MouseEventHandler, ReactNode } from 'react';
import './Button.scss';

const Button: React.FC<{
  title: string | ReactNode,
  clickHandler?: MouseEventHandler,
  isDisabled?: boolean
}> = ({ title, clickHandler, isDisabled }) => {

  return (
    <button
      className={isDisabled
        ? 'button button-disabled'
        : 'button'}
      onClick={clickHandler}
      disabled={isDisabled}>
      {title}
    </button>

  );
}

export default Button