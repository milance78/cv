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
// import { faComment } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div className='navigation'>
      <a href='#section-1'>
        <FontAwesomeIcon icon={faUser} />
        <p>About me</p>
      </a>
      <a href="#section-2">
        <FontAwesomeIcon icon={faLocationArrow} />
        <p>Contact</p>
      </a>
      <a href="#section-3">
        <FontAwesomeIcon icon={faGraduationCap} />
        <p>Education</p>
      </a>
      <a href="#section-4">
        <FontAwesomeIcon icon={faPen} />
        <p>Experience</p>
      </a>
      <a href="#section-5">
        <FontAwesomeIcon icon={faGem} />
        <p>Skills</p>
      </a>
      <a href="#section-6">
        <FontAwesomeIcon icon={faSuitcase} />
        <p>Portfolio</p>
      </a>
      {/* <a href="#section-7">
        <FontAwesomeIcon icon={faComment} />
        <p>Feedback</p>
      </a> */}

    </div>
  )
}

export default Navigation