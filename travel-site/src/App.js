import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './components/footer/Footer'
import React,{Component} from 'react'
import NavBar from './components/nav-bar/NavBar'
class App extends Component{

  render() {

    return(
<div>
        <NavBar/>
        <Footer/>
</div>
    )
  }
}
export default App;
