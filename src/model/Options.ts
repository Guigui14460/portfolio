import { projectsData, universityProjectsData } from "./data";
import languageInformations from "./Language";

export interface LanguageOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly type: string;
};

export const languageOptions: readonly LanguageOption[] = Object.keys(languageInformations).map(val => {
    const retrievedValue = languageInformations[val];
    return {value: val, label: retrievedValue.name, color: retrievedValue.color, type: "language"};
});

export interface KeywordOption {
    readonly value: string;
    readonly label: string;
    readonly type: string;
};


const kwOptionsSet = new Set<KeywordOption>();
[...universityProjectsData, ...projectsData].forEach(val => {
    val.keywords?.forEach(keyword => {
        kwOptionsSet.add({value: keyword, label: keyword, type: "keyword"});
    });
});
export const keywordOptions: readonly KeywordOption[] = Array.from(kwOptionsSet);

export interface GroupedOption {
    readonly label: string;
    readonly options: readonly LanguageOption[] | readonly KeywordOption[];
}
  
export const groupedOptions: readonly GroupedOption[] = [
    {
        label: 'Languages',
        options: languageOptions,
    },
    {
        label: 'Keywords',
        options: keywordOptions,
    },
];
