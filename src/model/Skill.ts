import Language, {Level} from "./Language";

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
    level?: Level;
};

export type SkillOrLanguage = Skill | Language;
