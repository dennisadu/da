import { MusicList } from '@/types';

export const ORIGINAL_MUSIC = [
  { id: 'climb', title: 'Climb To The Nuwara Eliya', img: 'influences' },
  { id: 'sunlight', title: 'Sunlight Above The Sky', img: 'sunlight' },
  {
    id: 'contemplate',
    title: 'Just Stay and Contemplate',
    img: 'influences',
  },
  { id: 't.n.', title: 'T. N.', img: 'sunlight' },
];

export const COLLABORATIONS = [
  { id: 'kadnay', title: 'KADNAY - Тобі', img: 'kadnay-tobi' },
  { id: 'protea', title: 'SI Process & Dennis Adu - Protea', img: 'protea' },
  { id: 'budu-5hv', title: "Ще п'ять хвилин - Буду", img: 'budu-5hv' },
  { id: 'blakyt', title: 'Oy vershe, miy vershe', img: 'blakyt' },
];

export const LIVE_CONCERTS = [
  {
    id: 'amijazz-bb',
    title: 'Am I Jazz? - Dennis Adu Big Band',
    img: 'amijazz-bb',
  },
  {
    id: 'san-jose-winter-fest',
    title: 'Dennis Adu at the San Jose Jazz',
    img: 'san-jose-winter-fest',
  },
  {
    id: 'amijazz-quintet',
    title: 'Am I Jаzz? – Dennis Adu Quintet',
    img: 'amijazz-quintet',
  },
  {
    id: 'ny-sessions-train76k',
    title: 'NY Sessions - Train#76k by Dennis Adu',
    img: 'ny-sessions-train76k',
  },
];

export const MUSIC_LIST: MusicList[] = [
  {
    id: 'original',
    title: 'Original Music',
    items: ORIGINAL_MUSIC,
  },
  {
    id: 'collaborations',
    title: 'Collaborations',
    items: COLLABORATIONS,
  },
  {
    id: 'live',
    title: 'Live Concerts',
    items: LIVE_CONCERTS,
  },
];
