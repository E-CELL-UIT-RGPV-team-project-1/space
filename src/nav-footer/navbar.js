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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Register">Registration</Link></li>
                    <li><Link to="/Organiser"> Organisers</Link></li>
                </ul>
            </div>
        </nav>


    );
}

export default Navbar;



