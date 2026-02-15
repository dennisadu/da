import { Contact } from '@/components/Contact';
import { SectionWithExamples } from '@/components/SectionWithExamples';
import { SocialMedia } from '@/components/SocialMedia';
import {
  ARRANGEMENTS,
  LIVE_PERFORMANCE,
  RECORDING,
} from '@/constants/musicList';

export default function Services() {
  return (
    <div className='flex flex-col ~gap-14/32 ~mt-[2.5rem]/[5.5rem] ~mb-14/32'>
      <SectionWithExamples
        title='Live Performance'
        paragraphs={[
          'With over 30 years of experience on the trumpet, Dennis Adu has performed with world-class artists such as Gregory Porter, Curtis Fuller, and Seamus Blake.',
          'A versatile performer, he moves freely across genres - from jazz to pop and hip-hop, bringing distinctive tone, soulful improvisation, and unmatched energy that elevate every live show.',
        ]}
        workExamples={LIVE_PERFORMANCE}
      />
      <SectionWithExamples
        title='Recording'
        paragraphs={[
          'Trusted by leading artists such as Okean Elzy, TNMK, Maneken and Kadnay. Dennis offers professional live trumpet and full horn section recording for your tracks.',
          'His performances add warmth, energy, and character - from expressive solos to powerful brass arrangements - bringing a world-class jazz touch to any production.',
        ]}
        workExamples={RECORDING}
        className='self-end'
      />
      <SectionWithExamples
        title='Arrangements'
        paragraphs={[
          'Having studied and refined his craft in New York and collaborated with world-class artists, Dennis brings international expertise to every arrangement.',
          'Professional jazz arrangements for big bands, ensembles and solo projects – combining rich harmony, clear form and emotional depth.',
        ]}
        workExamples={ARRANGEMENTS}
      />
      <SectionWithExamples
        title='Private lessons'
        paragraphs={[
          'With over 15 years of teaching experience, Dennis offers private lessons in trumpet, jazz harmony, arranging and live performance.',
          'Having taken lessons from Mike Rodriguez, Joe Magnarelli and Eckhard Baur, he brings authentic New York jazz methodology into every session and helps musicians of all levels develop technique, creativity and confidence.',
          'Lessons are available online or offline in Kyiv.',
        ]}
        className='self-end'
      />
      <Contact />
      <SocialMedia />
    </div>
  );
}
