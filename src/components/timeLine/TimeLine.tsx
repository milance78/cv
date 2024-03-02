import React, { useEffect, useState } from 'react';
import './Timeline.scss';
import Info from '../info/Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import '../../services/server'

interface Article {
  date: string,
  title: string,
  description: string;
}



const TimeLine = () => {


  const [educationData, setEducationData] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/api/education')
      .then((res) => res.json())
      .then((data) => setEducationData(data))
  }, []);

  return (
    <section className='timeline' id='section-2'>
      <h1>Education</h1>
      {educationData.length !== 0
        ? <div className="timeline-container">
          {educationData.map((el, i) => <article key={i}>
            <section className='left'>
              <h3>{el.date}</h3>
              <div className='vertical-line'></div>
            </section>
            <section className='right'>
              <div className="triangle"></div>
              <h3>{el.title}</h3>
              <Info description={el.description} />
            </section>
          </article>)}
        </div>
        : <FontAwesomeIcon
          icon={faRotate} spin size='2xl'
          style={{
            color: 'var(--accents)',
            width: '50px',
            margin: '10% auto',
            display: 'block',
          }} />}



    </section>
  )
}

export default TimeLine