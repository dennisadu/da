import { PropsWithChildren } from 'react';
import Header from '../Header';
import { Footer } from '../Footer';
import { clsxm } from '@/utils/clsxm';

interface LayoutProps extends PropsWithChildren {
  className?: string;
  headerClassName?: string;
}

export const Layout = ({
  children,
  className,
  headerClassName,
}: LayoutProps) => {
  return (
    <div className='app-container min-h-screen flex flex-col'>
      <div className={clsxm('~px-[1rem]/[4.5rem] ~pt-4/10', className)}>
        <Header className={headerClassName} />
        {children}
      </div>
      <Footer />
    </div>
  );
};
