import React, { useState } from 'react';
import './WeatherTemperature.css';

export default function WeatherTemperature(props) {
    const [unit,setUnit] = useState('fahrenheit');

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius")
        
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    if (unit==="fahrenheit"){
    return(
        <span className="WeatherTemperature">                        
            <span className="temperature mx-2">{props.fahrenheit}</span>
            <span className="units">
                {" "}
                <a href="/" className="active">°F</a>{" "}| <a href="/" onClick={convertToCelsius} > °C</a>
            </span>
        </span>
        )} else {
            let celsius = ((props.fahrenheit - 32) * (5/9))
            return (
            <span className="WeatherTemperature">                        
                <span className="temperature mx-2">{Math.round(celsius)}</span>
                <span className="units">
                    {" "}
                    <a href="/" onClick={showFahrenheit}>°F</a>{" "}| <a href="/" className="active"> °C</a>
                </span>
            </span>
            )
        }
}