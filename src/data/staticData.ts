
import js from '../assets/img/js.png';
import reactTs from '../assets/img/react-ts.png';
import reactJs from '../assets/img/react-js.png'
import personPhoto from '../assets/img/commentator_1.png';
import milanPhoto from '../assets/img/Milan.png';



const staticData = {

    presentedIndividual: {
        name: "Milan Pavlović",
        title: "Programmer. Creative. Innovator",
        description: "Let's explore the digital world together.",
        photo: milanPhoto,
    },

    aboutMeInfo: {
        introduction: 'My professional background is in the fields of customer care and dentistry, with a Doctor of Dental Medicine degree.',
        moreInfo: 'I am now seeking a React Developer role to leverage my HTML5, CSS3, JavaScript, and React skills, along with a keen interest in manual and automated software testing. Eager to contribute to innovative projects and expand technical abilities within a collaborative setting',
    },

    experienceData: [
        {
            date: '2013-2014',
            info: {
                company: 'Google',
                job: 'Front-end developer / php programmer',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil'
            }
        },
        {
            date: '2012',
            info: {
                company: 'Twitter',
                job: 'Web developer',
                description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim'
            }
        }
    ],

    portfolioData: [
        {
            photo: js,
            type: 'java-script',
            title: 'Snake game',
            text: 'A well-known, classic, and iconic game, coded in vanilla JavaScript.',
            projectLink: 'https://milance78.github.io/snake-game/'
        },
        {
            photo: reactTs,
            type: 'react',
            title: 'Coloring fields',
            text: 'A simple coloring grid application written in Typescript React. The state management tool is the UseContext hook.',
            projectLink: 'https://milance78.github.io/coloring-fields/'
        },
        {
            photo: js,
            type: 'java-script',
            title: 'Infinite slider',
            text: 'A simple vanilla JS handcrafted infinite slider',
            projectLink: 'https://milance78.github.io/infinite-slider/'
        },
        {
            photo: reactJs,
            type: 'react',
            title: 'Multi-step validation',
            text: 'This illustrates the process of collecting data from different inputs and arranging it into an object.',
            projectLink: 'https://milance78.github.io/multi-step-validation/'
        }
    ],

    feedbackData: [
        {
            text: 'Nam lacus nulla, egestas sed rhoncus vel, iaculis eget ante. Sed venenatis velit lacinia, tincidunt tortor nec, vulputate risus. Sed lobortis nibh sapien, ut pretium justo egestas eu. Nullam at tellus eget dolor efficitur egestas et non nisi. Fusce varius mi non sapien ullamcorper tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sed mi mi. <br />Aenean interdum augue non tempus euismod. Morbi id eros non lectus commodo rutrum. Duis pellentesque eros in tortor tincidunt auctor. Mauris ut ipsum ligula. Duis nec condimentum turpis. Proin aliquet nisi sit amet tempus pharetra.',
            img: personPhoto,
            name: 'Martin Friman',
            profession: 'Programmer',
            website: 'somesite.com',
        },
        {
            text: 'Aliquam pulvinar dignissim risus, quis suscipit velit malesuada feugiat. Donec lobortis urna eget posuere ornare. Suspendisse lacinia est a ligula finibus, a dictum risus mollis. Mauris consectetur est vitae est malesuada, et tristique ex lobortis. Donec maximus orci at justo auctor, sit amet elementum tortor interdum. Nam non luctus eros. Vivamus auctor libero quis ligula elementum, vel gravida metus ultricies. Aliquam viverra vel enim vitae ultrices. Morbi sollicitudin risus auctor turpis tincidunt, vel volutpat erat feugiat. In vulputate a mi sed ullamcorper.',
            img: personPhoto,
            name: 'Martin Friman',
            profession: 'Programmer',
            website: 'somesite.com',
        },
        {
            text: 'Maecenas dignissim luctus mauris id cursus. Suspendisse potenti. Sed laoreet volutpat enim nec ultrices. Phasellus pulvinar tempus nulla, vel venenatis risus varius vitae. Nam finibus nisi a felis bibendum pretium. Nulla facilisi. Nullam nec fringilla leo, rutrum dictum massa. Praesent purus urna, tempor non mattis mattis, pulvinar eget nisi.<br />Phasellus posuere congue auctor. Sed odio ligula, consectetur sed enim eu, aliquam tempus orci. Aenean in pretium sapien. Cras ut nisi a ex lacinia vestibulum. Cras non varius dolor.',
            img: personPhoto,
            name: 'Martin Friman',
            profession: 'Programmer',
            website: 'somesite.com',
        }
    ],

}

export default staticData

