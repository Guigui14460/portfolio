import { GroupedOption, KeywordOption, LanguageOption } from "../model/Options";
import { projectsData, universityProjectsData } from "./projectsData";
import languageInformations from "./languagesData";
import { publicationsData } from "./publicationsData";

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
