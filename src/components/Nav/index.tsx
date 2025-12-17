'use client';

import { navigationItems } from '@/constants/';
import { clsxm } from '@/utils/clsxm';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='hidden sm:flex justify-between items-center'>
      {navigationItems.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className={clsxm(
            href === pathname && 'text-primary-100',
            '~text-[1.125rem]/[1.625rem] font-bold uppercase',
            'relative pb-1',
            href !== pathname && [
              'after:content-[""] after:absolute after:bottom-0 after:left-0',
              'after:w-0 after:h-[2px] after:bg-primary-100',
              'after:transition-all after:duration-300 after:ease-in-out',
              'hover:after:w-full hover:text-primary-100',
            ],
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
