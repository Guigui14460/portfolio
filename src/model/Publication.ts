import { MultiValue } from 'react-select';
import { KeywordOption, LanguageOption } from './Options';

export interface PublicationAuthor {
    name: string
}

export interface Publication {
    name: string
    description: string
    month: number
    year: number
    authors: PublicationAuthor[]
    publicationLink: string
    image: string
    projectUrl?: string
    repoUrl?: string
    keywords?: string[]
}

export const hasLanguagesOrKeywords = (publication: Publication, filters: MultiValue<LanguageOption | KeywordOption>) => {
    for(let filter of filters){
        if(filter.type === "keyword") {
            if(!publication.keywords) return false;
            if(!publication.keywords.includes(filter.label)) return false;
        }
    }
    return true;
};

