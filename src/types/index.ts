export type Nullable<T> = T | null;

export interface PropsWithClassName {
  className?: string;
}

export interface LinkItem {
  title: string;
  href: string;
}

export interface Item {
  id: number | string;
  title: string;
}
