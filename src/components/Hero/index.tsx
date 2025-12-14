import Image from 'next/image';

export const Hero = () => {
  return (
    <div>
      <h1
        data-debug='hero'
        className='uppercase ~text-[4.06rem]/[12.5rem] text-primary-100 relative z-10 text-nowrap'
      >
        Dennis Adu
      </h1>
      <div className='flex justify-center ~-mt-6/14'>
        <Image
          className='rounded-[clamp(20px,5vw,80px)] ~w-[16.938rem]/[48rem]  h-auto'
          alt='Dennis Adu'
          src='/images/hero_img.jpg'
          width={768}
          height={515}
          priority
        />
      </div>
    </div>
  );
};
