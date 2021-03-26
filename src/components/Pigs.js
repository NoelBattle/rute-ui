import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer";

import pig from './../imgs/pigs/pig.png'
import pigDr from './../imgs/pigs/pig-dr.png'
import pigBlink from './../imgs/pigs/pig-blink.png'
import pigMask from './../imgs/pigs/pig-mask.png'
import pigSilly from './../imgs/pigs/pig-silly.png'



class Pigs extends Component {
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
                        <FontAwesomeIcon id="header-icon"  icon={faPiggyBank} />
                        </div>
                    </div>
                    <div class="row" id="header-text">
                        <div class="col">Pigs</div>
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
                            <div class="row">
                                <span  class="pic-header" id="text-content-style">Normal</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={pig}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row">
                                <span  class="pic-header" id="text-content-style">Blinking</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={pigBlink}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row">
                                <span  class="pic-header" id="text-content-style">Doctor</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={pigDr}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row">
                                <span  class="pic-header" id="text-content-style">Masked</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={pigMask}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row">
                                <span  class="pic-header" id="text-content-style">Silly</span>
                            </div>
                            <div class="row">
                                <img alt="black truffle" id="gallery-snout" src={pigSilly}/>
                            </div>
                        </div>
                    </div>
            </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row" id="next-prev-buttons">
                <div class="col">
                    <NavLink to={"/"} id="link-no-style">
                        <button  id="button-l" class="button-center-l">
                            Home
                        </button>
                    </NavLink>
                </div>
                <div class="col">
                    <NavLink to={"/truffles"} id="link-no-style">
                        <button  id="button-l" class="button-center-r">
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
export default Pigs;