
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; icon: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'achievement';
}
