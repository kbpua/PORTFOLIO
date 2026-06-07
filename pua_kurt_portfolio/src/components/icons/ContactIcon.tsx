import type { FC } from 'react';
import type { ContactIconId } from '../../types';

export interface IconProps {
  className?: string;
  size?: number;
}

const EmailIcon = ({ className, size = 24 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = ({ className, size = 24 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6.5 4h3l1.5 5-2 1.5a13 13 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6.5a2 2 0 0 1 2-2.5Z" />
  </svg>
);

const LinkedInIcon = ({ className, size = 24 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.5 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM5 10h3v10H5V10Zm5 0h2.9v1.4h.04c.4-.75 1.4-1.55 2.88-1.55 3.08 0 3.65 2.03 3.65 4.67V20H16v-4.56c0-1.09-.02-2.48-1.51-2.48-1.64 0-1.89 1.28-1.89 2.6V20h-3V10Z" />
  </svg>
);

const GitHubIcon = ({ className, size = 24 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

const FacebookIcon = ({ className, size = 24 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 8.5V6.75c0-.69.56-1.25 1.25-1.25H16V3h-2.08C11.57 3 10.5 4.34 10.5 6.2V8.5H8v2.75h2.5V21h3V11.25H16l.5-2.75h-3Z" />
  </svg>
);

const icons: Record<ContactIconId, FC<IconProps>> = {
  email: EmailIcon,
  phone: PhoneIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  facebook: FacebookIcon,
};

interface ContactIconComponentProps extends IconProps {
  id: ContactIconId;
}

const ContactIcon = ({ id, className, size }: ContactIconComponentProps) => {
  const Icon = icons[id];
  return <Icon className={className} size={size} />;
};

export default ContactIcon;
