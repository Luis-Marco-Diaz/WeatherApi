import React, {useState} from "react";
import Form from './Form';
import Card from "./Card";

const WeatherPanel = () => {
  let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=5ca72a211182ff3c3aa4fcff283d4fca&lang=es";
  let cityurl = "&q=";
  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=5ca72a211182ff3c3aa4fcff283d4fca&lang=es"

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setlocation] = useState("");
  
  const getLocation = async(loc) => {
    setLoading(true);
    setlocation(loc);

    //Weather
    urlWeather = urlWeather + cityurl + loc;
    
    await fetch(urlWeather).then((response) =>{
      if(!response.ok) throw {response}
      return response.json();
    })
    .then((weatherData) => {
      console.log(weatherData);
      setWeather(weatherData);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
      setShow(false);
    });

    //Forecast

    urlForecast = urlForecast + cityurl + loc;
    
    await fetch(urlForecast).then((response) =>{
      if(!response.ok) throw {response}
      return response.json();
    })
    .then((forecastData) => {
      console.log(forecastData);
      setWeather(forecastData);
      setLoading(false);
      setShow(true); // Visulalizar la tarjeta con la info.
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
      setShow(false);
    });
        
  }

  return(

      <React.Fragment>
        <Form newLocation={getLocation} />
        <Card showData = {show}
              loadingData = {loading}
              weather = {weather}
              forecast = {forecast}
        />
      </React.Fragment>

  );

}

export default WeatherPanel;