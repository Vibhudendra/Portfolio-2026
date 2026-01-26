import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero';

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App