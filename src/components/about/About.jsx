import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AnimatedTitle from '../animatedTitle/AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'top top',
        end: '+=750 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  const sectionTitle = `Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure`;

  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-6'>
        <h2 className='font-general text-sm uppercase mb-8'>
          Welcome to Zentry
        </h2>
        <AnimatedTitle title={sectionTitle} containerClass='!text-black mb-8' />
      </div>
      <div className='h-dvh w-screen relative' id='clip'>
        <div className='mask-clip-path about-image'>
          <img
            src='images/about.webp'
            alt='Background'
            className='absolute left-0 top-0 size-full object-cover'
          />
        </div>
        <div className='about-subtext'>
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p>
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
