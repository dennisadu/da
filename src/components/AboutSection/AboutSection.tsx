import { clsxm } from '@/utils/clsxm';

interface AboutSectionProps {
  title?: string;
  paragraphs?: string[];
  className?: string;
}

export const AboutSection = ({
  paragraphs,
  title = 'about',
  className,
}: AboutSectionProps) => {
  return (
    <div className={clsxm(className)}>
      <h3 className='font-helvetica text-gray-80 mb-2 pt-6 ~text-base/2xl sm:hidden'>
        {title}
      </h3>
      <div className='h-px sm:mt-14 mt-0 bg-gray-60 w-full' />
      <div className='flex ~gap-[1rem]/[16.938rem] pt-6'>
        <h3 className='font-helvetica text-gray-80 ~text-base/2xl hidden sm:block'>
          {title}
        </h3>
        <div className='~text-[1rem]/[1.625rem] text-gray-100 flex flex-col gap-4'>
          {paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
