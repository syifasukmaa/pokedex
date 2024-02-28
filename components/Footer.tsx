'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const url = usePathname();
  const urlShouldButton = url === '/';

  return (
    <footer
      className={`bottom-0 left-1/2 transform -translate-x-1/2 dark:bg-gray-900 ${
        urlShouldButton ? 'absolute bottom-3 md:-bottom-1 lg:bottom-0' : 'relative'
      }`}
    >
      <div className='w-full text-center min-w-screen-2xl px-4 md:py-5 lg:pt-0 lg:pb-5'>
        <span className='whitespace-nowrap text-sm text-black dark:text-gray-400'>
          © 2024
          <a
            href='https://instagram.com/syifasukmaa'
            className='hover:underline'
          >
            Pokede07
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
