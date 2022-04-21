export enum SkillLevel {
    Beginner,
    Intermediate,
    Expert,
};

export interface Language {
    name: string;
    color: string;
    percentage: number;
    level: SkillLevel;
    link: string;
    // TODO: add a logo for future upgrade
}
