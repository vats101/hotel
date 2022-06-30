import React from 'react'
import RoomContext from '../context'
import {useContext,useEffect,useState} from 'react'
import items from '../data'
import Loading from './Loading'
import Room from './Room'
const FeaturedRooms = () => {
  const [featuredRoomsAll,setFeaturedRoomsAll]=useState(items.filter(room=>room.fields.featured===true));
 
  return (
    <div className="featured-rooms">
      <div className="featured-rooms-center">
       {featuredRoomsAll.map((room,index)=>{
         return(
           <Room room={room} key={index}/>
         )
       })}
       </div>
    </div>
  )
}

export default FeaturedRooms