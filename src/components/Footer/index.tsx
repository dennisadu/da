import Image from 'next/image';
import footerBg from '@/../public/images/footer_bg.png';
import footerBgMobile from '@/../public/images/footer_bg_mobile.png';
import { clsxm } from '@/utils/clsxm';
import { CONTACT_EMAIL, SOCIAL_MEDIA } from '@/constants';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='relative w-full ~h-[20.125rem]/[48.313rem] mt-auto'>
      <Image
        src={footerBgMobile}
        alt='Dennis Adu'
        priority
        placeholder='blur'
        className='absolute object-cover ~w-[23.438rem]/[90rem] ~h-[20.125rem]/[48.313rem] sm:hidden'
      />
      <Image
        src={footerBg}
        alt='Dennis Adu'
        priority
        placeholder='blur'
        className='absolute object-cover ~w-[23.438rem]/[90rem] ~h-[20.125rem]/[48.313rem] hidden sm:block'
      />
      <div
        className={clsxm(
          'flex flex-col h-full',
          'relative z-10 ~px-[1rem]/[4.5rem] ~py-6/14',
        )}
      >
        <div className='~mt-3/6 flex justify-between'>
          <h2
            className={clsxm(
              'uppercase ~text-[4.06rem]/[12.5rem] text-primary-60 font-semibold',
              'flex flex-col ~tracking-[-0.125rem]/[0rem] leading-none ~gap-7/16',
            )}
          >
            <span>Dennis</span>
            <span>Adu</span>
          </h2>
          <div
            className={clsxm(
              'text-gray-10 mt-1 md:mt-auto text-right md:text-left',
              'flex flex-col md:flex-row md:gap-10',
            )}
          >
            <div className='md:order-1'>
              <p className='text-nowrap uppercase text-gray-40 ~text-[1.125rem]/[1.625rem] font-bold'>
                Social Media
              </p>
              <ul className='flex flex-col ~gap-[0.5rem]/[1rem] ~mt-2/6 ~text-[1rem]/[1.625rem] text-gray-10 uppercase font-normal md:font-bold'>
                {SOCIAL_MEDIA.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href} target='_blank' rel='noopener noreferrer'>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-8 md:mt-auto'>
              <p className='uppercase text-gray-40 ~text-[1.125rem]/[1.625rem] font-bold'>
                Contact
              </p>
              <div className='~mt-2/6'>
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='~mt-2/6 ~text-[1rem]/[1.625rem] text-gray-10 uppercase font-normal md:font-bold'
                >
                  {CONTACT_EMAIL}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto mt-auto text-gray-10 ~text-[1rem]/[1.625rem]'>
          © {new Date().getFullYear()} Dennis Adu
        </div>
      </div>
    </footer>
  );
};
