import React from 'react'
import staticData from '../../data/staticData';
import './AboutMe.scss'

const AboutMe = () => {
    const { aboutMeInfo } = staticData;
    return (
        <div>
            <h1>About me</h1>
            <p>{aboutMeInfo.introduction}</p>
            <br />
            <p>{aboutMeInfo.moreInfo}</p>
            <br /><br />
        </div>
    )
}

export default AboutMe