import React from 'react'
import './Address.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from '@fortawesome/free-brands-svg-icons';

const Address = () => {
  
  return (
    <div className='contact-details' id='section-6'>
      <h1>Contacts</h1>
      <ul>
        <li>
          <FontAwesomeIcon 
          icon={faPhone}
          className='icon' />
          <div className="contact-data">
            <h5>500 342 242</h5>
          </div>
        </li>
        <li>
          <FontAwesomeIcon 
          icon={faEnvelope} 
          className='icon' />
          <div className="contact-data">
            <h5>office@kamsolutions.pl</h5>
          </div>
        </li>
        <li>
          <FontAwesomeIcon 
          icon={faTwitter} 
          className='icon' />
          <div className="contact-data">
            <h5>Twitter</h5>
            <p>https://twitter.com/wordpress</p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon 
          icon={faFacebook} 
          className='icon' />
          <div className="contact-data">
            <h5>Facebook</h5>
            <p>https://www.facebook.com/facebook</p>
          </div>
        </li>
        <li>
          <FontAwesomeIcon 
          icon={faSkype} 
          className='icon' />
          <div className="contact-data">
            <h5>Skype</h5>
            <p>kamsolutions.pl</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Address