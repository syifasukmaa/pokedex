'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NavbarItem {
  id: string;
  label: string;
}
const Navbar = () => {
  const navbarItems: NavbarItem[] = [
    { id: '/', label: 'Home' },
    {
      id: '/pokedex',
      label: 'Pokedex',
    },
    {
      id: '/legendaries',
      label: 'Legendaries',
    },
  ];

  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (itemId: string) => {
    router.push(itemId);
  };
  return (
    <nav className=' bg-third absolute top-0 left-0 w-full shadow-md border-gray-200 dark:bg-gray-900 z-50'>
      <div
        className={
          open
            ? 'min-w-screen-xl z-50 flex flex-wrap items-center justify-center md:justify-between mx-auto p-4'
            : 'min-w-screen-2xl z-50 flex flex-wrap items-center md:justify-between mx-auto p-4 justify-between md:py-4 md:px-16 xl:px-20 2xl:px-16'
        }
      >
        <a
          href='https://flowbite.com/'
          className='flex items-center justify-between space-x-3 rtl:space-x-reverse'
        >
          <Image
            src={'/img/logo_pokemon.svg'}
            className='mr-3 w-24 md:w-20 sm:h-9 z-50 justify-items-end'
            width={100}
            height={100}
            alt='Flowbite React Logo'
          />
        </a>
        {open ? (
          <button
            className='mr-5 md:hidden absolute right-0 z-50'
            onClick={() => setOpen(!open)}
          >
            <Image
              src={'/img/CloseBtn.svg'}
              width={50}
              height={50}
              alt='burger button'
              className='w-6'
            />
          </button>
        ) : (
          <button
            className='mr-5 md:hidden z-50'
            onClick={() => setOpen(!open)}
          >
            <Image
              src={'/img/BurgerBtn.svg'}
              width={50}
              height={50}
              alt='burger button'
              className='w-6'
            />
          </button>
        )}

        <div
          className={`${
            open ? 'w-full md:block md:w-auto fixed top-8 left-0 md:static ' : 'hidden md:flex'
          } bg-gradient-to-b from-[#F5DB13] to-[#F2B807] md:from-[#F5DB13] md:to-[#F5DB13] md:bg-third z-30 rounded-2xl shadow-lg md:shadow-none md:rounded-none`}
        >
          <ul className='font-medium flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 '>
            {navbarItems.map((items, index) => (
              <li
                key={index}
                className='block py-2 px-3 text-black md:bg-transparent md:p-0 group'
              >
                <button onClick={() => handleClick(items.id)}>{items.label}</button>
                <div className='group-hover:bg-black h-[1px] bg-transparent group-hover:animate-leftToRight transition-all'></div>
              </li>
            ))}
            <li className='block py-2 px-3 text-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 group'>
              <a href=''>Documentation</a>
              <div className='group-hover:bg-black h-[1px] bg-transparent group-hover:animate-leftToRight transition-all'></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
