import './App.css';
import axios from 'axios';
import NavBar from './Components/Navbar';
import WeatherPanel from './Components/WeatherPanel';
import WeatherUser from './Components/WeatherUser';
import { useEffect, useState } from 'react';
import Spiner from './Components/Spiner';


function App() {

  const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
       setTimeout(() => {
       setIsLoading(false);
       }, 5000);
    }, []);
  
  const [data, setData ] = useState ({})
  useEffect( () => {
    
    navigator.geolocation.getCurrentPosition(position => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=5ca72a211182ff3c3aa4fcff283d4fca&lang=es`)
    .then( resp => setData(resp.data))
    .catch(error => console.error(error))
    }, (error) => console.log(error))
   
  }, [] )

  return (
    <div className='App'>
      <NavBar/>
      {isLoading && <Spiner/>}
      <WeatherPanel/>
      <WeatherUser data= {data} ></WeatherUser>
    </div>
  );
}

export default App;
