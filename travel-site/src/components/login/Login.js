import React from 'react'
import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import './Login.css'
import Logo from '../../img/image1.jpg'
const Login=()=>{

    return(
    <div>
        <div className="mt-3">

            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={Logo} id="icon" alt="User Icon"/>
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
                            <input type="text" id="password" className="fadeIn third" name="login"
                                   placeholder="password"/>
                                <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>



                </div>
            </div>

        </div>
    </div>
    )
}
export default Login;