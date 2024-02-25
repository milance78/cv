import React from 'react'
import './PortfolioItem.scss'
import { useState } from 'react';
import { Element } from '../../data/data';

interface IProps {
    element: Element, 
    index: number,
    type: string
}

const PortfolioItem: React.FC<IProps>= ({element, index, type}) => {
    const [animation, setAnimation] = useState('item-text')
    return (
        <div className={`portfolio-item filter-item ${type}`}
            onMouseEnter={()=> setAnimation('item-text show')}
            onMouseLeave={() => setAnimation('item-text')}>
            <img src={element.photo} alt={`item_${index}`} />
            <div className={animation}>
                <h5>{element.title}</h5>
                <p>{element.text}</p>
                <div className="link">View resource</div>
            </div>
        </div>
    )
}

export default PortfolioItem