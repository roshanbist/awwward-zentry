import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TiLocationArrow } from 'react-icons/ti';

import TriangleLoader from '../loader/TriangleLoader';
import Button from '../ui/Button';
import AnimateVideoThumbnail from '../animatedVideoThumbnail/AnimateVideoThumbnail';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(1);

  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;

  const nextVideoRef = useRef(null);

  const handleMiniVideoPlayer = () => {
    setHasClicked(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((currentIndex % totalVideos) + 1);
  };

  const getVideoSource = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prevLoadedVidoes) => prevLoadedVidoes + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set('#next-video', {
          visibility: 'visible',
        });

        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: () => nextVideoRef.current.play(),
          onComplete: () => {
            setPrevIndex(currentIndex);
          },
        });

        gsap.from('#current-video', {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.8,
          ease: 'power1.inOut',
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 76% 0, 90% 85%, 0 100%)',
      borderRadius: '0% 0% 10% 0%',
    });

    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  return (
    <div className='relative h-dvh w-screen'>
      {isLoading && <TriangleLoader />}
      <div
        id='video-frame'
        className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'
      >
        <div>
          <div className='mask-clip-path absolute-center z-50 size-[22rem] overflow-hidden rounded-lg'>
            <AnimateVideoThumbnail>
              <div
                onClick={handleMiniVideoPlayer}
                className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
              >
                <video
                  ref={nextVideoRef}
                  src={getVideoSource((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id='current-video'
                  className='size-[22rem] origin-center scale-150 object-cover object-center'
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </AnimateVideoThumbnail>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSource(currentIndex)}
            loop
            muted
            id='next-video'
            className='absolute-center invisible z-20 size-[22rem] object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSource(prevIndex)}
            autoPlay
            loop
            muted
            className='absolute left-0 top-0 size-full object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className='special-font hero-heading absolute bottom-4 right-[4rem] z-40 text-blue-75 uppercase'>
          G<b>A</b>MING
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-[9.6rem] px-5 sm:px-16 max-w-[64rem] z-50'>
            <h1 className='special-font hero-heading text-blue-100'>
              redefi<b>n</b>e
            </h1>
            <p className='mb-5 max-w-[20] font-robert text-blue-100'>
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id='watch-trailer'
              title='Watch Trailer'
              leftIcon={<TiLocationArrow />}
              containerClass='bg-yellow-300'
            />
          </div>
        </div>
      </div>
      <h1 className='special-font hero-heading absolute bottom-4 right-[4rem] text-black uppercase'>
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
