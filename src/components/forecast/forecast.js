import React, { useState } from "react";
import "./forecast.css";

export const Forecast = ({ data }) => {
  {
    data.list.map((value) => (
        console.log(value.dt_txt.split(" ")[1] + "   f")
        ));
  }

  function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }


  //convert API WEATHER array of object to sorted array by day name
  const array = data.list.reduce((acc, obj) => {
    const dayOfWeek = getDayName(obj.dt_txt, "cz-CZ");
    acc[dayOfWeek] = acc[dayOfWeek] || [];
    acc[dayOfWeek].push(obj);
    return acc;
  }, {});
  
  console.log(array);


  return (
    <div className="forecast-div-container">

      <div>
      {Object.entries(array).map(([day, objects]) => (
        <div key={day} className="forecast-widget">
        <div className="day-name">
            { day }
        </div>
          {objects.map((object, index) => (
            <div className="three-hours-forecast">
                <div className="time">
                    { object.dt_txt.substring(0,object.dt_txt.length - 3).split(" ")[1] }
                </div>
                <div className='forecast-temp'>
                    { Math.floor(object.main.temp) + "°"  }
                </div>
                <div className='fore-icon'>
                    <img className='foreacst-icon' src ={`/icons/${object.weather[0].icon}.png`} />
                </div>
            </div>
          ))}
        </div>
      ))}
    </div>

    </div> 
  );
};
