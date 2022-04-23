import { MultiValue } from 'react-select';
import Language from "./Language";
import { KeywordOption, LanguageOption } from './Options';
import { ProjectAuthor } from './ProjectAuthor';

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
    officialSiteUrlTitle?: string;
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
