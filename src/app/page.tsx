import { Biography } from '@/components/Biography';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Music } from '@/components/Music';
import { SocialMedia } from '@/components/SocialMedia';

export default function Home() {
  return (
    <div>
      <Hero />
      <Biography />
      <div className='h-32' />
      <SocialMedia />
      <div className='h-32' />
      <Music />
      <div className='h-32' />
      <Contact />
      <div className='h-32' />
    </div>
  );
}
