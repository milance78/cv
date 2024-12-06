import React from 'react';
import './Box.scss';
import { PanelVisibility } from '../../pages/inner/Inner';
import Education from '../sections/education/Education';
import Expertise from '../sections/experience/Experience';
import Skills from '../sections/skills/Skills';
import Portfolio from '../sections/portfolio/Portfolio';
import Address from '../sections/contact/Contact';
import AboutMe from '../sections/aboutMe/AboutMe';
// import Feedback from '../feedback/Feedback';

interface IProps {
  panelVisibility: PanelVisibility
}

const Box: React.FC<IProps> = ({ panelVisibility }) => {
  
  
  return (
    <div className={panelVisibility.boxClass}>  
      <AboutMe />
      <Address />
      <Education/>
      <Expertise />
      <Skills />
      <Portfolio /> 
      {/* <Feedback /> */}
    </div>
  )
}

export default Box