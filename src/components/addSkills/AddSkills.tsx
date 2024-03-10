import React, { useState, useEffect } from 'react'
import './AddSkills.scss'
import Button from '../button/Button'
import { Skill } from '../skills/Skills';
import { useAppDispatch } from '../../redux/store';
import { fetchSkillsData, sendSkillsData } from '../../redux/features/skillsSlice';
// import { addSkill } from '../../redux/features/skillsSlice';

const AddSkills: React.FC = () => {

    const dispatch = useAppDispatch();

    const [skill, setSkill] = useState<Skill>(
        { skillName: '', skillRange: '', }
    );
    const errors = {
        nameEmpty: 'Skill name is a required field',
        rangeEmpty: 'Skill range is a required field',
        rangeNaN: 'Skill range must be a number value',
        rangeOver100: 'Skill range must be less than or equal to 100',
        rangeUnder10: 'Skill range must be greater than or equal to 10',
    }
    const [nameError, setNameError] = useState<string>('');
    const [rangeError, setRangeError] = useState<string>('');
    const [errorIsDisplayed, setErrorIsDisplayed] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const nameChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setErrorIsDisplayed(true);
        setSkill(
            {
                ...skill,
                skillName: ev.target.value
            }
        );
    };

    const rangeChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setErrorIsDisplayed(true);
        setSkill(
            {
                ...skill,
                skillRange: ev.target.value
            }
        )
    };

    useEffect(() => {
        !skill.skillName && errorIsDisplayed
            ? setNameError(errors.nameEmpty)
            : setNameError('');
        !skill.skillRange && errorIsDisplayed
            ? setRangeError(errors.rangeEmpty)
            : setRangeError('');
        isNaN(Number(skill.skillRange))
            && setRangeError(errors.rangeNaN);
        Number(skill.skillRange) > 100
            && setRangeError(errors.rangeOver100);
        skill.skillRange && Number(skill.skillRange) < 10
            && setRangeError(errors.rangeUnder10);
    }, [errorIsDisplayed, errors.nameEmpty, errors.rangeEmpty, errors.rangeNaN, errors.rangeOver100, errors.rangeUnder10, skill])

    useEffect(()=>{       
        Boolean(nameError) 
        || Boolean(rangeError)
        || skill.skillName === ''
        || skill.skillRange === ''
        ? setIsDisabled(true)
        : setIsDisabled(false)

    }, [rangeError, nameError, skill.skillName, skill.skillRange])

    const submitHandler = (ev: React.FormEvent) => {
        ev.preventDefault();
        dispatch(sendSkillsData(skill));
        dispatch(fetchSkillsData());
     
        setSkill({ skillName: '', skillRange: '', });
        setErrorIsDisplayed(false);
        setIsDisabled(true)
    }

    return (
        <form
            className='add-skills'
            onSubmit={submitHandler}>

            <div className="skill-name">
                <label htmlFor='name'>Skill name</label>
                <input type="text"
                    id='name'
                    value={skill.skillName}
                    placeholder='Enter skill name'
                    onChange={nameChangeHandler} />
            </div>
            <div className="error">{
                nameError
            }</div>
            <div className="skill-range">
                <label htmlFor="">Skill range</label>
                <input type="text"
                    id='range'
                    value={skill.skillRange}
                    placeholder='Enter skill range'
                    onChange={rangeChangeHandler} />
            </div>
            <div className="error">{rangeError}</div>
            <Button
                title='Add skill'
                isDisabled={
                    isDisabled
                } />

        </form>
    )
}

export default AddSkills