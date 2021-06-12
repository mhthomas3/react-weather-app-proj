import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="WeatherAppContainer container">
        <Weather defaultCity = "Raleigh"/>
      </div>
    </div>
  );
}

