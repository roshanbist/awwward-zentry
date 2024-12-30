import { useRef } from 'react';
import AnimatedTitle from '../animatedTitle/animatedTitle';
import gsap from 'gsap';

import RoundedCorner from '../ui/RoundedCorner';
import Button from '../ui/Button';

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

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
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
                  className='object-contain'
                />
              </div>
            </div>
            {/* for the rounded corner */}
            <RoundedCorner />
          </div>
        </div>
        <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
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
    </section>
  );
};

export default Story;
