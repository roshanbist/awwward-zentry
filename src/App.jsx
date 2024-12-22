import About from './components/about/About';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <div className='overflow-hidden w-full relative'>
      <main>
        <Hero />
        <About />
        <section className='min-h-screen w-screen bg-blue-400' />
      </main>
    </div>
  );
};

export default App;
