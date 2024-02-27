import React, { useState } from 'react'
import './Skills.scss';
import AddSkills from '../addSkills/AddSkills';
import { useSelector } from 'react-redux';
import Button from '../button/Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface Skill {
    skillName: string,
    skillRange: string,
}

const Skills = () => {
    const skillsArray: Skill[] = useSelector((state: any) => state.skills.skillsArray);
    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <div className='skills' id='section-4'>
            <h1>Skills</h1>
            <Button
                title={
                    <>
                        <div className='icon'>
                            <FontAwesomeIcon
                                icon={faPen}
                                style={{
                                    height: '10px',
                                    width: '10px',
                                }} />
                        </div>
                        <p>{isDisplayed
                            ? 'Close edit'
                            : 'Open edit'}</p>
                    </>
                }
                clickHandler={() => {
                    setIsDisplayed(!isDisplayed);
                }} />
            {isDisplayed
                ? <AddSkills />
                : null}
            <div className="skills-container">
                {
                    skillsArray.map(
                        (el, i) => <div
                            key={i}
                            style={{ width: `${el.skillRange}%` }}>
                            {el.skillName}
                        </div>)
                }
            </div>
            <div className="ruler">
                <div className="marks">
                    <div className="mark"></div>
                    <div className="mark"></div>
                    <div className="mark"></div>
                    <div className="mark"></div>
                </div>
                <div className="line"></div>
                <div className="skillLevels">
                    <p>Beginner</p>
                    <p style={{ marginRight: '3%' }}>Proficient</p>
                    <p style={{ marginRight: '2%' }}>Expert</p>
                    <p>Master</p>
                </div>

            </div>
        </div>
    )
}

export default Skills