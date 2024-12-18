import { useRef } from 'react';
import { useState } from 'react';
import Button from '../button/Button';
import { TiLocationArrow } from 'react-icons/ti';

const Hero = () => {
  // track which index video is currently playing
  const [currentIndex, setCurrentIndex] = useState(1);
  // track if the user has clicked minivideo thumbnail
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // refers to number of videos loaded
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;

  // target nextvideo dom element
  const nextVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoPlayer = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSource = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prevLoadedVidoes) => prevLoadedVidoes + 1);
  };

  return (
    <div className='relative h-dvh w-screen'>
      <div
        id='video-frame'
        className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'
      >
        <div>
          <div className='mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div
              onClick={handleMiniVideoPlayer}
              className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100'
            >
              <video
                ref={nextVideoRef}
                src={getVideoSource(upcomingVideoIndex)}
                loop
                muted
                id='current-video'
                className='size-64 origin-center scale-150 object-cover object-center'
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSource(currentIndex)}
            loop
            muted
            id='next-video'
            className='absolute-center absolute invisible z-20 size-64 object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSource(currentIndex)}
            autoPlay
            loop
            muted
            className='absolute left-0 top-0 size-full object-cover object-center'
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 uppercase'>
          G<b>A</b>MING
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-100'>
              redefi<b>n</b>e
            </h1>

            <p className='mb-5 max-w-64 font-robert text-blue-100'>
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id='watch-trailer'
              title='Watch trailer'
              leftIcon={<TiLocationArrow />}
              containerClass='bg-yellow-300 flex-center gap-1'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
