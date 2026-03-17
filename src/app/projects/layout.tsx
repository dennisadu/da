import { Layout } from '@/components/Layout';
import { PropsWithChildren } from 'react';

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Layout className='px-0' headerClassName='~px-[1rem]/[4.5rem]'>
      {children}
    </Layout>
  );
}
