import Timeline from './timeline';
import Parteners from './partners';
import './header.css';

const Header = () => {
    return ( <>
        <div className="headermain">
            <img className='mainbg' src={require('../img/mainbg.jpg')} alt="" />
        </div>
        < Timeline />
        <Parteners/>
        </>
     );
}
 
export default Header;