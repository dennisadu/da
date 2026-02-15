import { MusicItem } from '@/types';
import { MusicItemCard } from '../Music';

export const WorkExamples = ({ data }: { data: MusicItem[] }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-3 mt-6'>
      {data.map((m) => (
        <MusicItemCard
          key={m.id}
          item={m}
          orientation='horizontal'
          imageWrapperClassName='sm:~w-8/24 sm:~h-8/24 sm:flex-grow'
        />
      ))}
    </div>
  );
};
