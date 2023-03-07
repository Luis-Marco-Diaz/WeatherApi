import './App.css';
import axios from 'axios';
import Pokemon from './Components/Pokemon';
import { useEffect, useState } from 'react';



function App() {
  
  const [ characterData, setCharacterData ] =
  useState ({}) 

  useEffect ( () => {

    axios
    .get("https://pokeapi.co/api/v2/pokemon/charizard")
    .then( resp => setCharacterData(resp.data) )
    .catch(error => console.error(error))

  }, [] )

  return (
    <div className="App">
      <Pokemon data={characterData} ></Pokemon>
    </div>
  );
}

export default App;
