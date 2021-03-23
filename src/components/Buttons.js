import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer"

import heartOff from './../imgs/buttons/heart-off.png'
import heartOn from './../imgs/buttons/heart-on.png'
import nightOn from './../imgs/buttons/night-mode.png'
import lightOff from './../imgs/buttons/light-mode-1.png'

class Buttons extends Component {
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
                        <FontAwesomeIcon id="header-icon"  icon={faMousePointer} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">Buttons</div>
                    </div>
                    <div class="row" id="underline">
                        <div class="col" id="text-content-style">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="gallery-space"></div>
            <div class="row" id="shorter-content">
                <div class="col-md-1"></div>
                <div class="col-md-10" id="gal-col">
                    <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Favorite off</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={heartOff}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Favorite on</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={heartOn}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Light on</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={lightOff}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Light off</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={nightOn}/>
                            </div>
                        </div>
                      
                    </div>
            </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row" id="next-prev-buttons" >
                        <div class="col">
                        <NavLink to={"/truffles"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" >
                                Prev
                            </button>
                            </NavLink>
                        </div>
                        <div class="col">
                        <NavLink to={"/icons"} id="link-no-style" >
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
export default Buttons;