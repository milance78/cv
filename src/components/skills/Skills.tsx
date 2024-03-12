import React, { useEffect, useState } from 'react'
import './Skills.scss';
import AddSkills from '../addSkills/AddSkills';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { fetchSkillsData, reset } from '../../redux/features/skillsSlice';
import Button from '../button/Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { getStorageData } from '../../services/server';


export interface Skill {
    skillName: string,
    skillRange: string,
    id?: string,
}

const Skills = () => {
    const dispatch = useAppDispatch();
    const skillsArray = useAppSelector((state) => state.skills.skillsArray);
    const loadingStatus = useAppSelector((state) => state.skills.getStatus);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [clearLinkIsVisible, setClearLinkIsVisible] = useState(false);
    const [shouldBeCleared, setShouldBeCleared] = useState(false);

    useEffect(() => {
        dispatch(fetchSkillsData());
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
                ? <AddSkills
                    setShouldBeCleared={setShouldBeCleared}
                    setClearLinkIsVisible={setClearLinkIsVisible} />
                : null}
            <div>
                <>
                    {!shouldBeCleared
                        ? <div
                            className="skills-container"
                            onMouseEnter={() => setClearLinkIsVisible(true)}
                            onMouseLeave={() => setClearLinkIsVisible(false)}>
                            {loadingStatus === 'complete'
                                ? skillsArray && skillsArray.map(
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
                                            margin: '15px auto',
                                            display: 'block',
                                        }} />
                                    : loadingStatus === 'failed'
                                        ? <p className='loading-failed'>
                                            Something went wrong, please review your server connection!
                                        </p>
                                        : null
                            }
                            <p className={
                                clearLinkIsVisible && getStorageData()
                                    ? 'clear-all visible'
                                    : 'clear-all'
                            }
                                onClick={() => {
                                    localStorage.clear();
                                    setShouldBeCleared(true);
                                    dispatch(reset());
                                }}>clear all</p>
                        </div>
                        : null}
            </>
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
        </div >
    )
}

export default Skills