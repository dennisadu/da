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
  't.n.',
]);

export const COLLABORATIONS = getTracksByIds([
  'kadnay',
  'protea',
  'budu-5hv',
  'blakyt',
]);

export const LIVE_CONCERTS = getTracksByIds([
  'amijazz-bb',
  'san-jose-winter-fest',
  'amijazz-quintet',
  'ny-sessions-train76k',
]);

export const LIVE_PERFORMANCE = getTracksByIds([
  'amijazzBb',
  'sanJoseWinterFest',
  'nySessionsTrain76k',
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
