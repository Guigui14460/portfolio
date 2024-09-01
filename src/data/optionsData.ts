import { GroupedOption, KeywordOption, LanguageOption } from "../model/Options";
import { projectsData, universityProjectsData } from "./projectsData";
import languageInformations from "./languagesData";
import { publicationsData } from "./publicationsData";
import { trainingsData } from "./teachingData"
import Language from "../model/Language";

// projects
export const languageOptions: readonly LanguageOption[] = Object.keys(languageInformations).map(val => {
    const retrievedValue = languageInformations[val];
    return {value: val, label: retrievedValue.name, color: retrievedValue.color, type: "language"};
}).sort((a, b) => a.label.localeCompare(b.label));
const kwOptionsSet = new Set<string>();
[...universityProjectsData, ...projectsData].forEach(val => {
    val.keywords?.forEach(keyword => {
        kwOptionsSet.add(keyword);
    });
});
export const keywordOptions: readonly KeywordOption[] = Array.from(kwOptionsSet).sort((a, b) => a.localeCompare(b)).map(keyword => {
    return {value: keyword, label: keyword, type: "keyword"};
});
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

// teaching
const teachingLanguageOptionsSet = new Array<Language>();
trainingsData.forEach(val => {
    val.languages?.forEach(language => {
        teachingLanguageOptionsSet.push(language);
    });
});
export const teachingLanguageOptions: readonly LanguageOption[] = teachingLanguageOptionsSet.map(retrievedValue => {
    return {value: retrievedValue.name, label: retrievedValue.name, color: retrievedValue.color, type: "language"};
}).sort((a, b) => a.label.localeCompare(b.label));;
const teachingKwOptionsSet = new Set<string>();
trainingsData.forEach(val => {
    val.keywords?.forEach(keyword => {
        teachingKwOptionsSet.add(keyword);
    });
});
export const teachingKeywordOptions: readonly KeywordOption[] = Array.from(teachingKwOptionsSet).sort((a, b) => a.localeCompare(b)).map(keyword => {
    return {value: keyword, label: keyword, type: "keyword"};
});
export const teachingGroupedOptions: readonly GroupedOption[] = [
    {
        label: 'Languages',
        options: teachingLanguageOptions,
    },
    {
        label: 'Keywords',
        options: teachingKeywordOptions,
    },
];

// publications
const kwPublicationOptionsSet = new Set<string>();
publicationsData.forEach(val => {
    val.keywords?.forEach(keyword => {
        kwPublicationOptionsSet.add(keyword);
    });
});
export const keywordPublicationOptions: readonly KeywordOption[] = Array.from(kwPublicationOptionsSet).sort((a, b) => a.localeCompare(b)).map(keyword => {
    return {value: keyword, label: keyword, type: "keyword"};
});
export const publicationGroupedOptions: readonly GroupedOption[] = [
    {
        label: "Keywords",
        options: keywordPublicationOptions,
    }
]
