import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import RoomsContainer from '../components/RoomsContainer'

const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">Return Home</Link>
        </Banner>
      </Hero>
      <RoomsContainer></RoomsContainer>
     
    </div>
  )
}

export default Rooms