import data from "../../data/index.json";

export default function Skills() {
    return (
        <section className="skills--section" id="skills">
            <div className="portfolio--container">
                <p className="sub--title"> Skills </p>
                <h2 className="skills--section--heading"> My Tech Stack </h2>
                <p className="sub--title"> includes coding languages, frameworks, libraries, etc. </p>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img className="skills--img" src={item.source} alt="Product Chain"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <ul>
                                <li className="skills--section--description">{item.description}</li>
                                <li className="skills--section--description">{item.description2}</li>
                                <li className="skills--section--description">{item.description3}</li>
                                <li className="skills--section--description">{item.description4}</li>
                                {item.description5 && <li className="skills--section--description">{item.description5}</li>}
                            </ul>
                        </div>
                    </div>
                ))};
            </div>
        </section>
    );
};