import React from "react"
import './Footer.css'

export default function Footer(){

    return (
        <>
        <footer className="bg-dark">
        <div className="container">
        <img src="./image-folder/google-map-icon.png" className="map-google" alt="map-image" height= "50px" width="50px" onClick={mapClick} />
        <p className="address-info">Tilak Pathology, Bank Road,<br/> Jubilee Road, Gorakhpur, <br/> Uttar Pradesh 273001</p>
        </div>
        <br/>
        <div className="container">
        <img src="./image-folder/whatsapp-icon.png" className="call-me" alt="call-image" height= "45px" width="45px" onClick={callClick}/>
        <p className="mobile-number">+91-9554994990</p>
        </div>

        
        </footer>
    
        </>
)}


const mapClick = () => window.open('https://goo.gl/maps/QLezhZErPUQXumVX8')

const callClick = () => window.open('tel:+91-95549-94990')

