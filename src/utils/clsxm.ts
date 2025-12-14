import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { withFluid } from '@fluid-tailwind/tailwind-merge';

export const twMerge = extendTailwindMerge({}, withFluid);

export const clsxm = (...classes: ClassValue[]) => twMerge(clsx(...classes));
