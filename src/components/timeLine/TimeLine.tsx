import React, { useEffect } from 'react';
import './Timeline.scss';
import Info from '../info/Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import '../../services/server'
import { fetchEducationData } from '../../redux/features/educationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const TimeLine = () => {

  const dispatch = useAppDispatch();
  const educationData = useAppSelector((state) => state.education.educationArray);
  const loadingStatus = useAppSelector((state) => state.education.status);

  useEffect(() => {
    dispatch(fetchEducationData());
  }, [dispatch]);

  return (
    <section className='timeline' id='section-2'>
      <h1>Education</h1>
      {
        loadingStatus === 'complete'
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
          : loadingStatus === 'loading'
            ? <FontAwesomeIcon
              icon={faRotate} spin size='2xl'
              style={{
                color: 'var(--accents)',
                width: '50px',
                margin: '10% auto',
                display: 'block',
              }} />
            : loadingStatus === 'failed'
              ? <p className='loading-failed'>
                Something went wrong, please review your server connection!
              </p>
              : null
      }
    </section>
  )
}

export default TimeLine