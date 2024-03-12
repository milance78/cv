import { createServer } from 'miragejs';


const updateStorage = (data) => {
    localStorage.setItem(
        'skillsData', JSON.stringify(data)
    );
};

export const getStorageData = () => {
    return JSON.parse(
        localStorage.getItem('skillsData')
    );
}

createServer(
    {
        routes() {
            this.get("/api/education", () => {
                return [
                    {
                        date: '1990',
                        title: 'Title 1',
                        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
                    },
                    {
                        date: '1991',
                        title: 'Title 2',
                        description: 'Donec egestas ligula vel odio rutrum, sed cursus diam cursus. In hac habitasse platea dictumst. In eget lacus vel mi aliquam porta ut vel ante. Praesent dui erat, malesuada vitae accumsan a, ultrices ac orci. Maecenas dignissim luctus mauris id cursus. Suspendisse potenti. Sed laoreet volutpat enim nec ultrices. ',
                    },
                    {
                        date: '1994',
                        title: 'Title 3',
                        description: 'Proin aliquet nisi sit amet tempus pharetra. Donec ullamcorper aliquet libero, a efficitur elit iaculis porta. Vivamus tempor vehicula libero, ut ultricies tortor tincidunt vel. Etiam tincidunt tristique ante, a fringilla elit. Donec aliquet ante in urna placerat, sit amet vehicula quam lobortis. Curabitur vehicula cursus ultricies. Donec suscipit lorem rhoncus, eleifend tellus sed, tempus erat. Sed maximus, elit nec rhoncus egestas, urna eros scelerisque mauris, in tristique orci enim in sapien. Cras suscipit quam quis nisl posuere, maximus pulvinar dolor ultricies.',
                    },
                    {
                        date: '1997',
                        title: 'Title 4',
                        description: 'Suspendisse lacinia est a ligula finibus, a dictum risus mollis. Mauris consectetur est vitae est malesuada, et tristique ex lobortis. Donec maximus orci at justo auctor, sit amet elementum tortor interdum. Nam non luctus eros. Vivamus auctor libero quis ligula elementum, vel gravida metus ultricies. Aliquam viverra vel enim vitae ultrices. Morbi sollicitudin risus auctor turpis tincidunt, vel volutpat erat feugiat. ',
                    },
                    {
                        date: '2004',
                        title: 'Title 5',
                        description: 'Phasellus posuere congue auctor. Sed odio ligula, consectetur sed enim eu, aliquam tempus orci. Aenean in pretium sapien. Cras ut nisi a ex lacinia vestibulum. Cras non varius dolor. Nam lacinia malesuada accumsan',
                    },
                    {
                        date: '2008',
                        title: 'Title 6',
                        description: 'Donec suscipit lorem rhoncus, eleifend tellus sed, tempus erat. Sed maximus, elit nec rhoncus egestas, urna eros scelerisque mauris, in tristique orci enim in sapien. Cras suscipit quam quis nisl posuere, maximus pulvinar dolor ultricies. Quisque ac enim lacinia, vestibulum diam vel, scelerisque felis. In malesuada varius sodales.',
                    },
                    {
                        date: '2010',
                        title: 'Title 7',
                        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
                    },
                    {
                        date: '2013',
                        title: 'Title 8',
                        description: 'Donec egestas ligula vel odio rutrum, sed cursus diam cursus. In hac habitasse platea dictumst. In eget lacus vel mi aliquam porta ut vel ante. Praesent dui erat, malesuada vitae accumsan a, ultrices ac orci. Maecenas dignissim luctus mauris id cursus. Suspendisse potenti. Sed laoreet volutpat enim nec ultrices. ',
                    },
                    {
                        date: '2016',
                        title: 'Title 9',
                        description: 'Proin aliquet nisi sit amet tempus pharetra. Donec ullamcorper aliquet libero, a efficitur elit iaculis porta. Vivamus tempor vehicula libero, ut ultricies tortor tincidunt vel. Etiam tincidunt tristique ante, a fringilla elit. Donec aliquet ante in urna placerat, sit amet vehicula quam lobortis. Curabitur vehicula cursus ultricies. Donec suscipit lorem rhoncus, eleifend tellus sed, tempus erat. Sed maximus, elit nec rhoncus egestas, urna eros scelerisque mauris, in tristique orci enim in sapien. Cras suscipit quam quis nisl posuere, maximus pulvinar dolor ultricies.',
                    },
                    {
                        date: '2017',
                        title: 'Title 10',
                        description: 'Suspendisse lacinia est a ligula finibus, a dictum risus mollis. Mauris consectetur est vitae est malesuada, et tristique ex lobortis. Donec maximus orci at justo auctor, sit amet elementum tortor interdum. Nam non luctus eros. Vivamus auctor libero quis ligula elementum, vel gravida metus ultricies. Aliquam viverra vel enim vitae ultrices. Morbi sollicitudin risus auctor turpis tincidunt, vel volutpat erat feugiat. ',
                    },
                    {
                        date: '2019',
                        title: 'Title 11',
                        description: 'Phasellus posuere congue auctor. Sed odio ligula, consectetur sed enim eu, aliquam tempus orci. Aenean in pretium sapien. Cras ut nisi a ex lacinia vestibulum. Cras non varius dolor. Nam lacinia malesuada accumsan',
                    },
                    {
                        date: '2022',
                        title: 'Title 12',
                        description: 'Donec suscipit lorem rhoncus, eleifend tellus sed, tempus erat. Sed maximus, elit nec rhoncus egestas, urna eros scelerisque mauris, in tristique orci enim in sapien. Cras suscipit quam quis nisl posuere, maximus pulvinar dolor ultricies. Quisque ac enim lacinia, vestibulum diam vel, scelerisque felis. In malesuada varius sodales.',
                    },
                ]
            }, { timing: 3000 });
            this.get("/api/skills", () => {
                return getStorageData();
                }, { timing: 3000 });
            this.post("/api/skills", (schema, request) => {
                !getStorageData() && updateStorage([]);
                let attrs = JSON.parse(request.requestBody);
                updateStorage([...getStorageData(), attrs])
               
            });
        }
    }
);