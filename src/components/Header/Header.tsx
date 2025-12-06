'use client';

import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { HamburgerMenu } from '../HamburgerMenu';
import { Nav } from '../Nav';

const Header = () => {
  return (
    <Popover>
      <header className='w-full flex justify-end sm:block'>
        <Nav />
        <HamburgerMenu className='sm:hidden' />
      </header>
    </Popover>
  );
};

export default Header;
