import { MUSIC_LIST } from '@/constants/musicList';
import { MusicItem } from '@/types';
import { clsxm } from '@/utils/clsxm';
import Image from 'next/image';
import Link from 'next/link';

const MusicItems = ({ id, title, img }: MusicItem) => {
  return (
    <div className='flex flex-col'>
      <div className='rounded-2xl overflow-hidden ~w-[3.5rem]/[15.5rem] ~h-[3.5rem]/[15.5rem]'>
        <Image
          src={`/images/${img}.png`}
          alt={title}
          width={248}
          height={248}
          priority
          className='w-full h-full object-cover scale-125'
        />
      </div>
      <h5 className='~text-[1rem]/[1.5rem] text-gray-80 text-wrap font-normal max-w-[15.5rem]'>
        {title}
      </h5>
    </div>
  );
};

export const Music = () => {
  return (
    <div>
      <h1 className='~text-[2.5rem]/[4rem] uppercase'>Music</h1>
      <div className='~mt-8/14 flex flex-col ~gap-[1.5rem]/[4.5rem]'>
        {MUSIC_LIST.map(({ id, title, items }, index) => (
          <div key={id}>
            <div className='flex justify-between'>
              <h4 className='~text-[1.125rem]/[1.75rem] uppercase'>{title}</h4>
              <Link
                href='/music'
                className={clsxm(
                  'text-primary-100 ~text-[1.125rem]/[1.625rem]',
                  [
                    'relative pb-1',
                    'after:content-[""] after:absolute after:bottom-0 after:left-0',
                    'after:w-0 after:h-[2px] after:bg-primary-60',
                    'after:transition-all after:duration-300 after:ease-in-out',
                    'hover:after:w-full hover:text-primary-100',
                  ],
                )}
              >
                more
              </Link>
            </div>
            <div
              className={clsxm('flex gap-9 mt-8', index % 2 && 'justify-end')}
            >
              {items.map((item) => (
                <MusicItems key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
