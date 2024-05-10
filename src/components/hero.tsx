import React from 'react';

const Hero: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="m-auto w-full text-center md:w-7/12">
          <p className="m-auto my-5 w-10/12 text-sm font-light text-stone-400 dark:text-stone-400 md:text-base">
            May 14th, 2024
          </p>
          <h1 className="mb-10 font-title text-3xl font-bold text-stone-100 dark:text-white md:text-6xl mt-5">
            Artificial Intelligence in K-12 Education
          </h1>
          <p className="text-md m-auto w-10/12 text-stone-200 dark:text-stone-400 md:text-lg">
            A deep dive into the intergration of artifical intellgience in K-12 education and how that will shift the role of modern-day educators across the world.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/arav-sharma-2b3662297/" rel="noreferrer" target="_blank">
          <div className="my-8">
            <div className="relative inline-block h-8 w-8 overflow-hidden rounded-full align-middle md:h-12 md:w-12">
              <img alt="AS" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" className="duration-700 ease-in-out scale-100 blur-0"
                srcSet="/Images/ProfilePicture.jpeg"
                src="/Images/ProfilePicture.jpeg"
                style={{ color: 'transparent' }} />
            </div>
            <div className="text-md ml-3 inline-block align-middle dark:text-white md:text-lg">
              by <span className="font-semibold">Arav Sharma</span>
            </div>
          </div>
        </a>
        <div className="relative m-auto mb-10 w-full max-w-screen-lg overflow-hidden md:mb-20 md:h-150 md:w-5/6 md:rounded-2xl lg:w-2/3">
          <img alt="AI_ServerRoom" loading="eager" width="1200" height="675" decoding="async" data-nimg="1"
            className="h-full w-full object-cover duration-700 ease-in-out scale-100 blur-0 hover:scale-105"
            srcSet="/Images/DataCenter.jpeg"
            src="/Images/DataCenter.jpeg"
            style={{ color: 'transparent' }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
