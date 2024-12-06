import React, { useContext, useEffect, useRef } from 'react'
import staticData from '../../../data/staticData';
import './AboutMe.scss'
import { ElementsContext } from '../../../contexts/navigateContext';
import { Elements } from '../../navigation/Navigation';

const AboutMe = () => {
    const { aboutMeInfo } = staticData;
    const { setElements } = useContext(ElementsContext);
    const aboutMeRef = useRef(null);

    useEffect(()=> {
        setElements(
            (prev: Elements) => ({
                ...prev,
                aboutMeElement: aboutMeRef.current
              })
        )
    }, [setElements]);

    return (
        <section className='about-me'
        ref={aboutMeRef}>
            <h1>About me</h1>
            <p>{aboutMeInfo.introduction}</p>
            <br />
            <p>{aboutMeInfo.moreInfo}</p>
            <br /><br />
        </section>
    )
}

export default AboutMe