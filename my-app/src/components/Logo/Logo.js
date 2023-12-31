import React from "react";
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import rocket from './rocket.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55}} style={{ height: 150, width: 150}}>
                <div className="Tilt-inner pa3">
                    <img src={rocket} alt="Logo Placeholder" style={{paddingTop: '5px'}}/>
                    
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;