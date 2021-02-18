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
import MainPage from "./components/mainpage/MainPage";
class App extends Component{

  render() {

    return(
<div>
       {/*<NavBar/>
        <Footer/>*/}
        {/*<AboutUs/>*/}
       {/*<ContactUs/>*/}
{/*<Faq/>*/}
{/*<Login/>*/}
{/*<Registration/>*/}
<MainPage/>
</div>
    )
  }
}
export default App;
