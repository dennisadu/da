import { PropsWithChildren } from 'react';
import Header from '../Header';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='app-container ~px-[1rem]/[4.5rem] ~pt-4/10'>
      <Header />
      {children}
    </div>
  );
};
