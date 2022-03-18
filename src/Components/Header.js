import React from 'react'

export default function Header() {
  return (
    <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark " style={{backgroundColor: '#271637'}}>
        {/* Container wrapper */}
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
                <a className="nav-link text-info" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">REGISTRATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-info" href="#">ORGANIZERS</a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */} 
    </div>
  )
}
