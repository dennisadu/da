'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [debugFontSize, setDebugFontSize] = useState('');
  const [debugWidth, setDebugWidth] = useState(0);

  useEffect(() => {
    const h1 = document.querySelector('h1[data-debug="hero"]');
    if (!h1) return;

    const computed = window.getComputedStyle(h1);
    setDebugFontSize(computed.fontSize);
    setDebugWidth(window.innerWidth);

    const onResize = () => {
      const c = window.getComputedStyle(h1);
      setDebugFontSize(c.fontSize);
      setDebugWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <div>
      <h1
        data-debug='hero'
        className='uppercase text-fluid-[65px]/[200px] text-primary-100 relative z-10 text-nowrap'
      >
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
      <div className='fixed bottom-2 left-2 z-50 text-xs bg-black/70 text-white px-2 py-1 rounded'>
        w: {debugWidth}px · font-size: {debugFontSize}
      </div>
      <div className='h-px mt-14 bg-gray-60 w-full' />
    </div>
  );
};
