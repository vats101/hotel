import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
        <h1>
          <Hero>
            <Banner title="404" subtitle="Page not found">
              <Link to="/" className="">Return Home</Link>
            </Banner>
          </Hero>
        </h1>
    </div>
  )
}

export default Error