import { Biography } from '@/components/Biography';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { MusicSection } from '@/components/MusicSection';
import { SocialMedia } from '@/components/SocialMedia';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Biography />
      <div className='h-32' />
      <SocialMedia />
      <div className='h-32' />
      <MusicSection />
      <div className='h-32' />
      <Contact />
      <div className='h-32' />
    </Layout>
  );
}
