interface EducationItem {
    year: number;
    title: string;
    description: string;
    isCourse: boolean;
}
interface SkillItem {
    skillName: string;
    skillRange: string;
}

interface InitialServerData {
    educationData: EducationItem[];
    initialSkillsData: SkillItem[];
}

const initialServerData: InitialServerData = {
    educationData: [
        {
            year: 1996,
            title: 'Grammar school',
            description: 'Completed high school "Paraćinska gimnazija" in Paraćin.',
            isCourse: false,
        },
        {
            year: 2008,
            title: 'Faculty of Dental Medicine',
            description: 'Graduated from the Faculty of Dental Medicine in Belgrade and received my Doctor of Dental Medicine degree.',
            isCourse: false,
        },
        {
            year: 2020,
            title: 'OK educational center - software testing course',
            description: 'I acquired knowledge regarding basic manual and automated software testing methodologies, with a focus on the utilization of Java Selenium and Cypress',
            isCourse: true,
        },
        {
            year: 2021,
            title: 'Websites Workshop - JS/React basic course',
            description: 'I have acquired a fundamental understanding of HTML, CSS, SCSS, Bootstrap, Tailwind, JavaScript, React, and Redux.',
            isCourse: true,
        },
        {
            year: 2022,
            title: 'Vivify academy - JS/React advanced course',
            description: 'This advanced course was an amazing opportunity for me to level up my programming skills in HTML, CSS, SCSS, Bootstrap, Tailwind, JavaScript, React, and Redux.',
            isCourse: true,
        },
    ],
    initialSkillsData: [
        {
            skillName: 'JavaScript',
            skillRange: '70',
        },
        {
            skillName: 'React',
            skillRange: '80',
        },
        {
            skillName: 'Redux',
            skillRange: '60',
        },
        {
            skillName: 'Html/CSS',
            skillRange: '85',
        },
        {
            skillName: 'SCSS',
            skillRange: '85',
        },


    ]
}

export default initialServerData;