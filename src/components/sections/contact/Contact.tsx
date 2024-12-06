import React, { useContext, useEffect, useRef } from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { ElementsContext } from '../../../contexts/navigateContext';
import { Elements } from '../../navigation/Navigation';

const Contact = () => {

  const {setElements} = useContext(ElementsContext);
  const contactRef = useRef(null);

  useEffect(()=>{
    setElements(
      (prev: Elements) => ({
          ...prev,
          contactElement: contactRef.current
        })
  )
  }, [setElements]);

  return (
    <section className='contact-details'
    ref={contactRef}>
      <h1>Contact</h1>
      <ul>
        <li>
          <Link to="tel:+381 65 8888 530">
            <FontAwesomeIcon
              icon={faPhone}
              className='icon' />
            <div className="contact-data">
              <h5>+381 65 8888 530</h5>
            </div>
          </Link>
        </li>
        <li>
          <Link to="mailto:milance78@yahoo.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className='icon' />
            <div className="contact-data">
              <h5>milance78@yahoo.com</h5>
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
    </section >
  )
}

export default Contact