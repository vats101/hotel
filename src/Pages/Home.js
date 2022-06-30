import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner className="banner" title="luxurious rooms" subtitle="Rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRooms></FeaturedRooms>
      
    </div>
  )
}

export default Home