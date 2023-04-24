import React from 'react';
import './Navbar.css'


function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="intro">
        <img src="images/DB construction.png" width="60" alt="Bootstrappin'"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#intro">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#aboutus">About us <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#service">Service <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contactus">Contact us <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar