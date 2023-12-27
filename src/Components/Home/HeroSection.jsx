export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title"> Hey, I'm Tani!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Full Stack
                        </span> {" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description"> Welcome to my Personal Portfolio!</p>
                    <br />
                    I am currently working at Expedia Group as a Software Development Engineer Apprentice! Throughout this website, I will be showcasing my work experience, technical projects I've worked on, and skills/tools that I have learned to use within the last year.
                </div>
                <button className="btn btn-primary"> Get in touch! </button>
            </div>
            <div className="hero--section--img">
                <img className="hero--img"src="./img/tani-pic.jpg" alt="Hero Section"/>
                <div class="overlay">
                    <div class="text">Hello World 👾</div>
                </div>
            </div>
        </section> 
    );
};