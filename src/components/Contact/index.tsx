import { CONTACT_EMAIL } from '@/constants';
import { clsxm } from '@/utils/clsxm';
import Link from 'next/link';

export const Contact = ({ className }: { className?: string }) => {
  return (
    <div className={clsxm(className)}>
      <h1 className='~text-[2.5rem]/[4rem] uppercase'>Contact</h1>
      <Link
        href={`mailto:${CONTACT_EMAIL}`}
        target='_blank'
        rel='noopener noreferrer'
        className={clsxm(
          '~gap-4/6 ~mt-8/14',
          '~text-[1.125rem]/[1.625rem] font-bold uppercase',
          'transition-colors duration-300 ease-in-out',
          'hover:text-primary-100',
          'flex items-center before:hidden xs:before:flex before:content-[""] before:w-4 before:h-4 before:bg-current before:rounded-full before:mr-3',
        )}
      >
        {CONTACT_EMAIL}
      </Link>
      <div className='~mt-4/6 h-px bg-gray-60 w-full' />
    </div>
  );
};
