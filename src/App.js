import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {   
  render() { 
    return (    
    <div ClassName={'mainApp'}>
    <Header/>
    
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Topics" component={Topics}/>
        </div>
      </Router>
      <Footer/>
      </div>
      );

  } 
  
}  
export default App;