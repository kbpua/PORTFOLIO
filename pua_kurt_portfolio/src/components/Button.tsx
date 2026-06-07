import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant } from '../types';
import { prefetchUrl } from '../utils/prefetch';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  hash?: string;
  href?: string;
  className?: string;
}

type AnchorButtonProps = ButtonProps &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'onMouseEnter' | 'onFocus'>;

const isExternalHref = (href: string) => /^https?:\/\//i.test(href);

const Button = ({
  children,
  variant = 'primary',
  hash,
  href,
  className = '',
  onMouseEnter,
  onFocus,
  ...rest
}: AnchorButtonProps) => {
  const classes = `btn btn--${variant} ${className}`.trim();

  const handlePrefetch = () => {
    if (href && isExternalHref(href)) {
      prefetchUrl(href);
    }
  };

  if (hash) {
    return (
      <a href={hash} className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onMouseEnter={(event) => {
          handlePrefetch();
          onMouseEnter?.(event);
        }}
        onFocus={(event) => {
          handlePrefetch();
          onFocus?.(event);
        }}
        {...(isExternalHref(href)
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
