import React from 'react'
import loadingGif from '../images/loading-arrow.gif'
const Loading = () => {
  return (
    <div className="loading">
        <img src={loadingGif}/>
    </div>
  )
}

export default Loading