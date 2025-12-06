'use client';

import { navigationItems } from '@/constants/';
import { getNavLink } from '@/utils/getNavLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='hidden sm:flex justify-between items-center'>
      {navigationItems.map(({ title, href }) => (
        <Link key={title} href={getNavLink(href, pathname)}>
          {title}
        </Link>
      ))}
    </nav>
  );
};
