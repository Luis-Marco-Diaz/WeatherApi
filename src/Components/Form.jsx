import React, {useState} from 'react';

const Form = ({newLocation}) => {
 const [City, setCity, ] = useState("");
 const onsubmit = (e) => {
    e.preventDefault();
    console.log({City});
    if(City === "" || !City) return;
    newLocation(City);
 } 

 return(
  <div className="container">
    <form onSubmit={onsubmit}>
      <div className="input-group mb-3 mx-auto" >
        <input type="text" className="from-control" placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)}/>
        <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
      </div>
    </form>
  </div>

 )
 
}

export default Form;