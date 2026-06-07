import type { ContactMethod, SocialLink } from '../types';

export const PROFILE_IMAGE_LIGHT = '/profile.jpg';
export const PROFILE_IMAGE_DARK = '/profile.png';
export const PROFILE_IMAGE_HOVER_LIGHT = '/profile-hover-light.png';
export const PROFILE_IMAGE_HOVER_DARK = '/profile-hover-dark.png';
export const PROFILE_IMAGE = PROFILE_IMAGE_LIGHT;

export const AVAILABILITY = 'Open to internships · Manila, PH';

export const CV_URL =
  'https://drive.google.com/file/d/1yfLz-X6XRO9k-330YxZGF2vvKOTTtZzj/view?usp=sharing';

export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'kurtpua8@gmail.com',
    href: 'mailto:kurtpua8@gmail.com',
    icon: 'email',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '0969 038 5088',
    href: 'tel:+639690385088',
    icon: 'phone',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Kurt Pua',
    href: 'https://linkedin.com/in/kurt-benedict-wilbur-pua',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'kbpua',
    href: 'https://github.com/kbpua',
    icon: 'github',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'Kurt Pua',
    href: 'https://www.facebook.com/wilbur.pua/',
    icon: 'facebook',
  },
];
