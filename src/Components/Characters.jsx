import React from "react"

const Character = ({data}) => {
  return (
    <div className="character-card">
      <img src={data.iamge} alt="picsum.photos" />
      <h1> { data.name } </h1>
      <h3><span></span></h3>

    </div>

  )

}

export default Character