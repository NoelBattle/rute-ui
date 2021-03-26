import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {withRouter} from "react-router-dom"
import '../../style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn, faLightbulb, faRobot, faCogs, faStar, faCaretDown, faCaretUp, faPaintBrush,faPoll,faDatabase, faSitemap, faClipboardList, faUser, faSkull, faClock, faBrain, faPiggyBank, faICursor, faMousePointer, faIcons, faQuestion, faTasks } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import  logo from './../../imgs/snute.png'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          navCol:true, //make true
        } 
        this.navCollapse = this.navCollapse.bind(this)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
       }
    
    navCollapse =  () => {
        this.props.parentCallbackNav(!(this.state.navCol))
        this.setState({
            navCol: !(this.state.navCol),
            featuresDropDown:false,
            infoDropDown:false,
        })
    }

    dropDown  = (route) =>{
        this.setState({[route]:false})
    }

    dropUp  = (route) =>{
        this.setState({
            featuresDropDown:false,
            infoDropDown:false,
            route:"",
            [route]:true,
        })
    }
    
   
  render() {
    return (
      <div>
        {this.state.navCol &&
            <div id="nav-logo" style={{zIndex:"15",}}>
                <div  id={(this.state.darkmode)=="yes"?"nav-col-logo-bg-d":"no"?"nav-col-logo-bg-l":""} style={{zIndex:"1"}}>
                </div>
                <button id="icon-button" class="nav-hamburger" style={{zIndex:"15"}} onClick={this.navCollapse}>
                    <FontAwesomeIcon size="lg"  id={(this.state.darkmode)=="yes"?"nav-burger-d":"no"?"nav-burger-l":""} icon={faBars}/>
                </button>
                <Link to="/"  style={{fontFamily: "monospace"}} id="snogo" style={{zIndex:"15"}} class="logo-bg">
                    <div id="snogo-sidenav">
                        <div class="logo-pic">
                            <img alt="snout" id="snute"  class={(this.state.darkmode)=="yes"?"logo-bg-d":"no"?"logo-bg-l":""}  src={logo}/>
                        </div>
                        <div id={(this.state.darkmode)=="yes"?"logo-name-col-d":"no"?"logo-name-col":""}><span id="logo-colon">:</span><span>UI</span></div>
                    </div>
                </Link>
            </div>
        }
        <div style={{zIndex:"13"}} id={(this.state.navCol)?"navdiv-none":"navdiv"} class={(this.state.darkmode)=="yes"?"nav-darkmode-pink":""}>
            <div id={(this.state.darkmode)=="yes"?"nav-logo-bg-d":"no"?"nav-logo-bg-l":""} style={{zIndex:"14"}}></div>
            <section  id="sidenavLogo" style={{zIndex:"15"}}>
                <span id="sidenav-logo-span">
                    <button id="icon-button" class="side-nav-hamburger" onClick={this.navCollapse}>
                        <FontAwesomeIcon size="lg" icon={faBars}/>
                    </button>
                    <NavLink exact path to="/"  style={{fontFamily: "monospace"}} id="navhead" activeClassName="hov-active">
                        <div id="snogo-sidenav">
                            <div class="logo-pic">
                                <img alt="snout" id="snute" src={logo} />
                            </div>
                            <div id="logo-name">
                                <span id="logo-colon">:</span><span>UI</span>
                            </div>
                        </div>
                    </NavLink>
                </span>
            </section>
            <div>
                <section id="nav-collapse">
                    <ul className="left_navlinks">
                        <div id="sidenav-li">
                            <div class="nav-divider">
                                <NavLink to={"/pigs"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <span class="nav-icon-shift">  
                                                <FontAwesomeIcon id="sidenav-icon"   icon={faPiggyBank} />
                                            </span>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Pigs</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div class="nav-divider">
                                <NavLink to={"/truffles"} id="navhead" activeClassName="hov-active"> 
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <span class="nav-icon-shift">  
                                                <FontAwesomeIcon id="sidenav-icon"  icon={faStar} />
                                            </span>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Truffles</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div class="nav-divider">
                                <NavLink to={"/buttons"} id="navhead" activeClassName="hov-active"> 
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faMousePointer} />
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Buttons</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div  class="nav-divider">
                                <NavLink to={"/icons"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faIcons}/>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Icons</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div  class="nav-divider">
                                <NavLink to={"/misc"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faQuestion}/>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Misc</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div  class="nav-divider">
                                <NavLink to={"/progress"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faTasks}/>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Progress</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div  class="nav-divider">
                                <NavLink to={"/about-me"} id="navhead" activeClassName="hov-active">
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faBrain}/>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">About Me</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div id="sidenav-li">
                            <div  class="nav-divider">
                                <Link 
                                to="/https://github.com/NoelBattle/rute-ui.git" 
                                target="_blank" onClick={() => window.open("https://github.com/NoelBattle/rute-ui.git", "_blank")}>
                                    <div class="row" id="sidenav-icon-row">
                                        <div class="col-md-3" id="sidenav-icon-col">
                                            <FontAwesomeIcon id="sidenav-icon"  icon={faGithub}/>
                                        </div>
                                        <div class="col-md-9" id="sidenav-link-col">
                                            <span id="sidenav-link">Github</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </ul>
                </section>
            </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);