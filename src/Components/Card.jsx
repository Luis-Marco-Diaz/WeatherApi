import React from 'react';
import Spinner from './Spiner';


const Card = ({loagingData, showData, weather, forecast}) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth()+1;
  let year = today.getFullYear();
  let date = day + "/" + month + "/" + year;

  let url = "";
  let iconurl = "";

  if (loagingData){
    return <Spinner/>;
  }
  
  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconurl = url + weather.weather?.[0].icon + ".png"
  } 

  return(
    <div className="mt-5">
      {
        showData == true? (
          <div className="container">
              <div className="card mb-3 mx-auto bg-dark text-light">
                <div className="row g-0">
                   <div className="col-md-4">
                      <h3 className="card-title"> {weather.main?.name} Nombre Ciudad </h3>
                      <p className="card-date"> {date} </p>
                      <h2 className="card-temp"> {(weather.main?.temp - 273.15).toFixed(1)}ºC</h2>
                      <p className="card.desc"><img src={iconurl} alt="icon weather"/>{weather.weather?.[0].description}</p>
                      <img src="https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="City" className="img-fluid rounded-start"/>
                   </div>
                   <div className="col-md-8">
                      <div className="card-body text-start mt-2" >

                      </div>
                   </div>
                </div>
              </div>
          </div>
        ):(
          <h2 className="text-light" >Sin Datos</h2>
        )
      }
    </div>
  );
}

export default Card;