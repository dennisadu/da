import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Regex pattern to match Tailwind arbitrary values in square brackets.
 * Matches: [18px], [1rem], [calc(100%-20px)], etc.
 * Used to validate custom fluid utility values like text-fluid-[18px]/[26px]
 */

const ARBITRARY_VALUE_PATTERN = /^\[.+\]$/;

const isArbitraryValue = (value: string) => ARBITRARY_VALUE_PATTERN.test(value);

const FLUID_UTILITIES = {
  'font-size': ['text-fluid'],
  m: ['m-fluid', 'mx-fluid', 'my-fluid', '-m-fluid', '-mt-fluid'],
  p: ['p-fluid', 'px-fluid', 'py-fluid', 'pt-fluid', 'pb-fluid'],
  w: ['w-fluid'],
  h: ['h-fluid'],
} as const;

const buildClassGroups = () => {
  return Object.entries(FLUID_UTILITIES).reduce((acc, [group, utilities]) => {
    acc[group] = utilities.map((utility) => ({
      [utility]: [isArbitraryValue],
    }));
    return acc;
  }, {} as Record<string, Array<Record<string, Array<typeof isArbitraryValue>>>>);
};

const twMergeExtended = extendTailwindMerge({
  extend: {
    classGroups: buildClassGroups(),
  },
});

export const clsxm = (...classes: ClassValue[]) =>
  twMergeExtended(clsx(...classes));
