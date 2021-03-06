import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, useLocation } from "react-router-dom"
import '../style/Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEdit, faCircle, faBars,faTachometerAlt,faUserGraduate,faSearch,faPencilAlt,faComments,faToggleOff,faToggleOn,faRobot, faPalette } from '@fortawesome/free-solid-svg-icons'
import Footer from "./layout/Footer"
import  pigOpen from './../imgs/gallery/pig-open.png'
import  pigClosed from './../imgs/gallery/pig-closed.png'
import heartOn from './../imgs/gallery/heart-on.png'
import heartOff from './../imgs/gallery/heart-off.png'
import calcOff from './../imgs/gallery/icons/calc.png'
import calcOn from './../imgs/gallery/icons/calc-money.png'
import Colors from './../imgs/gallery/rute-colors.png'
import redT from './../imgs/gallery/truffles/truffle-red.png'
import yellowT from './../imgs/gallery/truffles/truffle-yellow.png'
import blueT from './../imgs/gallery/truffles/truffle-blue.png'
import blackT from './../imgs/gallery/truffles/truffle-black.png'
import greenT from './../imgs/gallery/truffles/truffle-green.png'
import progCirc0 from './../imgs/gallery/progress/circles/progress0.png'
import progCirc10 from './../imgs/gallery/progress/circles/progress10.png'
import progCirc20 from './../imgs/gallery/progress/circles/progress20.png'
import progCirc30 from './../imgs/gallery/progress/circles/progress30.png'
import progCirc40 from './../imgs/gallery/progress/circles/progress40.png'
import progCirc50 from './../imgs/gallery/progress/circles/progress50.png'
import progCirc60 from './../imgs/gallery/progress/circles/progress60.png'
import progCirc70 from './../imgs/gallery/progress/circles/progress70.png'
import progCirc80 from './../imgs/gallery/progress/circles/progress80.png'
import progCirc90 from './../imgs/gallery/progress/circles/progress90.png'
import progCirc100 from './../imgs/gallery/progress/circles/progress100.png'
import snoutOn from './../imgs/gallery/logos/snout-on.png'
import snoutOff from './../imgs/gallery/logos/snout-off.png'


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time:1,
          progTime:1,
          navCol:"no",
          mousePig:false,
          mouseTruff:false,
          mouseHeart:false,
          mouseSnout:false,
          mouseCalc:false,
          mouseProg:false,
      } 
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.updateTime()
        this.updateProgTime()
        if(this.props.navCol=="yes"){
            this.setState({navCol:"yes"})
        }
        if(this.props.navCol=="no"){
            this.setState({navCol:"no"})
        }
    }
  
    updateTime(){
        if((this.state.time)>5){
            this.setState({time:1})
        }
        setTimeout(() => {
            let t = this.state.time
            this.setState({ time: t+1 });
            this.updateTime()
        }, 2000);
    }


    updateProgTime(){
        setInterval(() => {
           let t = this.state.progTime
           if(this.state.mouseProg){
              this.setState({ progTime: t+1 })
              if((this.state.progTime)>11){
                this.setState({progTime:1})
                }
           }
        }, 1000);
    }
     

    handleMouseHover=(mouse) =>{
    this.setState({[mouse]:true})
    }
      
    handleMouseExit=(mouse) =>{
    this.setState({[mouse]:false})
    }

  render() {
    return (
      <div id="comp-div" style={{zIndex:"2"}}>
        <div class="row" id="page-header">
            <div class="col" id="text-center">
                <div class="row">
                    <div class="col">
                    <FontAwesomeIcon id="header-icon"  icon={faPalette} />
                    </div>
                </div>
                <div class="row" id="header-text">
                    <div class="col">Gallery</div>
                </div>
                <div class="row" id="idea-idea">
                    <div class="col" id="text-content-style">
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="gallery-space"></div>
        <div class="row" id="gal-content">
            <div class="col-md-1"></div>
            <div class="col-md-10" id="gal-col">
                <div class="row" id="gallery-row-1">
                    <div class="col-md-3" id="gallery-container-pig"
                    onMouseOver={() =>this.handleMouseHover("mousePig")} onMouseOut={() =>this.handleMouseExit("mousePig")}>
                        <Link to="/pigs" id="link-no-style">
                            <div  class="row" id="gallery-pic-header">
                                <div class="col">
                                    <span id="text-content-style"> Pigs </span>
                                </div>
                            </div>
                            <div class="row">
                            {this.state.mousePig && <img alt="pig open" id="gallery-pig" src={pigOpen}/> }
                                {!this.state.mousePig && <img alt="pig closed" id="gallery-pig" src={pigClosed}/> }
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3" id="gallery-container-truff"
                    onMouseOver={() =>this.handleMouseHover("mouseTruff")} onMouseOut={() =>this.handleMouseExit("mouseTruff")}>
                        <Link to="/truffles" id="link-no-style">
                            <div  class="row" id="gallery-pic-header">
                                <div class="col">
                                    <span id="text-content-style"> Truffles </span>
                                </div>
                            </div>
                            <div class="row" id="gallery-row">
                                    <img alt="red truffle"  id="gallery-truff" className={this.state.time===1?'animate-vis':'animate-hide'}
                                src={redT} />
                                
                                <img alt="black truffle"  id="gallery-truff" className={this.state.time===2?'animate-vis':'animate-hide'}
                                src={blackT} />

                                <img alt="blue truffle"  id="gallery-truff" className={this.state.time===3?'animate-vis':'animate-hide'}
                                src={blueT} />

                                <img alt="green truffle"  id="gallery-truff" className={this.state.time===4?'animate-vis':'animate-hide'}
                                style={{zIndex:"8",}} src={greenT} />

                                <img alt="yellow truffle"  id="gallery-truff" className={this.state.time===5?'animate-vis':'animate-hide'}
                                src={yellowT} />
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3" id="gallery-container-heart"
                    onMouseOver={() =>this.handleMouseHover("mouseHeart")} onMouseOut={() =>this.handleMouseExit("mouseHeart")}>
                        <Link to="/buttons" id="link-no-style">
                            <div  class="row" id="gallery-pic-header">
                                <div class="col">
                                    <span id="text-content-style"> Buttons </span>
                                </div>
                            </div>
                            <div class="row" id="gallery-row">
                                {this.state.mouseHeart && <img alt="heart on" id="gallery-pig" src={heartOn}/> }
                                {!this.state.mouseHeart && <img alt="heart off" id="gallery-pig" src={heartOff}/> }
                            </div>
                        </Link> 
                    </div>
                </div>
                <div class="row">
                <div class="col-md-3" id="gallery-container-calc"
                onMouseOver={() =>this.handleMouseHover("mouseCalc")} onMouseOut={() =>this.handleMouseExit("mouseCalc")}>
                    <Link to="/icons" id="link-no-style">
                        <div  class="row" id="gallery-pic-header">
                            <div class="col">
                                <span id="text-content-style"> Icons </span>
                            </div>
                        </div>
                        <div class="row">
                        {this.state.mouseCalc && <img alt="calc on" id="gallery-pig" src={calcOn}/> }
                            {!this.state.mouseCalc && <img alt="calc off" id="gallery-pig" src={calcOff}/> }
                        </div>
                    </Link>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-3" id="gallery-container-colors"
                onMouseOver={() =>this.handleMouseHover("mouseSnout")} onMouseOut={() =>this.handleMouseExit("mouseSnout")}>
                    <NavLink to={"/misc"} id="link-no-style">
                        <div  class="row"  id={!this.state.mouseSnout?'gallery-pic-header':'gallery-pic-header-hov'}>
                            <div class="col">
                                <span id="text-content-style">Misc.</span>
                            </div>
                        </div>
                        <div class="row" id="gallery-row">
                            {this.state.mouseSnout && <img alt="snout on" id="gallery-snout" src={snoutOn}/> }
                            {!this.state.mouseSnout && <img alt="snout off" id="gallery-snout" src={snoutOff}/> }
                        </div>
                    </NavLink>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-3" id="gallery-container-prog"
                onMouseOver={() =>this.handleMouseHover("mouseProg")} onMouseOut={() =>this.handleMouseExit("mouseProg")}>
                    <Link to={"/progress"} id="link-no-style">
                        <div  class="row" id="gallery-pic-header">
                            <div class="col">
                                <span id="text-content-style"> Progress </span>
                            </div>
                        </div>
                        <div class="row" id="gallery-row">
                            <img alt="prog circle 0"  id="gallery-prog" className={this.state.progTime===1?'animate-vis':'animate-hide'}
                                src={progCirc0} />
                                
                            <img alt="prog circle 10"  id="gallery-prog" className={this.state.progTime===2?'animate-vis':'animate-hide'}
                                src={progCirc10} />

                            <img alt="prog circle 20"  id="gallery-prog" className={this.state.progTime===3?'animate-vis':'animate-hide'}
                                src={progCirc20} />
                            

                            <img alt="prog circle 30"  id="gallery-prog" className={this.state.progTime===4?'animate-vis':'animate-hide'}
                                src={progCirc30} />

                            <img alt="prog circle 40"  id="gallery-prog" className={this.state.progTime===5?'animate-vis':'animate-hide'}
                                src={progCirc40} />

                            <img alt="prog circle 50"  id="gallery-prog" className={this.state.progTime===6?'animate-vis':'animate-hide'}
                            src={progCirc50} />
                                
                            <img alt="prog circle 60"  id="gallery-prog" className={this.state.progTime===7?'animate-vis':'animate-hide'}
                                src={progCirc60} />

                            <img alt="prog circle 70"  id="gallery-prog" className={this.state.progTime===8?'animate-vis':'animate-hide'}
                                src={progCirc70} />
                            

                            <img alt="prog circle 80"  id="gallery-prog" className={this.state.progTime===9?'animate-vis':'animate-hide'}
                                src={progCirc80} />

                            <img alt="prog circle 90"  id="gallery-prog" className={this.state.progTime===10?'animate-vis':'animate-hide'}
                                src={progCirc90} />

                            <img alt="prog circle 100"  id="gallery-prog" className={this.state.progTime===11?'animate-vis':'animate-hide'}
                                src={progCirc100} />
                        </div>
                    </Link>
                </div>
            </div>
         </div>
            <div class="col-md-1"></div>
        </div>
        <div class="row" id="gallery-bottom-space"></div>
        
        <div id="footer-div">
            <Footer/>
        </div>
    </div>
    );
  }
}
export default Gallery;