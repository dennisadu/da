import Image from 'next/image';
import { AboutSection } from '../AboutSection';
import Link from 'next/link';
import { MusicItem, PropsWithClassName } from '@/types';
import { clsxm } from '@/utils/clsxm';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import influences from '@/../public/images/influences-374x374.png';

interface MusicPageSectionProps extends PropsWithClassName {
  title?: string;
  img?: string | StaticImport;
  alt?: string;
  musicItems?: MusicItem[];
  paragraphs?: string[];
}

export const MusicPageSection = ({
  title,
  img = influences,
  alt = 'Influences album cover',
  musicItems,
  paragraphs,
  className,
}: MusicPageSectionProps) => {
  return (
    <div className={clsxm('flex flex-col', className)}>
      <div className='flex flex-col max-w-[870px] sm:mx-auto'>
        <div className='sm:px-4'>
          <div className='~text-[1rem]/[1.625rem] text-gray-100'>album</div>
          <h1 className='~text-[2.5rem]/[4rem] uppercase text-gray-80'>
            {title}
          </h1>
        </div>
        <div className='~mt-[1.5rem]/[2rem] flex flex-col sm:flex-row'>
          <div className='~w-[12.438rem]/[23.375rem] mx-auto'>
            <Image
              src={img}
              alt={alt}
              width={374}
              height={374}
              priority
              placeholder='blur'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='pt-3 pb-6'>
            <ul className='sm:px-6 ~text-[1rem]/[1.625rem] flex flex-col justify-between h-full gap-6 sm:gap-0'>
              {musicItems?.map(({ id, title, href }) => (
                <li key={id} className='flex items-center'>
                  <Link
                    className='flex items-center ~gap-8/6 hover:text-primary-100 transition-colors'
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='/play.svg'
                      alt='Play icon'
                      width={24}
                      height={24}
                      className='flex-shrink-0'
                    />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AboutSection paragraphs={paragraphs} />
    </div>
  );
};
