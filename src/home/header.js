import Timeline from './timeline';
import Parteners from './partners';
import './header.css';

// import { Parallax, parallax } from 'react-parallax';

const mainbg = "../img/mainbg.jpg";

const Header = () => {
    return (<>
        <div className="all_header">
            <div className="header_text">
                <h1 style={{ color: 'white' }}>Website</h1>
                <h2 style={{ color: 'white' }}>we are here for you!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam est </p>
                <button className='header_btn'>Register</button>
            </div>
            <div className="header_img">
                <div className="astro_img"></div>
            </div>
        </div>

        <Timeline />
        <Parteners />
    </>
    );
}

export default Header;