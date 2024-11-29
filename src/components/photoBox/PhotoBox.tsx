import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import './PhotoBox.scss'
import staticData from '../../data/staticData';

const PhotoBox = () => {

    const { presentedIndividual } = staticData;

    return (
        <div className='photo-box'>
            <img src={presentedIndividual.photo} alt="profile" />
            <h1>{presentedIndividual.name}</h1>
            <h2>{presentedIndividual.title}</h2>
            <p>{presentedIndividual.description}</p>
            <Link to='/inner'>
                <Button
                    title={'Know more'} />
            </Link>
        </div>
    )
}

export default PhotoBox