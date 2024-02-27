import React from 'react'
import './Feedback.scss'
import { feedbackData } from '../../data/data'
import Info from '../info/Info'
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
    return (
        <div id='section-7' className='feedback'>
            <h1>Feedback</h1>
            <section className="feedback-container">
                {feedbackData.map((el, i) =>
                    <article className='feedback-item'>
                        <Info description={el.text} />
                        <div className="person-info">
                            <img src={el.img} alt={`person${i+1}`} />
                            <p>{el.name}</p> &nbsp;
                            <p>{`${el.profession},`}</p> &nbsp;
                            <p className='website'>{el.website}</p>
                        </div>
                    </article>
                )}
            </section>
            <a href="#section-1">
        <Button
          title={<FontAwesomeIcon icon={faChevronUp} />}
          styling={{
            position: 'absolute',
            height: '30px',
            width: '30px',
            bottom: '-50px',
            right: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0'
          }}
        />
      </a>
        </div>
    )
}

export default Feedback