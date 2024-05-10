import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="ease left-0 right-0 top-0 z-30 flex h-16 bg-black transition-all duration-150 dark:bg-black dark:text-white">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-center space-x-5 px-10 sm:px-20">
        <a className="flex items-center justify-center" href="/">
          <div className="inline-block h-8 w-8 overflow-hidden rounded-full align-middle">
            <img alt="Nexus" loading="lazy" width="40" height="40" decoding="async" data-nimg="1"
              srcSet="/Images/NexusLogo.png"
              src="/Images/NexusLogo.png"
              style={{ color: 'transparent' }} />
          </div>
          <span className="ml-3 inline-block truncate font-title font-medium">Nexus</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
