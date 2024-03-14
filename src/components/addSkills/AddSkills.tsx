import React from 'react'
import './AddSkills.scss'
import Button from '../button/Button'
import { useAppDispatch } from '../../redux/store';
import { fetchSkillsData, sendSkillsData } from '../../redux/features/skillsSlice';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import skillsSchema from '../../formValidations/skillsValidation';

interface IAddSkills {
    setShouldBeCleared: React.Dispatch<React.SetStateAction<boolean>>;
    setClearLinkIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddSkills: React.FC<IAddSkills> = (
    { setShouldBeCleared, setClearLinkIsVisible }
) => {

    const dispatch = useAppDispatch();

    type FormObject = {
        skillName: string,
        skillRange: number | string,
    }

    const initalValues =
    {
        skillName: '',
        skillRange: '',
    }

    const submitHandler = (values: FormObject, { resetForm }: any) => {
        dispatch(sendSkillsData(values));
        dispatch(fetchSkillsData());
        setShouldBeCleared(false);
        setClearLinkIsVisible(false);
        resetForm({
            skillName: '',
            skillRange: '',
        });
    }

    return (
        <Formik initialValues={initalValues}
            onSubmit={submitHandler}
            validationSchema={skillsSchema}>
            {(formik) => <Form className='add-skills'>
                <label htmlFor='skillName'>Skill name</label>
                <Field name='skillName'
                    placeholder='Enter skill name'
                    id='skillName' />
                <div className="error">
                    <ErrorMessage name='skillName' component='div'/>
                </div>
                <label htmlFor='skillRange'>Skill range</label>
                <Field name='skillRange'
                    placeholder='Enter skill range'
                    type='number'
                    id='skillRange' />
                <div className="error">
                    <ErrorMessage name='skillRange' component='span' />
                </div>
                <Button
                    title='Add skill'
                    isDisabled={
                        !formik.isValid
                    } />
            </Form>}
        </Formik>
    )
}

export default AddSkills