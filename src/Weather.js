import './Weather.css';

export default function Weather(){
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
}