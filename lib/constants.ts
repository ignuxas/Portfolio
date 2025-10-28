import { FaGithub, FaYoutube, FaFacebook, FaEnvelope } from 'react-icons/fa6';
import { IconType } from 'react-icons';

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/ignuxas',
    label: 'GitHub',
  },
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/@ThunderclapLabs',
    label: 'YouTube',
  },
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/ignuxas/',
    label: 'Facebook',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:mikolaitis.ignas@gmail.com',
    label: 'Email',
  },
];

export const EMAIL = 'mikolaitis.ignas@gmail.com';
export const FULL_NAME = 'Ignas Mikolaitis';
