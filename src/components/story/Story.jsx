import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import RoundedCorner from '../ui/RoundedCorner';
import AnimatedTitle from '../animatedTitle/animatedTitle';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const frameRef = useRef('');

  const sectionTitle = `The St<b>o</b>ry of <br /> a hidden real<b>m</b>`;

  const handleMouseMove = (e) => {
    const frameElement = frameRef.current;

    if (!frameElement) {
      return;
    }

    const { left, top, width, height } = frameElement.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut',
    });
  };

  useGSAP(() => {
    const storyImageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.story-img-container',
        start: '50 bottom',
        end: 'bottom center',
        toggleActions: 'play none none reset',
      },
    });

    storyImageAnimation.to('.story-img-container', {
      transform: 'perspective(1000px) translate(0, 0) rotateX(0deg)',
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  return (
    <section
      id='story'
      className='w-screen bg-black text-blue-50 pb-[3rem] md:pb-[5rem]'
    >
      <div className='container size-full mx-auto'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
          <p className='font-general text-sm uppercase'>
            the multiversal ip world
          </p>
          <div className='relative size-full'>
            <AnimatedTitle
              title={sectionTitle}
              containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
              sectionId='#story'
            />
            <div className='story-img-container'>
              <div className='story-img-mask'>
                <div className='story-img-content'>
                  <img
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    ref={frameRef}
                    src='images/entrance.webp'
                    alt='entrace'
                    className='object-contain size-full'
                  />
                </div>
              </div>
              {/* for the rounded corner */}
              <RoundedCorner />
            </div>
          </div>
          <div className='md:-mt-[8rem] flex w-full justify-center md:me-44 md:justify-end'>
            <div className='flex h-full w-fit flex-col items-center md:items-start'>
              <p className='mb-8 max-w-xl text-center font-circular-web text-violet-50 md:text-start'>
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>

              <Button
                id='realm-btn'
                title='discover prologue'
                containerClass='bg-blue-50 py-6'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
