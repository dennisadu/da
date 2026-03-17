import { MusicPageSection } from '@/components/MusicPageSection';
import Image from 'next/image';
import quintetNYC from '@/../public/images/dennis_quintet_ny.png';
import septetNaHAti from '@/../public/images/dennis-septet-na-hati.png';
import { INFLUENCES, SUNLIGHT_ABOVE_THE_SKY } from '@/constants/musicList';
import { Contact } from '@/components/Contact';
import { SocialMedia } from '@/components/SocialMedia';

export default function Music() {
  return (
    <div className='~mt-[2.5rem]/[5.5rem]'>
      <MusicPageSection
        className='~px-[1rem]/[4.5rem]'
        title='Influences'
        img='/images/Influences-374x374.png'
        alt='Influences album cover'
        musicItems={INFLUENCES}
        paragraphs={[
          '“Influences” – Dennis Adu’s debut album recorded in New York in 2016, featuring some of the finest Ukrainian and American musicians.',
          'Dennis leads on trumpet and flugelhorn, joined by Michael Dease, Andrew Gould, Dmitry Aleksandrov, Pavlo Lytvynenko, Linda May Han Oh and Mike Karn.',
          'The album captures Dennis’s most heartfelt and meaningful works – a musical diary of transformation shaped by the people and places that influenced his artistic journey.',
          'Recorded and mixed by Paul Wickliffe at Skyline Productions Studio in New Jersey',
        ]}
      />
      <div className='~h-6/20' />
      <Image
        src={quintetNYC}
        alt='Dennis Adu Quintet NYC'
        priority
        placeholder='blur'
        className='object-cover ~w-[23.438rem]/[90rem] ~h-[13.063rem]/[50.063rem]'
      />
      <div className='~h-[3.5rem]/[8rem]' />
      <MusicPageSection
        className='~px-[1rem]/[4.5rem]'
        title='Sunlight Above The Sky'
        img='/images/sunlight-374x374.png'
        alt='Sunlight Above The Sky album cover'
        musicItems={SUNLIGHT_ABOVE_THE_SKY}
        paragraphs={[
          '“Sunlight Above the Sky” - a septet album recorded in 2021, brings together some of the finest Ukrainian and American musicians.',
          'Dennis leads on trumpet and flugelhorn, joined by Lucas Pino, Borys Mogylevsky, Alexander Charkin, Glenn Zaleski, Alexander Malyshev, Oleksandr Yemets, Pavlo Halytskyi.',
          'The album shines with depth and openness - a conversation between cultures, moods, and sounds that reflect Dennis’s evolving musical world.',
          'Recorded at Na Hati Records in Kyiv and mixed by Paul Wickliffe at Skyline Productions in New Jersey',
        ]}
      />
      <div className='~h-6/20' />
      <Image
        src={septetNaHAti}
        alt='Dennis Adu Septet Na Hati Records'
        priority
        placeholder='blur'
        className='object-cover ~w-[23.438rem]/[90rem] ~h-[13.063rem]/[50.063rem]'
      />

      <Contact className='~px-[1rem]/[4.5rem] ~mt-[3.5rem]/[8rem]' />
      <SocialMedia className='~px-[1rem]/[4.5rem] ~my-[3.5rem]/[8rem]' />
    </div>
  );
}
