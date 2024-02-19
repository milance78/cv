import React from 'react';
import './Box.scss';
import { PanelVisibility } from '../../pages/inner/Inner';
import { aboutMeInfo } from '../../data/data';
import TimeLine from '../timeLine/TimeLine';

interface IProps {
  panelVisibility: PanelVisibility
}

const Box: React.FC<IProps> = ({panelVisibility}) => {
  return (
    <div className={panelVisibility.boxClass}>
      <h1>About me</h1>
      <p>{aboutMeInfo}</p>
      <TimeLine />
    </div>
  )
}

export default Box