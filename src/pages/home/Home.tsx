import React from 'react';
import './Home.scss';
import avatar1 from '../../assets/img/avatar1.png';
import PhotoBox from '../../components/photoBox/PhotoBox';

interface Person {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

const Home = () => {
  const person1 : Person = {
    name: "John Doe",
    title: "Programmer. Creative. Innovator",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
    avatar: avatar1,
}

  return (
    <div className='home'>
      <PhotoBox
      name={person1.name}
      title={person1.title}
      description={person1.description}
      avatar={person1.avatar}
      />
    </div>
  )
}

export default Home