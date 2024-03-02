import React from 'react'
import './Address.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Address = () => {

  return (
    <div className='contact-details' id='section-6'>

      <h1>Contacts</h1>
      <ul>
        <li>
          <Link to="tel:500 342 242">
            <FontAwesomeIcon
              icon={faPhone}
              className='icon' />
            <div className="contact-data">
              <h5>500 342 242</h5>
            </div>
          </Link>
        </li>
        <li>
          <Link to="mailto:test@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className='icon' />
            <div className="contact-data">
              <h5>office@kamsolutions.pl</h5>
            </div>
          </Link>
        </li>
        <li>
          <Link to='https://twitter.com/wordpress'
            target='_blank'>
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className='icon' />
            <div className="contact-data">
              <h5>Twitter</h5>
              <p>https://twitter.com/wordpress</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='https://www.facebook.com/facebook'
            target='_blank'>
            <FontAwesomeIcon
              icon={faFacebook}
              className='icon' />
            <div className="contact-data">
              <h5>Facebook</h5>
              <p>https://www.facebook.com/facebook</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='skype:kamsolutions.pl?call'>
            <FontAwesomeIcon
              icon={faSkype}
              className='icon' />
            <div className="contact-data">
              <h5>Skype</h5>
              <p>kamsolutions.pl</p>
            </div>
          </Link>
        </li>
      </ul>
    </div >
  )
}

export default Address