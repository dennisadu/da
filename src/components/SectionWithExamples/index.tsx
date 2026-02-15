import { CONTACT_EMAIL } from '@/constants';
import { Button } from '../Button';
import { MusicItem } from '@/types';
import { MusicItemCard } from '../Music';
import { clsxm } from '@/utils/clsxm';

interface SectionWithExamplesProps {
  title: string;
  paragraphs: string[];
  workExamples?: MusicItem[];
  showContactButton?: boolean;
  className?: string;
}

export const SectionWithExamples = ({
  title,
  paragraphs,
  workExamples,
  showContactButton = true,
  className,
}: SectionWithExamplesProps) => {
  return (
    <div className={clsxm('max-w-[1107px]', className)}>
      <div className='flex flex-col sm:flex-row sm:items-center sm:gap-6'>
        <h3 className='~text-[2.5rem]/[4rem] uppercase'>{title}</h3>
        {showContactButton && (
          <Button
            as='link'
            href={`mailto:${CONTACT_EMAIL}`}
            className='hidden sm:flex sm:mt-2 w-full sm:~w-[8rem]/[15rem] bg-transparent border-2 border-primary-60 text-primary-60'
          >
            Contact
          </Button>
        )}
      </div>
      <div className='~mt-[1rem]/[1.5rem] ~text-[1rem]/[1.625rem] text-gray-100 flex flex-col gap-4'>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={index > 0 ? 'mt-4' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
      {workExamples && (
        <>
          <h4 className='font-helvetica uppercase ~mt-6/8 ~text-lg/[1.75rem]'>
            Work Examples
          </h4>
          <div className='flex flex-col sm:flex-row gap-3 mt-6'>
            {workExamples.map((m) => (
              <MusicItemCard
                key={m.id}
                item={m}
                orientation='horizontal'
                imageWrapperClassName='sm:~w-8/24 sm:~h-8/24 sm:~min-w-8/24 sm:~min-h-8/24'
              />
            ))}
          </div>
        </>
      )}
      {showContactButton && (
        <Button
          as='link'
          href={`mailto:${CONTACT_EMAIL}`}
          className='sm:hidden flex mt-6 w-full sm:~w-[8rem]/[15rem] bg-transparent border-2 border-primary-60 text-primary-60'
        >
          Contact
        </Button>
      )}
    </div>
  );
};
