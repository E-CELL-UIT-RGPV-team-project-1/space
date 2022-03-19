import React from 'react'
import { Link } from 'react-router-dom';

const Nav_two = () =>{
  return (
    <div style={{ position: 'sticky',
      top: 0,
      left: 0,
      margin:0,
      padding:0,
      
      zIndex:10,
      }}>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark " style={{backgroundColor: ' #01015', margin:0,opacity: 1}}>
      
        <div className="container-fluid">
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0 text-info" href="#">EVENT
            </a>
            {/* Left links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/">HOME</Link>
              </li>
              <li className="nav-item">
              <Link  to="/Register">REGISTRATION</Link>
              </li>
              <li className="nav-item">
              <Link  to="/Organiser"> ORGANISERS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */} 
    </div>
  )
}
export default Nav_two;

