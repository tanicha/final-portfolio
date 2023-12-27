import HeroSection from "../Home/HeroSection";
import Skills from "../Home/Skills"
import AboutMe from "../Home/AboutMe";
import MyPortfolio from "../Home/MyPortfolio";
import Feedback from "../Home/Feedback";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Skills />
            <MyPortfolio />
            <Feedback />
            <ContactMe />
            <Footer />
        </>
    );
};