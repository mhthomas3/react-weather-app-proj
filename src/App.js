import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';
import SearchForm from './SearchForm'

export default function App() {
  return (
    <div className="App">
      <div className="WeatherAppContainer container">
        <SearchForm />
        <Weather />
      </div>
    </div>
  );
}

