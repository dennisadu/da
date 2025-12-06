'use client';

import { PropsWithChildren } from 'react';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='app-container'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
