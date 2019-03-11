import React from 'react'

const ImageCard = ({imgObj,clickHandler}) => (
      <div className="center top bg-w">
      <h2>{imgObj.name}</h2>
      <img className="img" src={imgObj.img}  alt=""/>
      <button className="del-btn btn btn-primary" onClick={()=>clickHandler(imgObj)}>Delete</button>
      </div>
    )
export default ImageCard
