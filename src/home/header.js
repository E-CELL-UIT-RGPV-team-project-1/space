import Timeline from './timeline';
import Parteners from './partners';
import './header.css';
import { Parallax, parallax } from 'react-parallax';

const mainbg = "../img/mainbg.jpg";

const Header = () => {
    return (<>

        <Parallax >
            <div className="headermain">
                <h1 className='header-h1'> website</h1>
                <img className='mainbg' strength ={500} src={require('../img/mainbg.jpg')} alt="" />
            </div>
        </Parallax>

        {/* <div className="headermain">
            <img className='mainbg' src={require('../img/mainbg.jpg')} alt="" />
        </div> */}
        < Timeline />
        <Parteners />
    </>
    );
}

export default Header;