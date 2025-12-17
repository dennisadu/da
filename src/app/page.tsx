import { Biography } from '@/components/Biography';
import { Hero } from '@/components/Hero';
import { SocialMedia } from '@/components/SocialMedia';

export default function Home() {
  return (
    <div>
      <Hero />
      <Biography />
      <div className='h-32' />
      <SocialMedia />
      <div className='h-32' />
    </div>
  );
}
