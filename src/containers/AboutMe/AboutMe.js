import React, { Component } from 'react'
import me from '../../assets/Images/IMG-20181126-WA0007.jpg'

class AboutMe extends Component {
    render() {
        return(
            <div className="tc" style={{width: "99vw", height: "100%", background: "#eee", margin: '0', padding: '0'}}>
                <div className="animated lightSpeedIn delay-2s">
                    <img 
                        src={me} 
                        alt="SuhaybCabdulahi" 
                        width="35%" 
                        height="50%" 
                        style={{paddingBottom:"0.5em", marginTop: "20vh", borderRadius: "15px"}} 
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
        )
    }
}

export default AboutMe