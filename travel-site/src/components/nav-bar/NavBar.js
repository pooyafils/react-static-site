import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import {Link} from "react-router-dom";

class NavBar extends Component{
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">

                    <div className="container">
                       <Link to="/"> <a className="navbar-brand" href="#">travel site</a></Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <Link to="/">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                </Link>
                                <Link to="/about" >
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                </Link>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">best offers</a>
                                </li>
                                <Link to="/contactus">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;