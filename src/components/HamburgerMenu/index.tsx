'use client';

import { Fragment } from 'react';
import { clsxm } from '@/utils/clsxm';
import { PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';
import Link from 'next/link';
import { getNavLink } from '@/utils/getNavLink';
import { navigationItems } from '@/constants';
import { usePathname } from 'next/navigation';

export const HamburgerMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <div className='flex items-center sm:hidden'>
      <PopoverButton className='bg-gray-50 rounded-lg p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navyBlue-50'>
        <span className='sr-only'>Open main menu</span>
        <Bars3Icon
          className={clsxm('w-11 h-11 text-(--color-primary-100)', className)}
        />
      </PopoverButton>
      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <PopoverPanel
          focus
          className='absolute z-10 top-0 inset-x-0 transition transform origin-top-right lg:hidden'
        >
          <div
            className={clsxm(
              'flex flex-col',
              'shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden',
            )}
          >
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div className='text-[#454545] font-(family-name:--font-antonio) capitalize w-full text-[40px]'>
                <Link href='/' className='focus:outline-none'>
                  dennis adu
                </Link>
              </div>
              <div className='-mr-2'>
                <PopoverButton className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-100'>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </PopoverButton>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3 mt-6 flex flex-col gap-8 items-center uppercase font-semibold text-[18px]'>
              {navigationItems.map(({ title, href }) => (
                <Link
                  key={title}
                  href={getNavLink(href, pathname)}
                  className='mt-3 block px-3 py-1 rounded-md font-light  hover:text-gray-900 hover:bg-gray-50'
                >
                  {title}
                </Link>
              ))}
            </div>
            {/* <SocialLinks
              className='gap-4 flex items-center px-5 pb-3 mt-auto mb-9'
              iconClassName='fill-navyBlue-900'
              iconWrapperClassName='p-0'
            /> */}
          </div>
        </PopoverPanel>
      </Transition>
    </div>
  );
};
