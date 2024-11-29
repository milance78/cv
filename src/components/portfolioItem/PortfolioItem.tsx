import React from 'react'
import './PortfolioItem.scss'
import { useState } from 'react';

interface Element {
    photo: string;
    title: string;
    text: string;
    projectLink: string
}

interface IProps {
    element: Element,
    index: number,
    type: string,
    
}

const PortfolioItem: React.FC<IProps> = ({ element, index, type }) => {
    const [animation, setAnimation] = useState('item-text')
    return (
        <div className={`portfolio-item filter-item ${type}`}
            onMouseEnter={() => setAnimation('item-text show')}
            onMouseLeave={() => setAnimation('item-text')}>
            {/* <p>Project name:</p> */}
            <h4 className='title'> {element.title}</h4>
            <img src={element.photo} alt={`item_${index}`} />
            <div className={animation}>
                {/* <h5>{element.title}</h5> */}
                <p>{element.text}</p>
                <a className="link"
                    href={element.projectLink}
                    target="_blank"
                    rel="noreferrer">View project</a>
            </div>
        </div>

    )
}

export default PortfolioItem