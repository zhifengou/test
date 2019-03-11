import React from "react";
import ImageCard from "./ImageCard";

    const ImageContainer = ({clickHandler,images}) => {
    let imgArr = images.map(imgObj=>((<ImageCard key={imgObj.name} imgObj={imgObj} clickHandler={clickHandler}/>)
  ))
    return(
        <div>
          {imgArr}
        </div>
    )
  }
  export default ImageContainer
