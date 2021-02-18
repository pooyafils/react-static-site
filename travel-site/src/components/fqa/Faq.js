import React from 'react'
import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
const Faq=()=>{
    return(
        <div>
            <NavBar/>
            <div className="container w-75">
            <div id="accordion2">
                <div className="card">
                    <div class="card-header">
                        <h5>
                            <a href="#collapse1" data-parent="#accordion2" data-toggle="collapse">
                                ask ask
                            </a>
                        </h5>
                    </div>

                    <div id="collapse1" class="collapse show">
                        <div className="card-body">
                     answer answer answer                      answer answer answer
                            answer answer answer
                            answer answer answer

                        </div>
                    </div>
                </div>

            </div>
            </div>



        </div>



    )


}
export default Faq;