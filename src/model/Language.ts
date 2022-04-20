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
}
