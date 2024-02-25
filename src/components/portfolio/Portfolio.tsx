import React, { useEffect, useRef } from 'react';
import './Portfolio.scss'
import { portfolioData } from '../../data/data';
import PortfolioItem from '../portfolioItem/PortfolioItem';
import Isotope from 'isotope-layout';


const Portfolio = () => {

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
        if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
        else isotope.current?.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <nav>
                <h5
                    onClick={handleFilterKeyChange("*")}
                >All</h5>
                <p>/</p>
                <h5
                    onClick={handleFilterKeyChange("Ui")}
                >Ui</h5>
                <p>/</p>
                <h5
                    onClick={handleFilterKeyChange("Code")}
                >Code</h5>
            </nav>
            <section
                className="filter-container"
                style={{ display: 'flex' }}
            >
                {
                    portfolioData.map((el, i) =>
                        <PortfolioItem
                            element={el}
                            index={i}
                            type={el.type} />)
                }
            </section>

        </div>
    )
}

export default Portfolio