
import React from "react";

const WeatherUser = ({data}) => {
  console.log(data)

  let url = "";
  let iconurl = "";

if (data) {
  url = "http://openweathermap.org/img/w/";
  iconurl = url + data.weather?.[0].icon + ".png"
}

  return (

     <div className="mt-5">
      <div className="continer-user mb-3 mx-auto">  
      <div className="Card mb-3 mx-auto text-dark">
                <div className="row g-0">
                   <div className="col-md-4">
                      <h3 className="card-title">Tu ubiación es: {data?.name} </h3>
                      <h5 className="card-text-h">Humedad: {data.main?.humidity}%</h5>
                      <h5 className="card-text-v">Velocidad del viento: {data.wind?.speed}m/s</h5>
                      <h2 className="card-temp"> {(data.main?.temp - 273.15).toFixed(1)}ºC</h2>
                      <h3 className="card-desc"><img src= {iconurl} alt="icon weather"/>{data.weather?.[0].description}</h3>
                   </div>
                </div>
        </div>
      </div>
     </div>

  );

}

export default WeatherUser