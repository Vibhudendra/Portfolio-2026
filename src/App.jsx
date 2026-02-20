import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import Service from './sections/Service';
import ServicesDetail from './sections/ServicesDetail';
import ReactLenis from 'lenis/react';
import About from './sections/About';
import Works from './sections/Works';
import Contact from './sections/Contact';
import Contacts from './sections/Contacts';

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Service />
      <ServicesDetail />
      <About />
      <Works />
      <Contact />
      <Contacts />
      {/* <section className='min-h-screen'/> */}
    </ReactLenis>
  )
}

export default App