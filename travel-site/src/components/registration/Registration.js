import React from 'react'
import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
const Registration=()=> {
    return (
        <div>
<NavBar/>
<div className="container w-50  mt-3">
<form>

    <div className="form-group">
        <label htmlFor="email">name</label>
        <input className="form-control form-control-lg" type="email" id="email" placeholder="Enter email"/>
    </div>


    <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input className="form-control form-control-lg" type="email" id="email" placeholder="Enter email"/>
            <small className="form-text text-muted">Your email will not ever be shared</small>
    </div>

    <div className="form-group">
        <label htmlFor="email">password</label>
        <input className="form-control form-control-lg" type="email" id="email" placeholder="Enter email"/>
        <small className="form-text text-muted">password must be 8 characters</small>
    </div>

    <div className="form-group">
        <label htmlFor="email">retype password</label>
        <input className="form-control form-control-lg" type="email" id="email" placeholder="Enter email"/>
        <small className="form-text text-muted"></small>
    </div>
<a className="btn btn-primary btn-block">submit</a>
</form>

</div>
        </div>
    )

}


     export default Registration;