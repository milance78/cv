import React, { ReactNode } from 'react';
import './Button.scss';

const Button: React.FC<{ title: string | ReactNode}> = ({ title }) => {

  return (
    <button>{title}</button>
  );
}

export default Button