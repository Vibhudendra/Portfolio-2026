import React from 'react'
import Navbar from './sections/navbar'
import gsap from 'gsap';
import Hero from './sections/Hero';

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />

    </div>
  )
}

export default App