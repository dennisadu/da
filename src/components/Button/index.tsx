import { PropsWithChildren } from 'react';
import { clsxm } from '@/utils/clsxm';
import Link from 'next/link';

interface BaseButtonProps extends PropsWithChildren {
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  as: 'link';
  href: string;
  type?: never;
  onClick?: never;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  as = 'button',
  ...props
}: ButtonProps) => {
  const baseStyles = clsxm(
    '~w-[8rem]/[15rem] ~h-[2.75rem]/[2.875rem] hover:h-[53px] rounded-lg',
    'font-helvetica font-bold uppercase',
    '~text-[1.125rem]/[1.5rem] hover:~text-[1.5rem]/[2rem]',
    'transition-all duration-300 ease-in-out',
    'bg-primary-100 text-gray-10',
    'flex items-center justify-center',
    'active:scale-95',
    className,
  );

  if (as === 'link') {
    const { href, target, rel } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles} {...props}>
      {children}
    </button>
  );
};
