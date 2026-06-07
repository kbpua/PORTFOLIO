import type { ContactMethod, SocialLink } from '../types';

export const CV_URL =
  'https://drive.google.com/file/d/1QA5pXcPENmyW_aVs_tKbw_UJEtBGGWEZ/view?usp=sharing';

export const CV_EMBED_URL =
  'https://drive.google.com/file/d/1QA5pXcPENmyW_aVs_tKbw_UJEtBGGWEZ/preview';

export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'kurtpua8@gmail.com',
    href: 'mailto:kurtpua8@gmail.com',
    icon: '/email.png',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '0969 038 5088',
    href: 'tel:+639690385088',
    icon: '/phone.png',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Kurt Pua',
    href: 'https://ph.linkedin.com/in/kurt-pua-365252294',
    icon: '/linkedin.png',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'kbpua',
    href: 'https://github.com/kbpua',
    icon: '/github.png',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'Kurt Pua',
    href: 'https://www.facebook.com/wilbur.pua/',
    icon: '/fb.png',
  },
];
