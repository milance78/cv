import './Experience.scss'
import staticData from '../../../data/staticData'
import { useEffect, useRef, useContext } from 'react';
import { Elements } from '../../navigation/Navigation';
import { ElementsContext } from '../../../contexts/navigateContext';

const Experience = () => {

    const { experienceData } = staticData;
    const {setElements} = useContext(ElementsContext);
    const experienceRef = useRef(null)

  useEffect(() => {
    setElements(
      (prev: Elements) => ({
        ...prev,
        experienceElement: experienceRef.current
      })
    )
  }, [setElements]);

    return (
        <section className='experience'
        ref={experienceRef}>
            <h1>Experience</h1>
            <div className="experience-container">
                {experienceData.map(
                    (el, i) => <article key={i}>
                        <section className="left">
                            <h3>{el.info.company}</h3>
                            <h5>{el.date}</h5>
                        </section>
                        <section className="right">
                            <h3>{el.info.job}</h3>
                            <p>{el.info.description}</p>
                        </section>
                    </article>
                )}
            </div>

        </section>
    )
}

export default Experience