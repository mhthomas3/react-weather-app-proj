import React from 'react';
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo container">          
                <div className="row">
                    <div className="col-7 float-start">
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="partly cloudy"
                            className="src emoji"
                            id="icon"
                        />
                        <span className="temperature mx-2">{props.data.temperature}</span>
                        <span className="units">
                            {" "}
                            <a href="/" className="active">°F</a>{" "}| <a href="/" > °C</a>
                        </span>
                        <br />
                        <ul className="weather-stats ml-4">
                            <li>
                            Humidity: <span>{props.data.humidity}</span>%
                            </li>
                            <li>
                            Wind: <span>{props.data.wind}</span>mph
                            </li>
                            <li className="current-weather-descrip">{props.data.description}</li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <ul>
                            <li className="city">{props.data.city}</li>
                            <li className="day-time">Last updated at:</li>
                            <li className="day-time">
                                <span id="date"><FormattedDate date={props.data.date} /></span>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}