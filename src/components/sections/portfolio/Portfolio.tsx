import React, { useContext, useEffect, useRef } from 'react';
import './Portfolio.scss'
import staticData from '../../../data/staticData';
import PortfolioItem from '../../portfolioItem/PortfolioItem';
import Isotope from 'isotope-layout';
import { ElementsContext } from '../../../contexts/navigateContext';
import { Elements } from '../../navigation/Navigation';


const Portfolio = () => {

    const { portfolioData } = staticData;
    const { setElements } = useContext(ElementsContext);
    const portfolioRef = useRef(null);

    const isotope = useRef<Isotope | null>();
    const [filterKey, setFilterKey] = React.useState("*");

    useEffect(()=> {
        setElements(
            (prev: Elements) => ({
                ...prev,
                portfolioElement: portfolioRef.current
              })
        )
    }, [setElements]);

    //isotope library code
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
        <div className='portfolio'
        ref={portfolioRef}>
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