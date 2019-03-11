import React from 'react'

const ImageCard = ({imgObj,clickHandler}) => (
      <div className="center">
      <h2 className="text">{imgObj.name}</h2>
      <img src={imgObj.img} onClick={()=>clickHandler(imgObj)} alt=""/>
      </div>
    )
export default ImageCard
