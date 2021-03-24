import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom";
import '../style/Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer"

import Prog0 from './../imgs/progress/progress-bar0.png'
import Prog10 from './../imgs/progress/progress-bar10.png'
import Prog20 from './../imgs/progress/progress-bar20.png'
import Prog30 from './../imgs/progress/progress-bar30.png'
import Prog40 from './../imgs/progress/progress-bar40.png'
import Prog50 from './../imgs/progress/progress-bar50.png'
import Prog60 from './../imgs/progress/progress-bar60.png'
import Prog70 from './../imgs/progress/progress-bar70.png'
import Prog80 from './../imgs/progress/progress-bar80.png'
import Prog90 from './../imgs/progress/progress-bar90.png'
import Prog100 from './../imgs/progress/progress-bar100.png'

import Progc0 from './../imgs/progress/progress-c-0.png'
import Progc10 from './../imgs/progress/progress-c-10.png'
import Progc20 from './../imgs/progress/progress-c-20.png'
import Progc25 from './../imgs/progress/progress-c-25.png'
import Progc30 from './../imgs/progress/progress-c-30.png'
import Progc40 from './../imgs/progress/progress-c-40.png'
import Progc50 from './../imgs/progress/progress-c-50.png'
import Progc60 from './../imgs/progress/progress-c-60.png'
import Progc70 from './../imgs/progress/progress-c-70.png'
import Progc75 from './../imgs/progress/progress-c-75.png'
import Progc80 from './../imgs/progress/progress-c-80.png'
import Progc90 from './../imgs/progress/progress-c-90.png'
import Progc100 from './../imgs/progress/progress-c-100.png'

class Progress extends Component {
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
                        <FontAwesomeIcon id="header-icon"  icon={faTasks} />
                        </div>
                    </div>
                    <div class="row" id="header-text" >
                        <div class="col">Progress</div>
                    </div>
                    <div class="row" id="underline">
                        <div class="col" id="text-content-style">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="gallery-space"></div>
            <div class="row" id="much-longer-content">
                <div class="col-md-1"></div>
                <div class="col-md-10" id="gal-col">
                    <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 0%</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={Progc0}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 10%</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={Progc10}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 20%</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={Progc20}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 25%</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={Progc25}/>
                            </div>
                        </div>
                        </div>
                        <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 30%</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={Progc30}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 40%</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={Progc40}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 50%</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={Progc50}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 60%</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={Progc60}/>
                            </div>
                        </div>
                        </div>


                        <div class="row" id="gallery-row-1">
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 70%</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={Progc70}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 75%</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="gallery-snout" src={Progc75}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 80%</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="gallery-snout" src={Progc80}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 90%</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="gallery-snout" src={Progc90}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row"  >
                                <span  class="pic-header" id="text-content-style">Circle 100%</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="gallery-snout" src={Progc100}/>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="me-row">
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 0%</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="progress-lines" src={Prog0}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 10%</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="progress-lines" src={Prog10}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 20%</span>
                            </div>
                            <div class="row">
                                <img alt="blue truffle" id="progress-lines" src={Prog20}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 30%</span>
                            </div>
                            <div class="row">
                                <img alt="yellow truffle" id="progress-lines" src={Prog30}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 40%</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="progress-lines" src={Prog40}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 50%</span>
                            </div>
                            <div class="row">
                                <img alt="green truffle"  id="progress-lines" src={Prog50}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 60%</span>
                            </div>
                            <div class="row" id="prog-line-center">
                                <img alt="blue truffle" id="progress-lines" src={Prog60}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 70%</span>
                            </div>
                            <div class="row" id="prog-line-center">
                                <img alt="yellow truffle" id="progress-lines" src={Prog70}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 80%</span>
                            </div>
                            <div class="row">
                                <img alt="red truffle" id="progress-lines" src={Prog80}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 90%</span>
                            </div>
                            <div class="row" id="prog-line-center">
                                <img alt="yellow truffle" id="progress-lines" src={Prog90}/>
                            </div>
                        </div>
                        <div class="col" id="pic-space">
                            <div class="row" id="prog-line-center">
                                <span  class="pic-header" id="text-content-style">Line 100%</span>
                            </div>
                            <div class="row" id="prog-line-center">
                                <img alt="red truffle" id="progress-lines" src={Prog100}/>
                            </div>
                        </div>
                    </div>
            </div>
                <div class="col-md-1"></div>
            </div>
            <div class="row" id="prog-space"></div>

            <div class="row" id="next-prev-buttons" >
                        <div class="col">
                        <NavLink to={"/misc"} id="link-no-style" >
                            <button  id="button-l" class="button-center-l" >
                                Prev
                            </button>
                            </NavLink>
                        </div>
                        <div class="col">
                        <NavLink to={"/about-me"} id="link-no-style" >
                            <button  id="button-l" class="button-center-r" >
                                Home
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
export default Progress;