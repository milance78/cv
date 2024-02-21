import React from 'react'
import './Skills.scss';
import AddSkills from '../../addSkills/AddSkills';
import { skillsData } from '../../data/data';

const Skills = () => {
    return (
        <div className='skills'>
            <AddSkills />
            <h1>Skills</h1>
            <div className="skills-container">
                {
                    skillsData.map((el, i) => <div key={i} style={{ width: `${el.skillRange}%` }}>
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
                    <p style={{marginRight: '30px'}}>Proficient</p>
                    <p>Expert</p>
                    <p>Master</p>
                </div>

            </div>
        </div>
    )
}

export default Skills