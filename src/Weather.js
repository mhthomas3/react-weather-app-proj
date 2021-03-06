import React, { useState, useEffect } from "react";
import './Weather.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    useEffect(()=>{
        setCity(props.defaultCity);
        setWeatherData({ ready: false })
    }, [props.defaultCity])

    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name,
        });
    };

    function handleSubmit(event){
        event.preventDefault();
        search();
    };
    
    function handleCityChange(event){
        setCity(event.target.value)
    };

    function getCurrentPosition(event){
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchCoordinates);
    }

    function searchCoordinates(position){
        let apiKey = "8241f45cf931c43fccdbeeaa5f496f97";
        let units = "imperial";
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function search() {
        const apiKey = "8241f45cf931c43fccdbeeaa5f496f97";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&appid=&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="WeatherAppWrapper">
                <div className= "Weather">
                    <div className="SearchForm">
                        <form id="search-form" className="mb-3 mx-3" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-group mt-3">
                                    <input
                                        type="text"
                                        placeholder="Search for a city"
                                        className="form-control form"
                                        id="city-input"
                                        aria-describedby="button-addon2"
                                        onChange={handleCityChange}
                                    />
                                    <button
                                        className="btn mx-1"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Search
                                    </button>
                                    <button
                                        className="btn"
                                        type="button"
                                        onClick={getCurrentPosition}
                                    >
                                        ????
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <WeatherInfo data={weatherData}/>
                    <WeatherForecast coordinates = {weatherData.coordinates}/>
                </div>
            </div>
        )
    } else {
        search()
        return (
            ""
        )
    }
}