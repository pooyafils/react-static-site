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
            <NavBar/>
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
            <section id="blog" className="py-3 bg-white">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card-columns">
                                <div className="card">
                                    <img src={france}  alt=""
                                         className="img-fluid card-img-top"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Blog Post One</h4>
                                        <small className="text-muted">Written by Jeff on 05/20</small>
                                        <p className="card-text">text text texttext text texttext text text

                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={france}  alt=""
                                         className="img-fluid card-img-top"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Blog Post One</h4>
                                        <small className="text-muted">Written by Jeff on 05/20</small>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur

                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={france}  alt=""
                                         className="img-fluid card-img-top"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Blog Post One</h4>
                                        <small className="text-muted">Written by Jeff on 05/20</small>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur

                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="card-columns">
                                <div className="card">
                                    <img src={france}  alt=""
                                         className="img-fluid card-img-top"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Blog Post One</h4>
                                        <small className="text-muted">Written by Jeff on 05/20</small>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur

                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={france}  alt=""
                                         className="img-fluid card-img-top"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Blog Post One</h4>
                                        <small className="text-muted">Written by Jeff on 05/20</small>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur

                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={france} alt=""
                                         className="img-fluid card-img-top"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Blog Post One</h4>
                                        <small className="text-muted">Written by Jeff on 05/20</small>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="authors" className=" text-center autherback">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="info-header mb-5">
                                <h1 className="text-primary pb-3">
                                    Meet Our Agents
                                </h1>
                                <p className="lead pb-3"> text text text text text texttext text texttext text texttext text text

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={persons1} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Susan Williams</h3>
                                        <h5 className="text-muted">Lead Writer</h5>
                                        <p>  text text texttext text texttext text text
                                            .</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={persons2} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Grace Smith</h3>
                                        <h5 className="text-muted">Co-Writer</h5>
                                        <p>Recusandae text text texttext text texttext text text
                                            </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={persons3} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>John Doe</h3>
                                        <h5 className="text-muted">Editor</h5>
                                        <p> Recusandae text text texttext text texttext text texttext text text

                                            </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={persons4} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                        <h3>Kevin Swanson</h3>
                                        <h5 className="text-muted">Designer</h5>
                                        <p>L text text texttext text texttext text texttext text text
                                            </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<Footer/>
        </div>

            )
}
export default MainPage