/* eslint-disable react/prop-types */

import { useRef, useState } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');

  const bentoElementRef = useRef();

  const handleMouseMove = (e) => {
    if (!bentoElementRef.current) {
      return;
    }

    const { left, top, width, height } =
      bentoElementRef.current.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * 5;
    const rotateY = (x - 0.5) * -5;

    const newTransform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.95)`;

    setTransformStyle(newTransform);
  };

  // console.log('transformStyle', transformStyle);

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <div
      ref={bentoElementRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        cursor: transformStyle ? 'grab' : '',
      }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
