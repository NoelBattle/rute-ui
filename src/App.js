import React, { Component } from "react";
import logo from './logo.svg';
import './style/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router as Router, Route, Switch, Link,withRouter } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom' 
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Gallery from "./components/Gallery"
import Pigs from "./components/Pigs"
import Truffles from "./components/Truffles"
import Buttons from "./components/Buttons"
import Icons from "./components/Icons"
import Progress from "./components/Progress"
import Misc from "./components/Misc"
import Me from "./components/Me"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCol:"",
    } 
  }

  componentWillMount() {
    this.callbackFunctionNav()
  }

  callbackFunctionNav = (data) => {
      this.setState({navCol: data})
      return data
    }

  render() {
    return (
      <BrowserRouter> 
          <Navbar  parentCallbackNav={this.callbackFunctionNav}/> 
          <div   id={(this.state.navCol==false)?"apa":"apa-full"}>
            <Route exact path="/" component={Gallery}/>
            <Route exact path="/pigs" component={Pigs}/>
            <Route exact path="/truffles" component={Truffles}/>
            <Route exact path="/buttons" component={Buttons}/>
            <Route exact path="/icons" component={Icons}/>
            <Route exact path="/progress" component={Progress}/>
            <Route exact path="/misc" component={Misc}/>
            <Route exact path="/about-me" component={Me}/>
          
          
          </div>
      </BrowserRouter>
    );
  }
}
export default App;
