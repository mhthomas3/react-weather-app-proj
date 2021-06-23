import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState({backgroundColor: `#637373`});
  const [blueButtonImage, setBlueButtonImage] = useState("SetBlue.svg");
  const [redButtonImage, setRedButtonImage] = useState("SetRed.svg");
  const [weatherHeaderImage, setWeatherHeaderImage] = useState("DefaultWeather.svg");
  const [city,setCity] = useState("New York");
  const [parisButtonImage, setParisButtonImage] = useState("ParisButtonDefault.svg")
  const [newYorkButtonImage, setNewYorkButtonImage] = useState("NewYorkButtonDefault.svg")
  const [tokyoButtonImage, setTokyoButtonImage] = useState("TokyoButtonDefault.svg")

  function setParis(event){
    event.preventDefault();
    setCity("Paris");
  }

  function setNewYork(event){
    event.preventDefault();
    setCity("New York");
  }

  function setTokyo(event){
    event.preventDefault();
    setCity("Tokyo");
  }

  function setColorBlue(event){
    event.preventDefault();
    if (blueButtonImage ==="SetBlue.svg"){
    setBackgroundColor({backgroundColor: `#012053`});
    setBlueButtonImage("BlueSet.svg");
    setRedButtonImage("SetRed.svg");
    setWeatherHeaderImage("WeatherBlue.svg");
    setParisButtonImage("ParisButtonBlue.svg");
    setTokyoButtonImage("TokyoButtonBlue.svg");
    setNewYorkButtonImage("NewYorkButtonBlue.svg");
    } else {
    setBackgroundColor({backgroundColor: `#637373`});
    setRedButtonImage("SetRed.svg");
    setBlueButtonImage("SetBlue.svg");
    setWeatherHeaderImage("DefaultWeather.svg");
    setParisButtonImage("ParisButtonDefault.svg");
    setTokyoButtonImage("TokyoButtonDefault.svg");
    setNewYorkButtonImage("NewYorkButtonDefault.svg");
    }
  }

  function setColorRed(event){
    event.preventDefault();
    if (redButtonImage === "SetRed.svg"){
    setBackgroundColor({backgroundColor: `#F23214`});
    setRedButtonImage("RedSet.svg");
    setBlueButtonImage("SetBlue.svg");
    setWeatherHeaderImage("WeatherRed.svg");
    setParisButtonImage("ParisButtonRed.svg");
    setTokyoButtonImage("TokyoButtonRed.svg");
    setNewYorkButtonImage("NewYorkButtonRed.svg");
    } else {
    setBackgroundColor({backgroundColor: `#637373`});
    setRedButtonImage("SetRed.svg");
    setBlueButtonImage("SetBlue.svg");
    setWeatherHeaderImage("DefaultWeather.svg")
    setParisButtonImage("ParisButtonDefault.svg");
    setTokyoButtonImage("TokyoButtonDefault.svg");
    setNewYorkButtonImage("NewYorkButtonDefault.svg");
    }
  }

  return (
    <div className="App">
      <div className="AppWrapper container" style={backgroundColor}>
        <img src={weatherHeaderImage} alt = "Weather"/>
        <div className="row justify-content-center">
          <div className="col-2">
            <input className="colorDial" type='image' alt='Set page to Blue button' src={blueButtonImage} onClick={setColorBlue}/>
            <input className="colorDial" type='image' alt='Set page to Red button' src={redButtonImage} onClick={setColorRed}/>
          </div>
          <div className="WeatherAppContainer col-8 float-right">
            <Weather defaultCity = {city}/>
          </div>
          <div className="col-2">
          <img src="SetCity.svg" alt="'Set City' text" className="cityButton"/>
          <input type="image" className = "cityButton" alt="New York button" src={newYorkButtonImage}  onClick={setNewYork} />
          <input type="image" className = "cityButton" alt="Tokyo button" src={tokyoButtonImage}  onClick={setTokyo} />
          <input type="image" className = "cityButton" alt="Paris button" src={parisButtonImage}  onClick={setParis} />
          </div>
        </div>
      </div>
      <p className="openSourceLink">Coded by Morgan Thomas. <a href="https://github.com/mhthomas3/react-weather-app-proj" alt="Link to open source code" target="_blank" rel="noreferrer">Open sourced</a> on GitHub.</p>
    </div>
  );
}

