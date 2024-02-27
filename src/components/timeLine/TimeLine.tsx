import React from 'react';
import './Timeline.scss';
import { educationData } from '../../data/data';
import Info from '../info/Info';

const TimeLine = () => {
  return (
    <section className='timeline' id='section-2'>
      <h1>Education</h1>
      <div className="timeline-container">
        {educationData.map((el, i) => <article key={i}>
          <section className='left'>
            <h3>{el.date}</h3>
            <div className='vertical-line'></div>
          </section>
          <section className='right'>
            <div className="triangle"></div>
            <h3>{el.title}</h3>
            <Info description={el.text} />
          </section>
        </article>)}
      </div>

    </section>
  )
}

export default TimeLine