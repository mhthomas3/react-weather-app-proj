import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        })
        console.log(weatherData)
    }

    if (weatherData.ready) {
        return (
            <div className="Weather container">           
                <div className="row">
                    <div className="col-7 float-start">
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="partly cloudy"
                            className="src emoji"
                            id="icon"
                        />
                        <span className="temperature mx-2">42</span>
                        <span className="units">
                            {" "}
                            <a href="/" className="active">°F</a>{" "}| <a href="/" > °C</a>
                        </span>
                        <br />
                        <ul className="weather-stats ml-4">
                            <li>
                            Humidity: <span>60</span>%
                            </li>
                            <li>
                            Wind: <span>12</span>mph
                            </li>
                            <li className="current-weather-descrip">Partly Cloudy</li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <ul>
                            <li className="city">Evanston, IL</li>
                            <li className="day-time">Last updated at:</li>
                            <li className="day-time">
                                <span id="date">Monday 10:00 AM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "0938aaea4eb798390f9b1df3fa43323f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&appid=units=imperial`;
        axios.get(apiUrl).then(handleResponse);
        return (
            "Loading..."
        )
    }
}