import Image from 'next/image';
import heroImg from '@/../public/images/hero_img.jpg';
import { Button } from '../Button';
import { CONTACT_EMAIL } from '@/constants';

export const Hero = () => {
  return (
    <div>
      <div className='flex'>
        <h1 className='uppercase ~text-[4.06rem]/[12.5rem] text-primary-100 relative z-10 text-nowrap'>
          Dennis Adu
        </h1>
        <Button
          as='link'
          href={`mailto:${CONTACT_EMAIL}`}
          className='~mt-6/20 hidden sm:flex'
        >
          Contact
        </Button>
      </div>

      <div className='flex justify-center ~-mt-6/14 relative'>
        <Image
          className='rounded-[clamp(20px,5vw,80px)] ~w-[16.938rem]/[48rem]  h-auto'
          alt='Dennis Adu'
          src={heroImg}
          width={768}
          height={515}
          priority
          placeholder='blur'
        />
        <Button
          as='link'
          href={`mailto:${CONTACT_EMAIL}`}
          className='~mt-6/20 absolute ~/sm:~right-1/12 -bottom-3 sm:hidden'
        >
          Contact
        </Button>
      </div>
    </div>
  );
};
