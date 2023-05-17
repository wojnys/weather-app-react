import { Search } from './components/search/search';
import './App.css';
import { CurrentWeather } from './components/current-weather/Currentweather';
import {useState} from "react"
import { API_KEY_WEATHER_ACCESS, API_KEY_FORECAST_ACCESS  }  from "./components/api/KEYS"

function App() {

  console.log(process.env.API_KEY);

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
 

    const handleOnSearchChange  = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")
    const [name, countryCode] = searchData.label.split(", ")

    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}, ${countryCode} lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY_WEATHER_ACCESS}`)
    const forecastWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}, ${countryCode} lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY_FORECAST_ACCESS}`)

    Promise.all([currentWeatherFetch, forecastWeatherFetch]) 
      .then( async (response) => {
        const weatherResponse = await response[0].json();
        const forecastReponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });  //toto znamena ze data, ktere mame v tomto objektu tak je jakoby doplime a prepiseme za nove
        setForecast( { city: searchData.label, ...forecastReponse });
      })
      .catch((err) => console.log(err))
    
  }

  console.log(currentWeather);
  console.log(forecast);



  return (
    <div className="container">
    <Search onSearchChange={handleOnSearchChange}/>
    {currentWeather &&<CurrentWeather data={currentWeather} /> }
    </div>
  );
}

export default App;
