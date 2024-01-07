import { Link } from "react-scroll";

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
                    I will be showcasing my technical skills that I've grown from the past year!
                    <br />
                </div>
                <br />
                <Link                 
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="aboutMe"
                className="btn btn-primary"
                >
                    Let's get started! 
                </Link>
            </div> 
            <div className="hero--section--img">
                <img className="hero--img"src="./img/developer.png" alt="Hero Section"/>
                <div class="overlay">
                    <div class="text">Hello World 👾</div>
                </div>
            </div>
        </section> 
    );
};