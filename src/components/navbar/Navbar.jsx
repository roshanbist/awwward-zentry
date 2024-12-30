import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TiLocationArrow } from 'react-icons/ti';

import { navItems } from '../constant/NavItem';
import Button from '../ui/Button';

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const toggleAudioIndicator = () => {
    if (isAudioPlaying) {
      audioElementRef.current.pause();
    } else {
      audioElementRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNav(true);
        navContainerRef.current.classList.remove('floating-nav');
      } else if (window.scrollY > lastScroll) {
        setShowNav(false);
      } else if (window.scrollY < lastScroll) {
        setShowNav(true);
        navContainerRef.current.classList.add('floating-nav');
      }

      setLastScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: showNav ? 0 : -100,
      opacity: showNav ? 1 : 0,
      duration: 0.2,
    });
  }, [showNav]);

  return (
    <div
      className={`fixed inset-x-0 top-8 z-50 border-none transition-all duration-700 sm:inset-x-8`}
      ref={navContainerRef}
    >
      <header className='w-full'>
        <nav className='flex size-full items-center justify-between p-6'>
          <div className='flex items-center gap-6'>
            <a href='/'>
              <img src='images/logo.png' alt='logo' className='w-16' />
            </a>
            <Button
              id='product-button'
              title='Products'
              rightIcon={<TiLocationArrow />}
              containerClass='bg-blue-50 max-md:hidden'
            />
          </div>
          <div className='flex items-center'>
            <ul className='hidden md:flex'>
              {navItems.map((item) => (
                <li key={item.id} className='mx-6'>
                  <a href={`#${item.path}`} className='nav-hover-btn'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className='flex items-end space-x-1 music-icon h-3'
              onClick={toggleAudioIndicator}
            >
              <audio src='/audio/loop.mp3' loop ref={audioElementRef} />
              {[1, 2, 3, 4].map((bar) => (
                <span
                  key={bar}
                  className={`indicator-line ${isAudioPlaying ? 'active' : ''}`}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
