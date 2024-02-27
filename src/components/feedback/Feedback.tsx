import React from 'react'
import './Feedback.scss'
import { feedbackData } from '../../data/data'
import Info from '../info/Info'

const Feedback = () => {
    return (
        <div id='section-7'>
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
        </div>
    )
}

export default Feedback