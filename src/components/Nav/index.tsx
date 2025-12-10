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
            'text-fluid-[18px]/[26px] font-bold uppercase',
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
