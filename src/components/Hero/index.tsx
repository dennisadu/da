import Image from 'next/image';

export const Hero = () => {
  return (
    <div>
      <h1 className='uppercase text-fluid-[65px]/[200px] text-primary-100 relative z-10 text-nowrap'>
        Dennis Adu
      </h1>
      <div className='flex justify-center -mt-fluid-6/[56px]'>
        <Image
          className='rounded-[clamp(20px,5vw,80px)] w-fluid-[271px]/[768px]  h-auto'
          alt='Dennis Adu'
          src='/images/hero_img.jpg'
          width={768}
          height={515}
          priority
        />
      </div>
      <div className='h-px mt-14 bg-gray-60 w-full' />
    </div>
  );
};
