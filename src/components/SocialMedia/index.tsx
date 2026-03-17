import { SOCIAL_MEDIA } from '@/constants';
import { PropsWithClassName } from '@/types';
import { clsxm } from '@/utils/clsxm';
import Link from 'next/link';

export const SocialMedia = ({ className }: PropsWithClassName) => {
  return (
    <div className={clsxm(className)}>
      <h1 className='~text-[2.5rem]/[4rem] uppercase'>Social Media</h1>
      <ul className='~mt-8/14 [&>*:not(:first-child)]:~mt-4/6'>
        {SOCIAL_MEDIA.map(({ name, href }) => (
          <li
            key={name}
            className={clsxm(
              'flex flex-col ~gap-4/6',
              '~text-[1.125rem]/[1.625rem] font-bold uppercase',
              'transition-colors duration-300 ease-in-out',
              'hover:text-primary-100',
            )}
          >
            <Link
              className='flex items-center before:content-[""] before:w-4 before:h-4 before:bg-current before:rounded-full before:mr-3'
              href={href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {name}
            </Link>
            <div className='h-px bg-gray-60 w-full' />
          </li>
        ))}
      </ul>
    </div>
  );
};
