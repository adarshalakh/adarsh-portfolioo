import type { Experience, Education } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'p5-digital',
    number: '01',
    company: 'P5 Digital Solution',
    role: 'Frontend Developer Intern',
    period: '2026',
    type: '3-month internship',
    description:
      'Developed responsive web interfaces using HTML5, CSS3, JavaScript and React.js, following component-based development practices.',
    details: [
      'Developed responsive web interfaces using HTML5, CSS3, JavaScript and React.js',
      'Followed component-based development practices',
      'Built the VR Tiffins Promotional Website using React.js and Vite',
      'Created reusable React components',
      'Implemented responsive navigation, smooth scrolling, image sliders and mobile-friendly layouts',
      'Contributed to the frontend of a private P5 Digital Content Management System (CMS)',
      'Worked on dashboard interfaces and multiple content-management modules',
      'Tested interfaces across different screen sizes',
      'Identified and fixed UI and responsiveness issues',
      'Used Git and GitHub for version control',
      'Used Vercel for deployment',
      'Improved code organization, UI design and component reusability through mentor feedback',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Vite',
      'Git',
      'GitHub',
      'Vercel',
      'Swiper.js',
    ],
    mentor: 'Mr. Arjun Rana',
  },
  {
    id: 'mehta-studio',
    number: '02',
    company: 'Mehta Studio, Daltonganj',
    role: 'Family Shop Assistant',
    period: 'Part-time',
    type: 'Operations & Admin',
    description:
      'Managed customer interactions, daily shop operations and maintained student records in Microsoft Excel.',
    details: [
      'Managed customer interactions and daily shop operations',
      'Handled cash transactions and fast calculations',
      'Maintained student records in Microsoft Excel for school/university ID-card generation and documentation',
      'Ensured data accuracy and organized records efficiently',
      'Developed practical communication, responsibility and customer-handling skills',
    ],
    technologies: ['Excel', 'Customer Interaction', 'Operations', 'Record Management'],
  },
  {
    id: 'event-management',
    number: '03',
    company: 'Event & Activity Management',
    role: 'Volunteer',
    period: 'School & Institute',
    type: 'Volunteer',
    description:
      'Organized events and activities in school and coaching institutes, developing leadership and public communication skills.',
    details: [
      'Organized events and activities in school and coaching institutes',
      'Participated in and led presentations, seminars and group discussions',
      'Developed leadership, teamwork and public communication skills',
      'Served as Class Representative at Dayalbagh Educational Institute',
    ],
    technologies: ['Leadership', 'Communication', 'Teamwork', 'Presentation', 'Event Coordination'],
  },
];

export const education: Education[] = [
  {
    id: 'dei',
    institution: 'Dayalbagh Educational Institute, Agra',
    degree: 'B.Sc. Mathematics and Computer Science',
    period: '2024 – 2028',
    additional: 'Class Representative',
  },
  {
    id: 'heritage',
    institution: 'Heritage International School, Palamu, Jharkhand',
    degree: 'Intermediate (PCM)',
    period: '2022 – 2024',
  },
  {
    id: 'bright-land',
    institution: 'Bright Land School, Palamu, Jharkhand',
    degree: 'High School',
    period: '2020 – 2022',
  },
];
