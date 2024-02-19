import React from 'react';
import './Timeline.scss';
import { education } from '../../data/data';
import Info from '../info/Info';

const TimeLine = () => {
  return (
    <div className='timeline'>
        {education.map((el, i)=> <article key={i}>
        <h3>{el.title}</h3>
        <Info description={el.description}/>
        </article>)}
    </div>
  )
}

export default TimeLine