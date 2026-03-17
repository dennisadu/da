import Image from 'next/image';
import quintetKyiv from '@/../public/images/dennis_quintet_kyiv.png';
import dennisYana from '@/../public/images/dennis-yana.png';
import dennisBb from '@/../public/images/dennis_adu_bigband.png';
import { SectionWithExamples } from '@/components/SectionWithExamples';
import {
  DENNIS_ADU_AND_YANA,
  DENNIS_ADU_BB,
  DENNIS_ADU_QUINTET_KYIV,
} from '@/constants/musicList';
import { Contact } from '@/components/Contact';
import { SocialMedia } from '@/components/SocialMedia';

export default function Projects() {
  return (
    <div className='~mt-[2.5rem]/[5.5rem]'>
      <Image
        src={quintetKyiv}
        alt='Dennis Adu Quintet Kyiv Closer'
        priority
        placeholder='blur'
        className='object-cover'
      />
      <SectionWithExamples
        className='~px-[1rem]/[4.5rem] xl:pr-4 ~mt-8/14'
        headerClassName='justify-between'
        title='Dennis Adu Quintet'
        paragraphs={[
          'Dennis Adu Quintet is one of the leading jazz ensembles in Ukraine. Formed around 2012 by Dennis Adu.',
          'Their music is a mix of original compositions and reimagined standards shaped by Dennis. They blend modern jazz with deep emotional storytelling that reflects both the Ukrainian spirit and global jazz traditions .',
          'BAND MEMBERS',
          [
            'Dennis Adu - trumpet',
            'Boris Mogylevsky - alto saxophone',
            'Olexander Malyshev - piano',
            'Oleksandr Yemets - double bass',
            'Pavlo Halytskiy - drums',
          ],
        ]}
        workExamples={DENNIS_ADU_QUINTET_KYIV}
      />
      <div className='~mt-[3.5rem]/[8rem]'></div>
      <Image
        src={dennisYana}
        alt='Dennis Adu & Yana Vialova'
        priority
        placeholder='blur'
        className='object-cover'
      />
      <SectionWithExamples
        className='~px-[1rem]/[4.5rem] xl:pr-2 ~mt-8/14'
        headerClassName='justify-between'
        title='Dennis Adu Quartet & Yana Vialova'
        paragraphs={[
          'Dennis Adu Quartet & Yana Vialova is a creative tandem of two jazz musicians, formed in 2022.',
          'Their music moves freely between jazz, soul and R&B. Blending elegant phrasing, warm acoustic textures and emotional storytelling.',
          'Each performance is a vivid musical dialogue between two strong artistic voices – a meeting of sound and feeling that brings the timeless spirit of live jazz to life.',
          'BAND MEMBERS',
          [
            'Dennis Adu - trumpet',
            'Yana Vialova - vocal',
            'Olexander Malyshev - piano',
            'Oleksandr Yemets - double bass',
            'Pavlo Halytskiy - drums',
          ],
        ]}
        workExamples={DENNIS_ADU_AND_YANA}
      />
      <div className='~mt-[3.5rem]/[8rem]'></div>
      <Image
        src={dennisBb}
        alt='Dennis Adu Big Band'
        priority
        placeholder='blur'
        className='object-cover'
      />
      <SectionWithExamples
        className='~px-[1rem]/[4.5rem] xl:pr-2 ~mt-8/14'
        headerClassName='justify-between'
        title='Dennis Adu Big Band'
        paragraphs={[
          'Dennis Adu Big Band - jazz orchestra, led by Dennis Adu and brings together Ukraine’s finest jazz voices. Founded in 2014.',
          'Specialising in hard-bop and modern big-band jazz, Big Band delivers powerful arrangements, rich horn textures and a commanding live presence.',
          'Each performance is both a tribute to classic jazz tradition and a bold expression of contemporary creativity.',
        ]}
        workExamples={DENNIS_ADU_BB}
      />
      <Contact className='~px-[1rem]/[4.5rem] ~mt-[3.5rem]/[8rem]' />
      <SocialMedia className='~px-[1rem]/[4.5rem] ~my-[3.5rem]/[8rem]' />
    </div>
  );
}
