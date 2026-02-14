import { CONTACT_EMAIL } from '@/constants';
import { Button } from '../Button';

export const LivePerformance = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row sm:items-center sm:gap-6'>
        <h3 className='~text-[2.5rem]/[4rem] uppercase'>Live Performance</h3>
        <Button
          as='link'
          href={`mailto:${CONTACT_EMAIL}`}
          className='hidden sm:flex sm:mt-2 w-full sm:~w-[8rem]/[15rem] bg-transparent border-2 border-primary-60 text-primary-60'
        >
          Contact
        </Button>
      </div>
      <div className='~mt-[1rem]/[1.5rem] ~text-[1rem]/[1.625rem] text-gray-100 flex flex-col gap-4'>
        <p>
          With over 30 years of experience on the trumpet, Dennis Adu has
          performed with world-class artists such as Gregory Porter, Curtis
          Fuller, and Seamus Blake.
        </p>
        <p className='mt-4'>
          A versatile performer, he moves freely across genres - from jazz to
          pop and hip-hop, bringing distinctive tone, soulful improvisation, and
          unmatched energy that elevate every live show.
        </p>
      </div>
      <Button
        as='link'
        href={`mailto:${CONTACT_EMAIL}`}
        className='sm:hidden flex mt-6 w-full sm:~w-[8rem]/[15rem] bg-transparent border-2 border-primary-60 text-primary-60'
      >
        Contact
      </Button>
    </div>
  );
};
