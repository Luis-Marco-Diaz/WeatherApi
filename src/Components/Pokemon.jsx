import React from "react"

const Pokemon = ({data}) => {
  return (
    <div className="character-card">
      <img className="image-poke" src={ data.sprites?.back_default} alt="img" />
      <h1>Name: { data.name }</h1>
      <h3>Weight: { data.weight } </h3>
      <h3>height: {data.height} </h3>
      <h3>Moves: {data.moves?.[0].move.name} </h3>
      <img className="image-poke" src={ data.sprites?.other.dream_world.front_default} alt="img" />

    </div>

  )

}

export default Pokemon