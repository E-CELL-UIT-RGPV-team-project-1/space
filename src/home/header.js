import Timeline from './timeline';
import Parteners from './partners';
import './header.css';
import { Parallax, parallax } from 'react-parallax';

const mainbg = "../img/mainbg.jpg";

const Header = () => {
    return (<>
        <Timeline/>
        <Parteners/>
    </>
    );
}

export default Header;