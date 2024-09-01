import { MultiValue } from 'react-select';
import Language from "./Language";
import { KeywordOption, LanguageOption } from './Options';

export interface Teaching {
    name: string;
    description: string;
    where: string;
    beginDate: number;
    endDate?: number;
    repoUrl?: string;
    languages: Language[];
    officialSiteUrl?: string;
    officialSiteUrlTitle?: string;
    keywords?: string[];
};

export const hasLanguagesOrKeywords = (value: Teaching, filters: MultiValue<LanguageOption | KeywordOption>) => {
    for(let filter of filters){
        if(filter.type === "language"){
            let isIn = false;
            value.languages.forEach(value => {
                isIn = isIn || value.name === filter.label;
            });
            if(!isIn) return false;
        }

        if(filter.type === "keyword") {
            if(!value.keywords) return false;
            if(!value.keywords.includes(filter.label)) return false;
        }
    }
    return true;
};
