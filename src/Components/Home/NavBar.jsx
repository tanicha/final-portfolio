import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    
    // open our nav bar
    const toggleNav = () => {
        setNavActive(!navActive);
    };
    
    // close our nav bar
    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        };
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img className="logo" src="./img/logoipsum-286.svg" alt="Logo"/>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "Active" : ""}`}>
                <ul>
                    <li> 
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbar--active-content" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                        >
                        Home
                        </Link>
                    </li>
                    <li> 
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbar--active-content" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="aboutMe"
                            className="navbar--content"
                        >
                        About Me
                        </Link>
                    </li>
                    <li> 
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbar--active-content" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="skills"
                            className="navbar--content"
                        >
                        Skills
                        </Link>
                    </li>
                    <li> 
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbar--active-content" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="myPortfolio"
                            className="navbar--content"
                        >
                        Portfolio
                        </Link>
                    </li>
                    <li> 
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbar--active-content" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="feedback"
                            className="navbar--content"
                        >
                        Experience
                        </Link>
                    </li>
                </ul>
            </div>
            <Link 
                onClick={closeMenu} 
                activeClass="navbar--active-content" 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="btn btn-outline-primary"
            >
                Contact Me
            </Link>
        </nav>
    );
};

export default Navbar;