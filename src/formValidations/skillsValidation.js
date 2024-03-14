import * as yup from 'yup';

const skillsSchema = yup.object().shape({
    skillName: yup.string().required('Skill name is a required field'),
    skillRange: yup
    .number()
    .typeError('Skill range must be a number value')
    .required('Skill range is a required field')
    .min(10, 'Skill range must be greater than or equal to 10')
    .max(100, 'Skill range must be less than or equal to 100'),
})

export default skillsSchema;