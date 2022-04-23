import Language from "./Language";

export const skillsTabData = [
    "Software Development",
    "Data Science",
    "Computer Graphics",
    "Databases",
    "Web",
    "Quantum Libraries",
    "Tools"
] as const;
export type SkillTab = typeof skillsTabData[number];

interface Skill {
    name: string;
    link: string;
    logoUrl: string;
    tabs: SkillTab[];
};

export type SkillOrLanguage = Skill | Language;
