import React, { useEffect, useState } from 'react'
import './Skills.scss';
import AddSkills from '../addSkills/AddSkills';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { fetchSkillsData } from '../../redux/features/skillsSlice';
import Button from '../button/Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

export interface Skill {
    skillName: string,
    skillRange: string,
}

const Skills = () => {
    const dispatch = useAppDispatch();
    const skillsArray = useAppSelector((state) => state.skills.skillsArray);
    const loadingStatus = useAppSelector((state) => state.skills.getStatus);
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        dispatch(fetchSkillsData())
        console.log('useEffect trigerred');

    }, [dispatch])

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
                {loadingStatus === 'complete'
                    ? skillsArray.map(
                        (el, i) => <div
                            key={i}
                            style={{ width: `${el.skillRange}%` }}>
                            {el.skillName}
                        </div>)
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