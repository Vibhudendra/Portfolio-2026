import Navbar from './sections/Navbar'
import Hero from './sections/Hero';
import Service from './sections/Service';

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Service />
      
      {/* <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section> */}
    </div>
  )
}

export default App