import type { Profile, NavLink } from '@/types';

export const profile: Profile = {
  name: 'Adarsh Mehta',
  title: 'Frontend Developer',
  secondaryTitle: 'B.Sc. Mathematics & Computer Science Student',
  location: 'Agra, Uttar Pradesh, India',
  email: 'alakhsatsangy@gmail.com',
  phone: '+91 9431968256',
  resumeUrl: '/resume.pdf',
  links: [
    { label: 'GitHub', url: 'https://github.com/adarshalakh', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/adarsh-mehta-dei', icon: 'linkedin' },
    { label: 'Instagram', url: 'https://instagram.com/adarsh_alakh', icon: 'instagram' },
    { label: 'X', url: 'https://x.com/adarsh_alakh', icon: 'twitter' },
    { label: 'Email', url: 'mailto:alakhsatsangy@gmail.com', icon: 'mail' },
    { label: 'Phone', url: 'tel:+919431968256', icon: 'phone' },
  ],
};

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
];
