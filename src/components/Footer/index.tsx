import Image from 'next/image';
import footerBg from '@/../public/images/footer_bg.png';
import { clsxm } from '@/utils/clsxm';

export const Footer = () => {
  return (
    <footer className='relative w-full ~h-[20.125rem]/[48.313rem]'>
      <Image
        src={footerBg}
        alt='Dennis Adu'
        priority
        placeholder='blur'
        className='absolute object-cover ~w-[23.438rem]/[90rem] ~h-[20.125rem]/[48.313rem]'
      />
      <div
        className={clsxm(
          'flex flex-col h-full',
          'relative z-10 ~px-[1rem]/[4.5rem] ~py-6/14',
        )}
      >
        <div className='mt-6 flex justify-between'>
          <h2
            className={clsxm(
              'uppercase ~text-[4.06rem]/[12.5rem] text-primary-60 font-semibold',
              'flex flex-col ~tracking-[-0.125rem]/[0rem] leading-none ~gap-7/16',
            )}
          >
            <span>Dennis</span>
            <span>Adu</span>
          </h2>
          <div className='text-gray-10 mt-auto'>
            <p className='uppercase text-gray-40 ~text-[1.125rem]/[1.625rem] font-bold'>
              Social Media
            </p>
            <ul className='flex flex-col ~gap-[0.5rem]/[1rem] mt-6 ~text-[1rem]/[1.625rem] text-gray-10 uppercase font-bold'>
              <li>instagram</li>
              <li>youtube</li>
              <li>facebook</li>
            </ul>
          </div>
        </div>
        <div className='mx-auto mt-auto text-gray-10 ~text-[1rem]/[1.625rem]'>
          © 2025 Dennis Adu
        </div>
      </div>
    </footer>
  );
};
