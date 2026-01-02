import { PropsWithChildren } from 'react';
import Header from '../Header';
import { Footer } from '../Footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='app-container'>
      <div className='~px-[1rem]/[4.5rem] ~pt-4/10'>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
