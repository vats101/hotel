import React from 'react'
import { Link } from 'react-router-dom';

const Room = (room) => {

  return (
    <Link to={`/rooms/${room.room.fields.slug}`} className="room">
      <div className="img-container">
        <img src={room.room.fields.images[0].fields.file.url} alt="single-room" />
        <div className="price-top">
          <h6>${room.room.fields.price}</h6>
          <p>per night</p>
        </div>
      </div>
      <p className="room-info">{room.room.fields.name}</p>
    </Link>
  )
}

export default Room