import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import Service from './sections/Service';
import ServicesDetail from './sections/ServicesDetail';
import ReactLenis from 'lenis/react';

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Service />
      <ServicesDetail />
      {/* <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section> */}
    </ReactLenis>
  )
}

export default App