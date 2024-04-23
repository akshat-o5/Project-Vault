import AboutCard from './components/AboutCard'
import HeroOne from './components/HeroOne'
import React from 'react'

function Home() {
  return (
    <>
    <div className='m-6'>
      <HeroOne />
    </div>
    <div className='m-6 flex justify-center'>
    <AboutCard/>
  </div>
  </>
  )
}

export default Home