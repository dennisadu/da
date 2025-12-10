'use client';

import { PropsWithChildren } from 'react';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='px-fluid-4/[72px] pt-fluid-4/10'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
