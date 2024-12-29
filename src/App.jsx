import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Features from './components/features/Features';
import Story from './components/story/Story';

const App = () => {
  return (
    <div className='overflow-hidden w-full relative'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Story />
        <section className='min-h-screen w-screen bg-blue-400' />
      </main>
    </div>
  );
};

export default App;
