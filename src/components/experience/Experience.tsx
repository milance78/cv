import './Experience.scss'
import staticData from '../../data/staticData'

const Experience = () => {

    const { experienceData } = staticData;

    return (
        <section className='experience' id='section-4'>
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