import { useRef } from 'react';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const navContainerRef = useRef(null);

  return (
    <div className='overflow-hidden w-full relative' ref={navContainerRef}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section className='min-h-screen w-screen bg-blue-400' />
      </main>
    </div>
  );
};

export default App;
