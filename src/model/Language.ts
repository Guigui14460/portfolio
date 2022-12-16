import { SkillTab } from "./Skill";

export type Level = 1 | 2 | 3; // "initiated" | "intermediate" | "expert";

export default interface Language {
    name: string;
    link: string;
    color: string;
    logoUrl: string;
    tabs: SkillTab[];
    level: Level;
}

export const getOnlyLanguages = (languages: (Language | undefined)[]) => {
    return languages.filter(item => item) as Language[];
};

export const getOnlyLanguagesByKey = (keys: string[], map: {[id: string]: Language}) => {
    const languages: (Language | undefined)[] = [];
    keys.forEach(key => {
        languages.push(map[key]);
    })
    return languages.filter(item => item) as Language[];
};
