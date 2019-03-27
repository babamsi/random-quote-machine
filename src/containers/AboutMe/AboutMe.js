import React, { Component } from 'react'
import me from '../../assets/Images/me2.jpg'
import Particles from 'react-particles-js'
import './AboutMe.css'

class AboutMe extends Component {
    render() {
        return(
            <React.Fragment>
                <Particles
                    className="particlesAbout"
                    params={{
                        "particles": {
                            "number": {
                                "value": 90
                            },
                            "size": {
                                "value": 5
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "repulse"
                                }
                            }
                        }
                }} />
                <button 
                    className="home"
                    onClick={() => this.props.history.push('/')}>Go Home</button>
            <div className="tc" style={{width: "100%", height: "100%", margin: '0', padding: '0', backgroundColor: "#263238"}}>
                <div className="animated lightSpeedIn delay-2s">
                    
                        <img 
                            src={me} 
                            alt="SuhaybCabdulahi" 
                            width="35%" 
                            height="10%"
                            align="middle" 
                            style={{borderRadius: "15px", paddingBottom:"0.5em", marginTop: "20vh"}} 
                            />
                            <br/><i>"SuhaybCabdulahi"</i>
                  
                    
                    </div>
                <div className="animated slideInLeft delay-3s" style={{fontWeight: "700", lineHeight: "1.2em", fontSize: "25px"}}>
                    <p>- Hello, that is me   my Full-name is Suhayb Abdulwahid Abdullahi and I am the creator of this great project 
                    </p>
                    <p>- I am a junior full-stack web-developer and my nationality is somalia</p>
                    <p>- I made this project with React and Redux along with React-Router-Dom</p>
                </div>
                <br/>
                    <div className="animated zoomInLeft delay-3s" style={{marginBottom: "40px"}}>
                    <i className="material-icons">
                        dialer_sip
                    </i> 00252616989940 <br/>
                    <i className="material-icons">
                        email
                    </i> sabkacade40@gmail.com
                    </div>
            </div>
            </React.Fragment>
        )
    }
}

export default AboutMe