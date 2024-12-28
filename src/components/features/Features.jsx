import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TiLocationArrow } from 'react-icons/ti';

import Card from '../ui/Card';
import BentoTilt from '../ui/BentoTilt';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const textContainerRef = useRef(null);

  useGSAP(() => {
    const textAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: 'top bottom',
        end: 'center bottom',
        toggleActions: 'play none none reset',
      },
    });

    textAnimation.from(textContainerRef.current, {
      opacity: 0,
      y: 150,
      ease: 'power2.inOut',
      duration: 1,
    });
  });

  return (
    <section className='bg-black pb-[10rem] md:pb-[20rem]'>
      <div className='container mx-auto px-8 md:px-16'>
        <div className='px-8 py-[5rem] md:py-[10rem]' ref={textContainerRef}>
          <p className='font-cicular-web text-lg text-blue-50'>
            Into the Metagame layer
          </p>
          <p className='max-w-3xl font-cicular-web text-lg text-blue-50 opacity-50'>
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
        {/* bento grid */}
        <BentoTilt className='border-hsla relative mb-12 h-96 w-full md:h-[65vh] overflow-hidden rounded-md'>
          <Card
            src='videos/feature-1.mp4'
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description='A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
          />
        </BentoTilt>
        <div className='grid grid-cols-2 grid-rows-3 gap-12'>
          <BentoTilt className='bento-tilt_1 row-span-1 md:row-span-2 md:col-span-1'>
            <Card
              src='videos/feature-2.mp4'
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description='An anime and gaming-inspired NFT collection - the IP primed for expansion.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 row-span-1 ms-20 md:ms-0 md:col-span-1'>
            <Card
              src='videos/feature-3.mp4'
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description='A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 me-20 md:me-0 md:col-span-1'>
            <Card
              src='videos/feature-4.mp4'
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description='A cross-world AI Agent - elevating your gameplay to be more fun and productive.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-between bg-violet-300 p-8'>
              <h1 className='bento-title special-font max-w-64 text-black'>
                M<b>0</b>re com<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className='m-5 scale-[3] self-end' />
            </div>
          </BentoTilt>
          <BentoTilt className='bento-tilt_2'>
            <video
              src='/videos/feature-5.mp4'
              loop
              muted
              autoPlay
              className='size-full object-cover object-center'
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
