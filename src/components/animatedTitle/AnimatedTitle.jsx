/* eslint-disable react/prop-types */

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0, 0,0) rotateX(0deg) rotateY(0deg',
        ease: 'Power2.inOut',
        stagger: 0.05,
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`${containerClass} animated-title`} ref={titleRef}>
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
