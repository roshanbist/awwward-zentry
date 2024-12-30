/* eslint-disable react/prop-types */

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass, sectionId }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reset',
        },
      });

      titleAnimation.to(
        '.animated-word',
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
          ease: 'power2.inOut',
          stagger: 0.02,
        },
        0
      );
    }, titleRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      className={`${containerClass} animated-title`}
      ref={titleRef}
      id={sectionId ? sectionId : ''}
    >
      {title.split('<br />').map((line, index) => (
        <div
          key={index}
          className='animated-word px-12'
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ))}
    </div>
  );
};

export default AnimatedTitle;
