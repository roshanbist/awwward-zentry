import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AnimatedTitle from '../animatedTitle/AnimatedTitle';
import Button from '../ui/Button';
import ImageClipBox from '../ui/ImageClipBox';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactContainerRef = useRef(null);
  const contactLeftTopImgRef = useRef(null);
  const contactLeftBottomImgRef = useRef(null);
  const contactRightTopImgRef = useRef(null);

  const contactTitle = `let's b<b>u</b>ild the <br /> new era of g<b>a</b>ming <br /> t<b>o</b>gether.`;

  useGSAP(() => {
    const topLeftImageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: contactContainerRef.current,
        start: '200 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reset',
      },
    });

    topLeftImageAnimation.from(contactLeftTopImgRef.current, {
      opacity: 0,
      y: -150,
      duration: 0.6,
      ease: 'power2.inOut',
    });
  });
  useGSAP(() => {
    const bottomLeftImageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: contactContainerRef.current,
        start: '200 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reset',
      },
    });

    bottomLeftImageAnimation.from(contactLeftBottomImgRef.current, {
      opacity: 0,
      y: 150,
      duration: 0.6,
      ease: 'power2.inOut',
    });
  });
  useGSAP(() => {
    const topRightImageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: contactContainerRef.current,
        start: '200 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reset',
      },
    });

    topRightImageAnimation.from(contactRightTopImgRef.current, {
      opacity: 0,
      y: 150,
      duration: 0.6,
      ease: 'power2.inOut',
    });
  });

  return (
    <div
      id='contact'
      className='py-20 px-8 md:px-16 md:py-28 relative z-10'
      ref={contactContainerRef}
    >
      <div className='bg-black rounded-lg relative overflow-hidden'>
        <div className='size-full relative max-w-[100rem] mx-auto px-8 py-32 md:px-28'>
          <div
            className='absolute left-8 xl:-left-20 top-0 hidden h-[18rem] w-72 overflow-hidden sm:block xl:w-96'
            ref={contactLeftTopImgRef}
          >
            <ImageClipBox
              src='/images/contact-1.webp'
              clipClass='contact-clip-path-1'
            />
          </div>
          <div
            className='absolute left-0 xl:-left-20 -bottom-[8rem] lg:bottom-0 hidden h-[18rem] w-[25rem] overflow-hidden sm:block lg:w-[35rem]'
            ref={contactLeftBottomImgRef}
          >
            <ImageClipBox
              src='/images/contact-2.webp'
              clipClass='contact-clip-path-2'
            />
          </div>

          <div className='flex flex-col items-center text-center'>
            <p className='mb-10 font-general text-sm uppercase text-blue-50'>
              Join Zentry
            </p>

            <AnimatedTitle
              title={contactTitle}
              containerClass='!font-black !leading-[.9] mb-12'
            />

            <Button
              title='contact us'
              containerClass='cursor-pointer bg-blue-50 py-6'
            />
          </div>
        </div>
      </div>
      <div className='outer-block absolute top-0 md:top-[4rem] size-full max-w-[100rem] mx-auto left-1/2 -translate-x-1/2'>
        <div
          className='absolute -top-[4rem] sm:top-[3rem] left-0 sm:left-auto right-0 max-sm:mx-auto w-60 sm:0 md:right-[2.5rem] xl:-right-[10.5rem] lg:top-[5.6rem] xl:w-[25rem]'
          ref={contactRightTopImgRef}
        >
          <ImageClipBox
            src='/images/swordman-partial.webp'
            clipClass='absolute md:scale-125'
          />
          <ImageClipBox
            src='/images/swordman.webp'
            clipClass='sword-man-clip-path md:scale-125'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
