/* eslint-disable react/prop-types */

import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass, sectionId }) => {
  const titleRef = useRef(null);

  useGSAP(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: '100 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reset',
      },
    });

    titleAnimation.to('.animated-word', {
      opacity: 1,
      transform: 'translate3d(0, 0,0) rotateX(0deg) rotateY(0deg)',
      ease: 'Power2.inOut',
      stagger: 0.05,
    });
  });

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
