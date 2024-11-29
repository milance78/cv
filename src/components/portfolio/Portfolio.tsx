import React, { useEffect, useRef } from 'react';
import './Portfolio.scss'
import staticData from '../../data/staticData';
import PortfolioItem from '../portfolioItem/PortfolioItem';
import Isotope from 'isotope-layout';


const Portfolio = () => {

    const { portfolioData } = staticData;

    const isotope = useRef<Isotope | null>();
    const [filterKey, setFilterKey] = React.useState("*");

    useEffect(() => {
        isotope.current = new Isotope(".filter-container", {
            itemSelector: ".filter-item",
            layoutMode: "fitRows"
        });
        return () => isotope.current?.destroy();
    }, []);

    useEffect(() => {
        filterKey === "*"
            ? isotope.current?.arrange({ filter: `*` })
            : isotope.current?.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

    return (
        <div className='portfolio' id='section-6'>
            <h1>Portfolio - my projects</h1>
            <nav>
                <h5 onClick={handleFilterKeyChange("java-script")}>
                    Java Script
                </h5>
                <p>/</p>
                <h5 onClick={handleFilterKeyChange("react")}>
                    React
                </h5>
                <p>/</p>
                <h5 onClick={handleFilterKeyChange("*")}>
                    All
                </h5>

            </nav>
            <section className="filter-container">
                {
                    portfolioData.map((el, i) =>
                        <PortfolioItem
                            key={i}
                            element={el}
                            index={i}
                            type={el.type} />)
                }
            </section>
        </div>
    )
}

export default Portfolio