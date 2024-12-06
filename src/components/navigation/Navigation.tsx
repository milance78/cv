/* eslint-disable no-restricted-globals */
import React from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { ElementsContext } from '../../contexts/navigateContext';
import { useContext } from 'react';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
export interface Elements {
  aboutMeElement: HTMLDivElement;
  educationElement: HTMLDivElement;
  experienceElement: HTMLDivElement;
}

const Navigation = () => {

  const { 
    elements: {
      educationElement, 
      experienceElement,
      aboutMeElement,
      contactElement,
      skillsElement,
      portfolioElement,
    } 
  } = useContext(ElementsContext); // deep destructuring 

  const scrollTo = (element: HTMLDivElement) => {
    element.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <div className='navigation'>
      <div onClick={() => scrollTo(aboutMeElement)}>
        <FontAwesomeIcon icon={faUser} />
        <p>About me</p>
      </div>
      <div onClick={() => scrollTo(contactElement)}>
        <FontAwesomeIcon icon={faLocationArrow} />
        <p>Contact</p>
      </div>
      <div onClick={() => scrollTo(educationElement)}>
        <FontAwesomeIcon icon={faGraduationCap} />
        <p>Education</p>
      </div>
      <div onClick={() => scrollTo(experienceElement)}>
        <FontAwesomeIcon icon={faPen} />
        <p>Experience</p>
      </div>
      <div onClick={() => scrollTo(skillsElement)}>
        <FontAwesomeIcon icon={faGem} />
        <p>Skills</p>
      </div>
      <div onClick={() => scrollTo(portfolioElement)}>
        <FontAwesomeIcon icon={faSuitcase} />
        <p>Portfolio</p>
      </div>
      {/* <a href="#section-7">
        <FontAwesomeIcon icon={faComment} />
        <p>Feedback</p>
      </a> */}

    </div>
  )
}

export default Navigation