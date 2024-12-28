/* eslint-disable react/prop-types */

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const BentoTilt = ({ children, className = '' }) => {
  const bentoElementRef = useRef(null);

  useGSAP(() => {
    // const tiltRef = gsap.timeline()
  })

  return (
    <div ref={bentoElementRef} className={className}>
      {children}
    </div>
  );
};

export default BentoTilt;
