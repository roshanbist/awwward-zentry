import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Features from './components/features/Features';
import Story from './components/story/Story';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className='overflow-hidden w-full relative'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
