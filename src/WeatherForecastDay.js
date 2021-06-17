import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecst(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`
    }

    function day(){
        let date = new Date(props.data.dt *1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day]
    }

    return (
        <div className="WeatherForecastDay">
            <div className = "WeatherForecast-day">
            {day()}
            </div>
            <WeatherIcon width = {40} icon={props.data.weather[0].icon} alt={props.data.weather[0].icon}/>
            <br/>
            <span className="WeatherForecast-temperature-max">
                {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperature-min">
                {minTemperature()}
            </span>
        </div>
    )
}