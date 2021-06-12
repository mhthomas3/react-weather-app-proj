import React from 'react';
import'./WeatherIcon.css'

export default function WeatherIcon(props){
    const codeMapping ={
        "01d": "/clearSkyD.svg",
        "01n": "/clearSkyN.svg",
        "02d": "/fewCloudsD.svg",
        "02n": "/fewCloudsN.svg",
        "03d": "/scatteredCloudsD.svg",
        "03n": "/scatteredCloudsN.svg",
        "04d": "/brokenCloudsD.svg",
        "04n": "/brokenCloudsN.svg",
        "09d": "/showerRainD.svg",
        "09n": "/showerRainN.svg",
        "10d": "/rainD.svg",
        "10n": "/rainN.svg",
        "11d": "/thunderstromD.svg",
        "11n": "/thunderstormN.svg",
        "13d": "/snowD.svg",
        "13n": "/snowN.svg",
        "50d": "/mistD.svg",
        "50n": "/mistN.svg",
    }
    
    return(
        <img src={codeMapping[props.icon]} alt={props.alt} className="weathericon" width={50}/>
    )
}