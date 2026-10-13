import type { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'icat',
    title: 'Internship Common Aptitude Test (ICAT)',
    issuer: 'Participation Certificate',
    year: '2026',
    description: 'Participation in the Internship Common Aptitude Test.',
    image: '/images/icat-preview.jpg',
    credentialUrl: '/certificates/icat-preview.jpg',
  },
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon (SIH) 2026',
    issuer: 'Smart India Hackathon',
    year: '2026',
    description: 'Certificate for participation in Smart India Hackathon 2026.',
    image: '/images/sih-2026-preview.jpg',
    credentialUrl: '/certificates/sih-2026.pdf',
  },
  {
    id: 'ai-tools-chatgpt',
    title: 'AI Tools & ChatGPT Workshop',
    issuer: 'be10x',
    year: '2026',
    description: 'Workshop on AI tools and ChatGPT for practical productivity.',
    image: '/images/ai-tools-chatgpt-preview.jpg',
    credentialUrl: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971246336',
  },
  {
    id: 'p5-internship',
    title: 'P5 Digital Internship Certificate',
    issuer: 'P5 Digital Solutions Pvt. Ltd.',
    year: '2026',
    description: 'Certificate for completing a 3-month frontend development internship.',
    image: '/images/p5-internship-preview.jpg',
    credentialUrl: '/certificates/internship.pdf',
  },
  {
    id: 'upskilling',
    title: 'Upskilling & Career Counselling Workshop',
    issuer: 'Mindenious Edutech LPP',
    year: '',
    description: 'Workshop focused on upskilling and career counselling.',
    image: '/images/upskilling-preview.jpg',
  },
];
