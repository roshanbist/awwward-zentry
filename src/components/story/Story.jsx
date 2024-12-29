import { useRef, useState } from 'react';
import AnimatedTitle from '../animatedTitle/animatedTitle';

const Story = () => {
  const [clipPathStyle, setClipPathStyle] = useState(
    `path(
      'M 894.467 228.945 L 894.467 228.945 Q 902.347 230.326 905.599 237.635 L 1038.54 536.435 Q 1041.79 543.744 1033.91 545.103 L 364.18 660.513 Q 356.296 661.872 355.751 653.89 L 320.367 136.214 Q 319.822 128.233 327.702 129.614 Z'
    )`
  );

  const frameRef = useRef('');

  const sectionTitle = `The St<b>o</b>ry of <br /> a hidden real<b>m</b>`;

  const handleMouseMove = (e) => {
    const frameElement = frameRef.current;

    if (!frameElement) {
      return;
    }

    const { left, top, width, height } = frameElement.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Dynamically generate a new path based on the mouse position
    const dynamicPath = `
      M ${x * 1000} ${y * 200} 
      L ${x * 900} ${y * 400} 
      Q ${x * 950} ${y * 500}, ${x * 1100} ${y * 600} 
      L ${x * 500} ${y * 700} 
      Q ${x * 300} ${y * 900}, ${x * 100} ${y * 1000} 
      Z
    `;

    console.log('path', `path(${dynamicPath})`);

    // gsap.to(frameElement, {
    //   duration: 0.2,
    //   clipPath: `path('${path}')`,
    //   ease: 'power2.out',
    // });
    setClipPathStyle(`path(${dynamicPath})`);
  };

  const handleMouseLeave = () => {
    const defaultPath = `
      M 894.467 228.945 
      L 894.467 228.945 
      Q 902.347 230.326 905.599 237.635 
      L 1038.54 536.435 
      Q 1041.79 543.744 1033.91 545.103 
      L 364.18 660.513 
      Q 356.296 661.872 355.751 653.89 
      L 320.367 136.214 
      Q 319.822 128.233 327.702 129.614 
      Z
    `;

    // gsap.to(frameRef.current, {
    //   duration: 0.3,
    //   clipPath: `path('${defaultPath}')`,
    //   ease: 'power2.inOut',
    // });
    setClipPathStyle(`path(${defaultPath})`);
  };

  //   console.log(clipPathStyle);

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className='flex size-full flex-col items-center py-10 pb-24'>
        <p className='font-general text-sm uppercase md:text-[10px]'>
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
              <div
                className='story-img-content'
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  clipPath: clipPathStyle,
                }}
              >
                <img
                  src='images/entrance.webp'
                  alt='entrace'
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
