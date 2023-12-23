export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title"> Hey, I'm Tani! </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Full Stack
                        </span> {" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description"> Add Description Here </p>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ab!
                </div>
                <button className="btn btn-primary"> Get in touch! </button>
            </div>
            <div className="hero--section--img">
                <img src="./img/tani-pic.jpg" alt="Hero Section"/>
            </div>
        </section> 
    )
};