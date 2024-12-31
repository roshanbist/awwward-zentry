/* eslint-disable react/prop-types */

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const AnimateVideoThumbnail = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect();

    // Calculate X offset
    const xOffset = clientX - (rect.left + rect.width / 2);

    // Calculate Y offset
    const yOffset = clientY - (rect.top + rect.height / 2);

    if (isHovering) {
      gsap.to(sectionRef.current, {
        x: xOffset,
        y: yOffset,
        rotationY: xOffset / 2,
        rotationX: -yOffset / 2,
        transformPerspective: 500,
        duration: 1,
        ease: 'power1.out',
      });

      // Move the inner content in the opposite direction for a parallax effect
      gsap.to(contentRef.current, {
        x: -xOffset,
        y: -yOffset,
        duration: 1,
        ease: 'power1.out',
      });
    }
  };

  useEffect(() => {
    if (!isHovering) {
      gsap.to(sectionRef.current, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: 'power1.out',
      });

      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power1.out',
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='absolute z-50 size-full overflow-hidden rounded-lg cursor-pointer'
      style={{
        perspective: '500px',
      }}
    >
      <div
        ref={contentRef}
        className='origin-center rounded-lg'
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimateVideoThumbnail;
