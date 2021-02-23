import React from 'react'
import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './style.css'
import picture from '../../img/book.png'
import persons1 from '../../img/person1.jpg'
import persons2 from '../../img/person2.jpg'
import persons3 from '../../img/person3.jpg'
import persons4 from '../../img/person4.jpg'
import france from '../../img/france-loire-villandry-chateau.jpg'
const MainPage=()=>{
    return(
        <div>

            <section id="showcase" className="py-5">
                <div className="primary-overlay text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center">
                                <h1 className="display-2 mt-5 pt-5">
                                    So What You Dream Of...
                                </h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
                                    quas.</p>
                                <a href="#" className="btn btn-outline-secondary btn-lg text-white">
                                    <i className="fa fa-arrow-right"></i> Read More</a>
                            </div>
                            <div className="col-lg-6">
                                <img src={picture} alt="" className="img-fluid d-none d-lg-block"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

            )
}
export default MainPage