import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './components/footer/Footer'
import React,{Component} from 'react'
import NavBar from './components/nav-bar/NavBar'
import AboutUs from "./components/about us/AboutUs";
import ContactUs from "./components/contact us/ContactUs";
import Faq from "./components/fqa/Faq"
class App extends Component{

  render() {

    return(
<div>
       {/*<NavBar/>
        <Footer/>*/}
        {/*<AboutUs/>*/}
       {/*<ContactUs/>*/}
<Faq/>
</div>
    )
  }
}
export default App;
