export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: 'AI / ML' | 'Full-Stack' | 'Frontend / Backend' | 'Automation';
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  architecture: string;
  status: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'AI & Agents'
  | 'AI Platforms & APIs'
  | 'DevOps & Cloud'
  | 'Cybersecurity'
  | 'Database'
  | 'Real-Time & Automation'
  | 'Tools & Environment';

export type SkillTier = 'High Focus' | 'Mid Level';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  tier: SkillTier;
  subGroup: string;
  description: string;
  iconName: string;
  isHot?: boolean;
}

export interface DomainItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  technologies: string[];
  tier: 'Primary Focus' | 'Secondary Focus' | 'Specialized';
}

export interface JourneyMilestone {
  number: string;
  phase: string;
  title: string;
  summary: string;
  technologies: string[];
  keyOutcomes: string[];
}

export interface AboutCard {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
