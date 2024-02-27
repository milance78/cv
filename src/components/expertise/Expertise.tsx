import React from 'react'
import './Expertise.scss'
import { expertiseData } from '../../data/data'

const Expertise = () => {
    return (
        <section className='expertise' id='section-3'>
            <h1>Experience</h1>
            <div className="expertise-container">
                {expertiseData.map(
                    (el, i) => <article key={i}>
                        <section className="left">
                            <h3>{el.info.company}</h3>
                            <h5>{el.date}</h5>
                        </section>
                        <section className="right">
                            <h3>{el.info.job}</h3>
                            <p>{el.info.description}</p>
                        </section>
                    </article>
                )}
            </div>

        </section>
    )
}

export default Expertise