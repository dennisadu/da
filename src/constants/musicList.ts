import { MusicList, MusicItem } from '@/types';
import m from '@/data/music.json';

const getTracksByIds = (ids: string[]): MusicItem[] => {
  return ids
    .map((id) => m.find((track) => track.id === id))
    .filter((track): track is MusicItem => track !== undefined);
};

export const ORIGINAL_MUSIC = getTracksByIds([
  'climb',
  'sunlight',
  'contemplate',
  'tn',
]);

export const COLLABORATIONS = getTracksByIds([
  'kadnay',
  'protea',
  'budu5hv',
  'blakyt',
]);

export const LIVE_CONCERTS = getTracksByIds([
  'amijazzBb',
  'sanJoseWinterFest',
  'amijazzQuintet',
  'nySessionsTrain76k',
]);

export const LIVE_PERFORMANCE = getTracksByIds([
  'amijazzBb',
  'sanJoseWinterFest',
  'nySessionsTrain76k',
]);

export const RECORDING = getTracksByIds([
  'kadnay',
  'maneken-heavens',
  'protea',
]);

export const ARRANGEMENTS = getTracksByIds([
  'wayne-dennis-bb-stranded',
  'impressions-cheremshyna',
  'blakyt',
]);

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

export const INFLUENCES = getTracksByIds([
  'climb',
  'lebron',
  'contemplate',
  'angelica-eyes',
]);

export const SUNLIGHT_ABOVE_THE_SKY = getTracksByIds([
  'sunlight',
  'tn',
  'one-of-those-nights',
  'armageddon',
]);
