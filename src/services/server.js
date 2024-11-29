import { createServer } from 'miragejs';
import initialServerData from '../data/serverData';

const { educationData, initialSkillsData } = initialServerData;

const updateStorage = (data) => {
    localStorage.setItem(
        'skillsData',
        JSON.stringify(data)
    );
};

export const getStorageData = () =>
    JSON.parse(
        localStorage.getItem('skillsData')
    );

// this line overwrites edited skills at every refresh. If you want to keep edited skills, remove this line
updateStorage(initialSkillsData);

createServer(
    {
        routes() {
            this.get(
                "/api/education",
                () => educationData,
                { timing: 3000 },
            );
            this.get(
                "/api/skills",
                () => getStorageData(),
                { timing: 3000 },
            );
            this.post(
                "/api/skills",
                (schema, request) => {
                    !getStorageData() && updateStorage([]);
                    let attrs = JSON.parse(request.requestBody);
                    updateStorage([...getStorageData(), attrs])
                },
            );
        }
    }
);