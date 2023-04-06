
import React from "react";
import { useState } from 'react'

const WeatherUser = ({ data }) => {
  console.log(data)

  return (
    <div className="character-card">
      <h1>Ciudad: {data.name}, {data.sys?.country} </h1>
      <h3>Temp: {data.main?.temp} ºK </h3>
      <h3>Vientos: {data.wind?.speed} km/h </h3>
      <h3>Grados: {(data.main.temp - 273.15).toFixed(1)}ºC </h3> 
      <h2>{data.weather?.[0].main}</h2>
      <h4>"{data.weather?.[0].description}"</h4>    
    </div>

  );

}

export default WeatherUser