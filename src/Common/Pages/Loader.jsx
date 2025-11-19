import React from 'react'
import loaderGif from "../../Media/original-49e4d7fbe2907a80af0d9-unscreen.gif";

function Loader() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-blue-400">
  <img
    className="w-100" 
    src={loaderGif}
    alt="LOADING"
  />
</div>

    </>
  )
}

export default Loader
