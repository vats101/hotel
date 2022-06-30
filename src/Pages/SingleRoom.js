import React from 'react'
import {Link,useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import RoomContext from '../context'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import items from '../data';

const SingleRoom = () => {
  const {lobby}=useParams();
  let [item,setItem]=useState({});
  useEffect(()=>{items.map((room)=>{
    if(room.fields.slug===lobby)
    {
    item=room;
    setItem(room);
    }
  },[item])
  })
 
 
  if(item.fields!=undefined)
  {
    var img1=item.fields.images[0].fields.file.url
  return (
    <>
    <Hero hero="roomsHero" style={{backgroundImage:`url(${img1})`}}>
      <Banner className="banner" title={`${item.fields.name}`} subtitle="none">
        <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
      </Banner>
    </Hero>
    <section className='single-room'>
      <div className="single-room-info">
        <article className="desc">
          <h3>Details</h3>
          <p>{item.fields.description}</p>
        </article>
        <article class="info">
          <h3>Info</h3>
          <h6>Price : {item.fields.price}</h6>
          <h6>size : {item.fields.size}</h6>
          <h6>Capacity : {item.fields.capacity>1?`${item.fields.capacity} people`:`${item.fields.capacity} person`}</h6>
          <h6>Pets : {item.fields.pets?`allowed`:`not allowed`}</h6>
          <h6>Breakfast : {item.fields.breakfast?`free`:`paid`}</h6>
        </article>
      </div>
    </section>
    <section className='room-extras'>
      <h6>extras</h6>
      <ul className='extras'>
        {item.fields.extras.map((item,index)=>{
          return(
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </section>

    </>
  )}
  else{
    return(
      <h1>Undefined</h1>
    )
  }


}

export default SingleRoom