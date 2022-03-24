import Timeline from './timeline';
import Parteners from './partners';
import './header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import AnimatedPage from "./AnimatedPage";


// import { Parallax, parallax } from 'react-parallax';

const mainbg = "../img/mainbg.jpg";

const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);



    return (
        <AnimatedPage>
    
    <>
        <div className="all_header">
            <div className="header_text">
                <h1 style={{ color: 'white' }}>WEBSITE</h1>
                <h2 style={{ color: 'white' }}>We can help you in "
                    <span id='span' style={{ color: 'blue' }}>

                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("web devlopement").pauseFor(1000).deleteAll().typeString("indrustry feild").deleteAll().typeString("and every other feild").start();
                            }}
                        />

                    </span>
                    " </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam est </p>
                <button data-aos="zoom-in-left" className='header_btn'>Register</button>
            </div>
            <div className="header_img">
                <div className="astro_img"></div>
            </div>
        </div>

        <Timeline />
        <Parteners />

    </>
    </AnimatedPage>

    );

}

export default Header;