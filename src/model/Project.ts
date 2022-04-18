import { Language } from './Language';

export interface ProjectAuthor {
    name: string;
    googleScholarProfile?: string;
    githubProfile?: string;
    gitlabProfile?: string;
    linkedInProfile?: string;
    portfolioUrl?: string;
};

export interface Project {
    name: string;
    description: string;
    repoUrl?: string;
    leader?: ProjectAuthor;
    authors: (ProjectAuthor | undefined)[];
    languages: Language[];
    officialSiteUrl?: string;
    notFinished?: boolean;
    keywords?: string[];
    isPrivate?: boolean;
};
