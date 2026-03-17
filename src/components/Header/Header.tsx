'use client';

import { Popover } from '@headlessui/react';
import { HamburgerMenu } from '../HamburgerMenu';
import { Nav } from '../Nav';
import { clsxm } from '@/utils/clsxm';
import { PropsWithClassName } from '@/types';

const Header = ({ className }: PropsWithClassName) => {
  return (
    <Popover>
      <header className={clsxm('w-full flex justify-end sm:block', className)}>
        <Nav />
        <HamburgerMenu className='sm:hidden' />
      </header>
    </Popover>
  );
};

export default Header;
