import { useRef } from 'react';
import AnimatedTitle from '../animatedTitle/animatedTitle';
import Button from '../ui/Button';
import ImageClipBox from '../ui/ImageClipBox';

const Contact = () => {
  const contactLeftTopImgRef = useRef(null);
  const contactLeftBottomImgRef = useRef(null);
  const contactRightTopImgRef = useRef(null);

  const contactTitle = `let's b<b>u</b>ild the <br /> new era of g<b>a</b>ming <br /> t<b>o</b>gether.`;

  //   useGSAP(() => {});

  return (
    <div id='contact' className='py-20 px-8 md:px-16 md:py-28 relative z-10'>
      <div className='bg-black rounded-lg relative overflow-hidden'>
        <div className='size-full relative max-w-[100rem] mx-auto p-24 md:p-28 md:py-32'>
          <div
            className='absolute -left-20 top-0 hidden h-[18rem] w-72 overflow-hidden sm:block lg:w-96'
            ref={contactLeftTopImgRef}
          >
            <ImageClipBox
              src='/images/contact-1.webp'
              clipClass='contact-clip-path-1'
            />
          </div>
          <div
            className='absolute -left-20 bottom-0 hidden h-[18rem] w-72 overflow-hidden sm:block lg:w-[35rem]'
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

            <Button title='contact us' containerClass='mt-10 cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='outer-block absolute top-[4rem] size-full max-w-[100rem] mx-auto left-1/2 -translate-x-1/2'>
        <div
          className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:-right-[10.5rem] lg:top-[5.6rem] lg:w-[25rem]'
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
