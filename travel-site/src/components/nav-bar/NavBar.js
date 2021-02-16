import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
const NavBar=()=>{
    return(
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">travel site</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">best offers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default NavBar;