import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer"

import calcOn from './../imgs/icons/calc-money.png'
import calcOff from './../imgs/icons/calc-off.png'
import Doc from './../imgs/icons/documents.png'
import Essay from './../imgs/icons/essay-planner.png'
import Matching from './../imgs/icons/matching.png'
import Reminder from './../imgs/icons/reminder.png'
import Chat from './../imgs/icons/forum-chat.png'
import Compare from './../imgs/icons/compare.png'

class Icons extends Component {
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
                        <FontAwesomeIcon id="header-icon"  icon={faIcons} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">Icons</div>
                    </div>
                    <div class="row" id="underline">
                        <div class="col" id="text-content-style">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="gallery-space"></div>
            <div class="row" id="longer-content">
                <div class="col-md-1"></div>
                <div class="col-md-10" id="gal-col">
                    <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Calc off</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={calcOff}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Calc on</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={calcOn}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Matching Algorithm</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={Matching}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Reminders</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={Reminder}/>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Essay Planner</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={Essay}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">File Upload</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={Doc}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Compare</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={Compare}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Forum</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={Chat}/>
                            </div>
                        </div>
                    </div>
            </div>
                <div class="col-md-1"></div>
            </div>
            <div class="row" id="gallery-space"></div>

            <div class="row" id="next-prev-buttons" >
                        <div class="col">
                        <NavLink to={"/buttons"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" >
                                Prev
                            </button>
                            </NavLink>
                        </div>
                        <div class="col">
                        <NavLink to={"/misc"} id="link-no-style" >
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
export default Icons;