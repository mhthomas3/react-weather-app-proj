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

    const codeAltMapping ={
        "01d": "Clear Sky - Day",
        "01n": "Clear Sky - Night",
        "02d": "Few Clouds - Day",
        "02n": "Few Clouds - Night",
        "03d": "Scattered Clouds - Day",
        "03n": "Scattered Clouds - Day",
        "04d": "Broken Clouds - Day",
        "04n": "Broken Clouds - Night",
        "09d": "Rain Shower - Day",
        "09n": "Rain Shower - Night",
        "10d": "Rain - Day",
        "10n": "Rain - Night",
        "11d": "Thunderstorm - Day",
        "11n": "Thunderstorm - Night",
        "13d": "Snow - Day",
        "13n": "Snow - Night",
        "50d": "Mist - Day",
        "50n": "Mist - Night",
    }
    
    return(
        <img src={codeMapping[props.icon]} alt={codeAltMapping[props.alt]} className="weathericon" width={props.width}/>
    )
}