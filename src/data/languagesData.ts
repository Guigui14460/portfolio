import { Language, SkillLevel } from "../model/Language";

const languageInformations: {[id: string]: Language} = {
    "python": {
        name: "Python",
        color: "#3572a5",
        percentage: 70,
        level: SkillLevel.Expert,
    },
    "java": {
        name: "Java",
        color: "#b07219",
        percentage: 70,
        level: SkillLevel.Expert,
    },
    "c": {
        name: "C",
        color: "#555555",
        percentage: 60,
        level: SkillLevel.Intermediate,
    },
    "javascript": {
        name: "Javascript",
        color: "#f1e05a",
        percentage: 80,
        level: SkillLevel.Expert,
    },
    "typescript": {
        name: "Typescript",
        color: "#2b7489",
        percentage: 70,
        level: SkillLevel.Expert,
    },
    "php": {
        name: "PHP",
        color: "#4f5d95",
        percentage: 50,
        level: SkillLevel.Intermediate,
    },
    "dart": {
        name: "Dart",
        color: "#00b4ab",
        percentage: 50,
        level: SkillLevel.Intermediate,
    },
    "html": {
        name: "HTML/CSS",
        color: "#e34c26",
        percentage: 85,
        level: SkillLevel.Expert,
    },
    "haskell": {
        name: "Haskell",
        color: "#5e5086",
        percentage: 40,
        level: SkillLevel.Intermediate,
    },
    "sass": {
        name: "Sass/Scss",
        color: "#cf5c92",
        percentage: 70,
        level: SkillLevel.Intermediate,
    },
    "go": {
        name: "Golang",
        color: "#00add8",
        percentage: 30,
        level: SkillLevel.Beginner,
    },
    "r": {
        name: "R",
        color: "#198ce7",
        percentage: 30,
        level: SkillLevel.Beginner,
    },
    "cpp": {
        name: "C++",
        color: "#f34b7d",
        percentage: 50,
        level: SkillLevel.Intermediate,
    },
};

export default languageInformations;
