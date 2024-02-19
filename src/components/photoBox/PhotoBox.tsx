import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import './PhotoBox.scss'

interface Person {
    name: string;
    title?: string;
    description?: string;
    avatar: string;
}

const PhotoBox : React.FC<Person> = ({ avatar, name, title, description }) => {

    return (
        <div className='photo-box'>
            <img src={avatar} alt="profile" />
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to='/inner'>
                <Button 
                title={'Know more'}/>
            </Link>
        </div>
    )
}

export default PhotoBox