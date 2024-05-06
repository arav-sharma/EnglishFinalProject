import React from 'react';

const Footer: React.FC = () => {
  return (
   <div className="rounded-3xl sticky bottom-0">
     <footer className="bg-gray-700/80 sticky bottom-0 rounded-lg shadow m-4 w-1/3 text-center mx-auto">
        <div className="bg-gray-700 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between rounded-lg">
          
          <span className="bg-gray-700 text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2024 <a href="https://gpa-allenhs.com/" className="bg-gray-700 hover:underline">Nexus</a> - All Rights Reserved
          </span>

          <ul className="bg-gray-700 flex flex-wrap items-center mt-3 text-sm text-gray-200 dark:text-gray-200 sm:mt-0">
          <li className="bg-gray-700">
              <a href="/privacy-policy" className="bg-gray-700 text-gray-200 hover:underline me-4 md:me-6 ml-20">Privacy Policy</a>
            </li>
            <li className="bg-gray-700">
              <a href="/faq" className="bg-gray-700 text-gray-200 hover:underline me-4 md:me-6">FAQ</a>
            </li>
          </ul>

        </div>
      </footer>
   </div>
  );
};

export default Footer;
