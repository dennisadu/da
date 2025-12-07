'use client';

import { Fragment } from 'react';
import { clsxm } from '@/utils/clsxm';
import { PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { navigationItems } from '@/constants';
import { usePathname } from 'next/navigation';

export const HamburgerMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <div className='flex items-center sm:hidden'>
      <PopoverButton className='rounded-lg p-1 inline-flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-100'>
        <span className='sr-only'>Open main menu</span>
        <Bars3Icon
          className={clsxm(
            'w-11 h-11 text-gray-100 hover:text-primary-100',
            className,
          )}
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
              'shadow-md bg-white overflow-hidden',
            )}
          >
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div className='text-[#454545] font-(family-name:--font-antonio) capitalize w-full text-[40px]'>
                <Link href='/' className='focus:outline-none uppercase'>
                  dennis adu
                </Link>
              </div>
              <div className='-mr-2'>
                <PopoverButton className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-100'>
                  <span className='sr-only'>Close menu</span>
                  <Bars3Icon className='w-11 h-11 text-primary-100 hover:text-gray-100' />
                </PopoverButton>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3 mt-16 mb-[86px] flex flex-col gap-8 items-center uppercase font-semibold text-[18px]'>
              {navigationItems.map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className={clsxm(
                    {
                      'text-primary-100': href === pathname,
                    },
                    'w-full text-[18px] text-center mt-3 block px-3 py-1 rounded-md font-bold hover:text-primary-100 hover:bg-gray-50',
                  )}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </div>
  );
};
