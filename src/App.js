import React, { useState } from "react";
import Image from "./Components/Image";
import ImagesList from "./Components/ImagesList"
import BoundingBox from "./BoundingBox.js";

export default function App() {
  const [Images] = useState(ImagesList)
  const [showImages, setShowImages] = useState(true);

  function handleClick() {
    return setShowImages(false)
  }
  return (
    <div>
      {showImages ?
        <div className="photo gallery">
          <p className="galleryText"> Photo Gallery </p>
          <p className="customImage">Want to upload customImage </p>
          <button
            type="button"
            className="btn btn-primary submitButton"
            onClick={handleClick}
          >
            click Here
      </button>
          <div >
            {Images.map(item => (
              <Image value={item} key={item} />
            ))}
          </div>
        </div> : <BoundingBox />}
      {/* {Images.map(item => (
        <Image value={item} key={item} />
      ))} */}
    </div>
  )
}

