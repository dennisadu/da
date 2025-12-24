import { MUSIC_LIST } from '@/constants/musicList';
import { MusicItem } from '@/types';
import { clsxm } from '@/utils/clsxm';
import Image from 'next/image';
import Link from 'next/link';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const MusicItemCard = ({
  item: { id, title, img },
  orientation = 'vertical',
}: {
  item: MusicItem;
  orientation?: 'horizontal' | 'vertical';
}) => {
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  return (
    <Link
      className={clsxm(
        'group flex flex-col items-center',
        isHorizontal && ['flex-row', 'gap-4'],
      )}
      href='/music'
    >
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
      <h5
        className={clsxm(
          '~text-[1rem]/[1.5rem] text-gray-80 text-wrap font-normal',
          'group-hover:text-primary-100',
          isVertical && ['~w-[3.5rem]/[15.5rem] mt-[1rem]'],
        )}
      >
        {title}
      </h5>
    </Link>
  );
};

export const Music = () => {
  return (
    <div>
      <h1 className='~text-[2.5rem]/[4rem] uppercase'>Music</h1>
      <div className='~mt-8/14'>
        <div className='hidden md:flex flex-col ~gap-[1.5rem]/[4.5rem]'>
          {MUSIC_LIST.map(({ id, title, items }, index) => (
            <div
              key={id}
              className={clsxm('flex w-full', index % 2 && 'justify-end')}
            >
              <div className={clsxm('flex flex-col w-fit')}>
                <div className='flex justify-between'>
                  <h4 className='~text-[1.125rem]/[1.75rem] uppercase'>
                    {title}
                  </h4>
                  <Link
                    href='/music'
                    className={clsxm(
                      'text-primary-100 ~text-[1.125rem]/[1.625rem]',
                      [
                        'relative pb-1',
                        'after:content-[""] after:absolute after:bottom-0 after:left-0',
                        'after:w-0 after:h-[2px] after:bg-primary-60',
                        'after:transition-all after:duration-300 after:ease-in-out',
                        'after:w-full hover:after:bg-primary-100',
                      ],
                    )}
                  >
                    more
                  </Link>
                </div>
                <div className={clsxm('flex ~gap-3/9 mt-8')}>
                  {items.map((item) => (
                    <MusicItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='md:hidden flex flex-col gap-6'>
          {MUSIC_LIST.map(({ id, title, items }) => (
            <Disclosure key={id} as='div'>
              <DisclosureButton className='group flex w-full items-center justify-between'>
                <h4 className='~text-[1.125rem]/[1.75rem] uppercase'>
                  {title}
                </h4>
                <ChevronDownIcon className='size-11 fill-primary-100 group-data-[closed]:fill-primary-100 group-data-[open]:fill-gray-60 group-data-[open]:rotate-180 transition-all duration-200' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2'>
                <div className={clsxm('flex flex-col ~gap-3/9 mt-8')}>
                  {items.map((item) => (
                    <MusicItemCard
                      key={item.id}
                      item={item}
                      orientation='horizontal'
                    />
                  ))}
                </div>
                <div className='h-5'/>
                <Link
                  href='/music'
                  className={clsxm(
                    'text-primary-100 ~text-[1.125rem]/[1.625rem]',
                    [
                      'relative pb-1',
                      'after:content-[""] after:absolute after:bottom-0 after:left-0',
                      'after:w-0 after:h-[2px] after:bg-primary-60',
                      'after:transition-all after:duration-300 after:ease-in-out',
                      'after:w-full hover:after:bg-primary-100',
                    ],
                  )}
                >
                  more
                </Link>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};
