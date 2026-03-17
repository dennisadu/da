import { AboutSection } from '../AboutSection';

export const Biography = () => {
  return (
    <AboutSection
      className='mt-14'
      title='biography'
      paragraphs={[
        `Musician, trumpet player, composer and bandleader. Dennis Adu is one
                of Ukraine’s most distinctive jazz voices and a dedicated educator
                based in Kyiv.`,
        `Having performed with Gregory Porter, Curtis Fuller, Steve Slagle,
                Javon Jackson, Larry Willis, Kuumba Frank Lacy and Seamus Blake.`,
        `He has released two albums — “Influences” and “Sunlight Above the
                Sky” - showcasing his signature blend of modern jazz and soulful
                expression.`,
        `Dennis continues to shape the sound of contemporary improvised music
                - performing worldwide and sharing his music across cultures,
                generations and musical worlds.`,
      ]}
    />
  );
};
