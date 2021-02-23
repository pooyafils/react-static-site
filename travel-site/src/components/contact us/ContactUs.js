import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import './ContactUs.css'
const ContactUs=()=>{
    return(

        <div className="ContactUs">
            <section id="contact" class="py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h4>some text</h4>
                                    <p>some textsome textsome textsome text</p>
                                    <h4>Address</h4>
                                    <p>some text</p>
                                    <h4>Email</h4>
                                    <p>test@test.com</p>
                                    <h4>Phone</h4>
                                    <p>(555) 555-5555</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h3 class="text-center">Please fill out this form to contact us</h3>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="First Name"></input>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Last Name"></input>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Email"></input>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Phone Number"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea class="form-control" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <input type="submit" class="btn btn-outline-danger btn-block"></input>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default ContactUs