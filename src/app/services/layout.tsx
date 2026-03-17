import { Layout } from '@/components/Layout';
import { PropsWithChildren } from 'react';

export default function PageLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
