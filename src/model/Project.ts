import { Language } from './Language';

export interface ProjectAuthor {
    id: string;
    name: string;
    googleScholarProfile?: string;
    githubProfile?: string;
    gitlabProfile?: string;
    linkedInProfile?: string;
    portfolioUrl?: string;
};
export const authorHasNoLinks = (author: ProjectAuthor|undefined) => {
    if (author === undefined) return false;
    return author.googleScholarProfile === undefined && author.githubProfile === undefined && 
           author.gitlabProfile === undefined && author.linkedInProfile === undefined &&
           author.portfolioUrl === undefined;
}

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
