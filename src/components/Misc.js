import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer"
import Art from './../imgs/misc/art.png'
import Home from './../imgs/misc/rh1.png'
import darkHome from './../imgs/misc/rh1-d.png'
import snout from './../imgs/misc/snout.png'
import snoutFaded from './../imgs/misc/snout-faded.png'

class Misc extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
        <div id="comp-div" style={{zIndex:"2"}}>
            <div class="row" id="page-header">
                <div class="col" id="text-center">
                    <div class="row">
                        <div class="col">
                        <FontAwesomeIcon id="header-icon"  icon={faQuestion} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">Misc</div>
                    </div>
                    <div class="row" id="underline">
                        <div class="col" id="text-content-style">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="gallery-space"></div>
            <div class="row" id="much-much-longer-content">
                <div class="col-md-1"></div>
                <div class="col-md-10" id="gal-col">
                    <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Snout On</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={snout}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Snout Off</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={snoutFaded}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Pig Search</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={Art}/>
                            </div>
                        </div>
                       
                    </div>
                    <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Home: Lightmode</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={Home}/>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Home: Darkmode</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={darkHome}/>
                            </div>
                        </div>
                    </div>
            </div>
                <div class="col-md-1"></div>
            </div>
            <div class="row" id="gallery-space"></div>

            <div class="row" id="next-prev-buttons" >
                        <div class="col">
                        <NavLink to={"/icons"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" >
                                Prev
                            </button>
                            </NavLink>
                        </div>
                        <div class="col">
                        <NavLink to={"/progress"} id="link-no-style" >
                            <button  id="button-l" class="button-center-r" >
                                Next
                            </button>
                            </NavLink>
                        </div>
            </div>
            <div class="row" id="idea-bottom-space"></div>
            
            <div id="footer-div">
                <Footer/>
            </div>
        </div>
        );
    }
}
export default Misc;