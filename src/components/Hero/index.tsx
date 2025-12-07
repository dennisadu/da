import Image from 'next/image';

export const Hero = () => {
  return (
    <div>
      <h1 className='uppercase text-[clamp(65px,calc(65px+(200-65)*(100vw-375px)/(1440-375)),200px)] text-primary-100 relative z-10 text-nowrap'>
        Dennis Adu
      </h1>
      <div className='flex justify-center -mt-[clamp(24px,calc(24px+(56-24)*(100vw-375px)/(1440-375)),56px)]'>
        <Image
          className='rounded-[clamp(20px,5vw,80px)] w-[clamp(271px,calc(271px+(768-271)*(100vw-375px)/(1440-375)),768px)] h-auto'
          alt='Dennis Adu'
          src='/images/hero_img.jpg'
          width={768}
          height={515}
        />
      </div>
      <div className='h-px mt-14 bg-gray-60 w-full' />
    </div>
  );
};
