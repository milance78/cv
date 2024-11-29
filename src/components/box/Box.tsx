import React from 'react';
import './Box.scss';
import { PanelVisibility } from '../../pages/inner/Inner';
import staticData from '../../data/staticData';
import TimeLine from '../education/Education';
import Expertise from '../experience/Experience';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Address from '../address/Address';
import Feedback from '../feedback/Feedback';
import AboutMe from '../aboutMe/AboutMe';

interface IProps {
  panelVisibility: PanelVisibility
}

const Box: React.FC<IProps> = ({ panelVisibility }) => {

  
  return (
    <div className={panelVisibility.boxClass} id='section-1'>  
      <AboutMe />
      <Address />
      <TimeLine />
      <Expertise />
      <Skills />
      <Portfolio /> 
      {/* <Feedback /> */}
    </div>
  )
}

export default Box