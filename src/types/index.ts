export type Nullable<T> = T | null;

export interface PropsWithClassName {
  className?: string;
}

export interface LinkItem {
  title: string;
  href: string;
}

export interface Item {
  id: string;
  title: string;
}

export interface MusicItem extends Item {
  img: string;
  href: string;
}

export interface MusicList extends Item {
  items: MusicItem[];
}
