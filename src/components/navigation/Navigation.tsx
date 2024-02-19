import React from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <ul className='navigation'>
      <li><FontAwesomeIcon icon={faUser} />
        <p>About me</p>
      </li>
      <li><FontAwesomeIcon icon={faGraduationCap} />
        <p>Education</p>
      </li>
      <li><FontAwesomeIcon icon={faPenToSquare} />
        <p>Experience</p>
      </li>
      <li><FontAwesomeIcon icon={faGem} />
        <p>Portfolio</p>
      </li>
      <li><FontAwesomeIcon icon={faSuitcase} />
        <p>Contacts</p>
      </li>
      <li><FontAwesomeIcon icon={faComment} />
        <p>Feedback</p>
      </li>
    </ul>
  )
}

export default Navigation