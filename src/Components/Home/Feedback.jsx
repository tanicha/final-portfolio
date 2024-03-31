import data from "../../data/index.json";

export default function Feedback() {
    return (
        <section className="testimonial--section" id="feedback"> 
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Career</p>
                    <h2 className="testimonial--heading">Experience</h2>
                </div>
                <div className="portfolio--section--container">
                    {data?.feedback?.map((item, index) => (
                        <div key={index} className="testimonial--section--card">
                            <img className="feedback--img" src={item.source} alt="Avatar"/>
                            <h4>{item.title}</h4>
                            <p>{item.degree}</p>
                            <ul>
                                <li className="text-md">{item.description}</li>
                                <li className="text-md">{item.description2}</li>
                                <li className="text-md">{item.description3}</li>
                                <li className="text-md">{item.description4}</li>
                            </ul>
                            <div className="testimonial--section--card--author--detail">
                                <div> 
                                    <p className="text-md testimonial--author--name">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </section>
    );
};