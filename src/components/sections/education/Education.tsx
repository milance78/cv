import React, { useContext, useEffect, useRef } from 'react';
import './Education.scss';
import Info from '../../info/Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import '../../../services/server'
import { fetchEducationData } from '../../../redux/features/educationSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { ElementsContext } from '../../../contexts/navigateContext';
import { Elements } from '../../navigation/Navigation';


const Education = () => {

  const dispatch = useAppDispatch();
  const educationData = useAppSelector((state) => state.education.educationArray);
  const loadingStatus = useAppSelector((state) => state.education.status);
  const { setElements } = useContext(ElementsContext);
  const educationRef = useRef(null)

  useEffect(() => {
    setElements(
      (prev: Elements) => ({
        ...prev,
        educationElement: educationRef.current
      })
    )
  }, [setElements]);

  useEffect(() => {
    dispatch(fetchEducationData());
  }, [dispatch]);

  return (
    <section className='education' 
    ref={educationRef}>
      <h1>Education and courses</h1>
      {
        loadingStatus === 'complete'
          ? <div className="education-container">
            {educationData.map((el, i) => <article key={i}>
              <section className='left'>
                <h3>{el.year}</h3>
                <div className='vertical-line'></div>
              </section>
              <section className='right'>
                <div className="triangle"></div>
                <h3 className={el.isCourse ? 'course-font-color' : ''}>{el.title}</h3>
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


export default Education