import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer";

import greenT from './../imgs/truffles/green-truffle.png'
import blueT from './../imgs/truffles/blue-truffle.png'
import yellowT from './../imgs/truffles/yellow-truffle.png'
import redT from './../imgs/truffles/red-truffle.png'
import blackT from './../imgs/truffles/black-truffle.png'
import fadeT from './../imgs/truffles/faded-truffle.png'

import sgreenT from './../imgs/truffles/shad-green-truffle.png'
import sblueT from './../imgs/truffles/shad-blue-truffle.png'
import syellowT from './../imgs/truffles/shad-yellow-truffle.png'
import sredT from './../imgs/truffles/shad-red-truffle.png'
import sblackT from './../imgs/truffles/shad-black-truffle.png'
import sfadeT from './../imgs/truffles/shad-faded-truffle.png'


class Truffles extends Component {
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
                        <FontAwesomeIcon id="header-icon"  icon={faStar} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">Truffles</div>
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
                                <span  class="pic-header" id="text-content-style">Green no shadow</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={greenT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Blue no shadow</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={blueT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Yellow no shadow</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={yellowT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Red no shadow</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={redT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Black no shadow</span>
                            </div>
                            <div class="row">
                                <img alt="black truffle" id="gallery-snout" src={blackT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Faded no shadow</span>
                            </div>
                            <div class="row">
                                <img alt="faded truffle" id="gallery-snout" src={fadeT}/>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="gallery-row-2">
                    <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style-d">Green w/ shadow</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle with shadow" id="gallery-snout" src={sgreenT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style-d">Blue w/ shadow</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle with shadow" id="gallery-snout" src={sblueT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style-d">Yellow w/ shadow</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle with shadow" id="gallery-snout" src={syellowT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style-d">Red w/ shadow</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle with shadow" id="gallery-snout" src={sredT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style-d">Black w/ shadow</span>
                            </div>
                            <div class="row">
                                <img alt="black truffle with shadow" id="gallery-snout" src={sblackT}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style-d">Faded w/ shadow</span>
                            </div>
                            <div class="row">
                                <img alt="faded truffle  with shadow" id="gallery-snout" src={sfadeT}/>
                            </div>
                        </div>
                </div>
            </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row" id="next-prev-buttons" >
                        <div class="col">
                        <NavLink to={"/pigs"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" >
                                Prev
                            </button>
                            </NavLink>
                        </div>
                        <div class="col">
                        <NavLink to={"/buttons"} id="link-no-style" >
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
export default Truffles;