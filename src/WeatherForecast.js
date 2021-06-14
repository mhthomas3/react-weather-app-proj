import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

export default function WeatherForecast(){
    return (
        <div className = "WeatherForecast">
            <div className="row">
                <div className = "col">
                    <div className = "WeatherForecast-name">
                        Thu
                    </div>
                    <WeatherIcon icon="01d" alt="Clear Sky" width="40"/>
                    <br/>
                    <span className="WeatherForecast-temperature-max">19</span>
                    <span className="WeatherForecast-temperature-min">10</span>
                </div>
            </div>
        </div>
    )
}