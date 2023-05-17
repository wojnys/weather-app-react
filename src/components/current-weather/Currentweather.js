import React from 'react'
import axios from 'axios';
import "./CurrentWeather.css"
import { API_UNSPLASH_KEY }  from "../api/KEYS"

export const CurrentWeather = ({data}) => {
  const cityName = data.city;

  const fetchBuildingImage = async (cityName) => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?query=${cityName}&client_id=${API_UNSPLASH_KEY}`
        );
    
        // Extract the image URL from the response data
      const imageUrl = response.data.results[0].urls.regular;
      console.log(imageUrl + "  ee")

        if(imageUrl != null) {
            // Set the image source dynamically
            const imgElement = document.querySelector('.cityImage');
            imgElement.src = imageUrl;
            imgElement.alt = cityName;
        } 
      }catch (error) {
        console.error(error);
        const imgElement = document.querySelector('.cityImage');
        imgElement.src = "none";
        imgElement.alt = cityName;
        alert("ok")
      }
    };

    fetchBuildingImage(cityName);

  return (
<div className='current-weather-container'>

<div className="widget">
            
    <div className="left-panel panel">
        <div className="date">
            Monday, 20 Aug 2018
        </div>
        <div className="city">
          <div> { data.city} </div>
        </div>
        <div className="temp">
          <div className='weather-icon-div'>
            <img className='weather-icon' src ={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
          </div>
          <div className='temp-div'> { Math.floor(data.main.temp) } <span>&#8451;</span> </div> 
        </div>
    </div>
    <div className="right-panel panel">
    <div className='image'>
      <img className='cityImage'/>
      </div>
    </div>

</div>
  </div>
  )
}
