export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'mail' | 'phone';
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  documentUrl?: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  privateProject: boolean;
  role: string;
  team?: string;
  achievement?: string;
}

export interface Experience {
  id: string;
  number: string;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  details: string[];
  technologies: string[];
  mentor?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  additional?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  image?: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  title: string;
  secondaryTitle: string;
  location: string;
  email: string;
  phone: string;
  links: SocialLink[];
  resumeUrl: string;
}
