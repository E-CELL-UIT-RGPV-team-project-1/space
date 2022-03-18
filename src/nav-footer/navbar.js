import './navbar.css';
import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={require(`../img/ecell logo.png`)} alt="" className="logo" />
            </div>

            <div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/Register">REGISTRATION</Link></li>
                    <li><Link to="/Organiser"> ORGANISERS</Link></li>
                </ul>
            </div>
        </nav>


    );
}

export default Navbar;



