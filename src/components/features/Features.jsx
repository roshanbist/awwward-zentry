import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
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
      duration: 0.6,
      ease: 'power2.inOut',
    });
  });

  useGSAP(() => {
    // loop through each bento-grid dom element
    gsap.utils.toArray('.bento-grid').forEach((bentoGrid) => {
      const tiltAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: bentoGrid,
          start: '50 bottom',
          end: 'bottom center',
          toggleActions: 'play none none reset',
        },
      });

      tiltAnimation.to(bentoGrid, {
        transform: 'perspective(1000px) translate(0, 0) rotateX(0deg)',
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
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
        <div className='relative mb-12 bento-grid'>
          <BentoTilt className='border-hsla rounded-md transition-transform duration-300 ease-out h-96 w-full md:h-[50vh] overflow-hidden'>
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
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-12'>
          <div className='bento-grid row-span-1 md:row-span-2 col-span-2 md:col-span-1'>
            <BentoTilt className='bento-tilt_1 relative size-full'>
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
          </div>
          <div className='bento-grid row-span-1 ms-20 md:ms-0 col-span-2 md:col-span-1'>
            <BentoTilt className='bento-tilt_1 relative size-full'>
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
          </div>
          <div className='bento-grid me-20 md:me-0 md:col-span-1 col-span-2'>
            <BentoTilt className='bento-tilt_1 relative size-full'>
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
          </div>
          <div className='bento-grid col-span-1 row-span-1'>
            <BentoTilt className='bento-tilt_2 size-full'>
              <div className='flex size-full flex-col justify-between bg-violet-300 p-8'>
                <h1 className='bento-title special-font max-w-64 text-black'>
                  M<b>0</b>re com<b>m</b>ing s<b>o</b>on!
                </h1>
                <TiLocationArrow className='m-5 scale-[3] self-end' />
              </div>
            </BentoTilt>
          </div>
          <div className='bento-grid col-span-1 row-span-1'>
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
      </div>
    </section>
  );
};

export default Features;
