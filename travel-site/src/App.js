import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './components/footer/Footer'
import React,{Component} from 'react'
import NavBar from './components/nav-bar/NavBar'
import AboutUs from "./components/about us/AboutUs";
import ContactUs from "./components/contact us/ContactUs";
import Login from "./components/login/Login";
import Faq from "./components/fqa/Faq"
import Registration from "./components/registration/Registration";
import {Route,BrowserRouter as Router,Link,Switch} from "react-router-dom"

import MainPage from "./components/mainpage/MainPage";
class App extends Component{

  render() {

    return(
<div>

<Router>
    <NavBar/>
    <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/about" exact component={AboutUs}/>
    <Route path="/faq" exact component={Faq}/>
    <Route path="/contactus" exact component={ContactUs}/>

    <Footer/>
    </Switch>
</Router>

</div>
    )
  }
}
export default App;
