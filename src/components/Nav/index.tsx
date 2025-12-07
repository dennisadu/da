'use client';

import { navigationItems } from '@/constants/';
import { clsxm } from '@/utils/clsxm';
import { getNavLink } from '@/utils/getNavLink';
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
            {
              'text-primary-100': href === pathname,
            },
            'text-[26px] font-bold uppercase',
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
