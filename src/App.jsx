import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Features from './components/features/Features';

const App = () => {
  return (
    <div className='overflow-hidden w-full relative'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <section className='min-h-screen w-screen bg-blue-400' />
      </main>
    </div>
  );
};

export default App;
