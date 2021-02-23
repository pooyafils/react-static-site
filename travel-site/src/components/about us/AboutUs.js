import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import  './AboutUs.css'
import picture from '../../img/image1.jpg'
const AboutUs=()=> {
return(
    <div>

        <header className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto text-center">
                        <h1>About Us</h1>
                        <p>some text some text some text </p>
                    </div>
                </div>
            </div>

        </header>

        <section id="about" className="py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>What We Do</h1>
                        <p> some text some text some text some text some text
                            some text some text some text some text some text some text
                            some text some text some text some text some text some text </p>
                        <p> some text some text some text some text some text some text
                            some text some text some text some text some text some text
                            some text some text some text some text some text </p>
                    </div>
                    <div className="col-md-6">
                        <img src={picture}  alt=""
    className="about-img img-fluid rounded-circle  d-none d-md-block"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="icon-boxes" className="p-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="card bg-danger text-center text-white">
                            <div className="card-body">
                                <i className="fa fa-building"></i>
                                <h3>title </h3>
                                 text some text some text some text
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-danger text-center text-white">
                            <div className="card-body">
                                <i className="fa fa-bullhorn"></i>
                                <h3>title</h3>
                                some text some text some text some text
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-danger text-center text-white">
                            <div className="card-body">
                                <i className="fa fa-comments"></i>
                                <h3>title</h3>
                                 text some text some text some text .
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="card bg-danger text-center text-white">
                            <div className="card-body">
                                <i className="fa fa-clock-o"></i>
                                <h3>title </h3>
                                 text some text some text some text
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-danger text-center text-white">
                            <div className="card-body">
                                <i className="fa fa-cc"></i>
                                <h3> title</h3>
                                text some text some text some text
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-danger text-center text-white">
                            <div className="card-body">
                                <i className="fa fa-coffee"></i>
                                <h3>title</h3>
                                some text some text some text some text
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonial-section" className="p-4 bg-dark text-white">
            <div className="container">
                <h2 className="text-center">Testimonials</h2>
                <div className="row">
                    <div className="col">
                        <div className="slider">
                            <div>
                                <blockquote className="blockquote">
                                    <p className="mb-0">some text some text some text some text some text
                                        sunt!</p>
                                    <footer className="blockquote-footer">John Doe From <cite title="Company 1">Company
                                        1</cite></footer>
                                </blockquote>
                            </div>
                            <div>
                                <blockquote className="blockquote">
                                    <p className="mb-0"> some text some text some text some text some text some text
                                        sunt!</p>
                                    <footer className="blockquote-footer">Steve Smith From <cite title="Company 2">Company
                                        2</cite></footer>
                                </blockquote>
                            </div>
                            <div>
                                <blockquote className="blockquote">
                                    <p className="mb-0"> some text some text some text some text
                                        sunt!</p>
                                    <footer className="blockquote-footer">Megan Williams From <cite title="Company 3">Company
                                        3</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    </div>
)

}

export default AboutUs;
