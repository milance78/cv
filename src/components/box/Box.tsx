import React from 'react';
import './Box.scss';
import { PanelVisibility } from '../../pages/inner/Inner';
import { aboutMeInfo } from '../../data/data';
import TimeLine from '../timeLine/TimeLine';
import Expertise from '../expertise/Expertise';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Address from '../address/Address';
import Feedback from '../feedback/Feedback';

interface IProps {
  panelVisibility: PanelVisibility
}

const Box: React.FC<IProps> = ({panelVisibility}) => {
  return (
    <div className={panelVisibility.boxClass} id='section-1'>
      <h1>About me</h1>
      <p>{aboutMeInfo}</p>
      <TimeLine />
      <Expertise />
      <Skills />
      <Portfolio />
      <Address />
      <Feedback />
    </div>
  )
}

export default Box