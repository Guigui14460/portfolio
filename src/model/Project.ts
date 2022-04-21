import { MultiValue } from 'react-select';
import { Language } from './Language';
import { KeywordOption, LanguageOption } from './Options';

export interface ProjectAuthor {
    id: string;
    name: string;
    googleScholarProfile?: string;
    githubProfile?: string;
    gitlabProfile?: string;
    linkedInProfile?: string;
    portfolioUrl?: string;
};
export const authorHasNoLinks = (author: ProjectAuthor | undefined) => {
    if (author === undefined) return false;
    return author.googleScholarProfile === undefined && author.githubProfile === undefined && 
           author.gitlabProfile === undefined && author.linkedInProfile === undefined &&
           author.portfolioUrl === undefined;
}
export const getOnlyAuthors = (authors: (ProjectAuthor | undefined)[]) => {
    return authors.filter(item => item) as ProjectAuthor[];
}

type ProjectType = "school" | "personal" | "entreprise";

export interface Project {
    name: string;
    description: string;
    date: number;
    type: ProjectType,
    repoUrl?: string;
    leader?: ProjectAuthor;
    authors: ProjectAuthor[];
    languages: Language[];
    officialSiteUrl?: string;
    notFinished?: boolean;
    keywords?: string[];
    isPrivate?: boolean;
};
export const hasLanguagesOrKeywords = (project: Project, filters: MultiValue<LanguageOption | KeywordOption>) => {
    for(let filter of filters){
        if(filter.type === "language"){
            let isIn = false;
            project.languages.forEach(value => {
                isIn = isIn || value.name === filter.label;
            });
            if(!isIn) return false;
        }

        if(filter.type === "keyword") {
            if(!project.keywords) return false;
            if(!project.keywords.includes(filter.label)) return false;
        }
    }
    return true;
};
