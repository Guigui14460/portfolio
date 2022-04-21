import { Language, SkillLevel } from "../model/Language";

const languageInformations: {[id: string]: Language} = {
    "python": {
        name: "Python",
        color: "#3572a5",
        percentage: 70,
        level: SkillLevel.Expert,
        link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    },
    "java": {
        name: "Java",
        color: "#b07219",
        percentage: 70,
        level: SkillLevel.Expert,
        link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    },
    "c": {
        name: "C",
        color: "#555555",
        percentage: 60,
        level: SkillLevel.Intermediate,
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    "javascript": {
        name: "Javascript",
        color: "#f1e05a",
        percentage: 80,
        level: SkillLevel.Expert,
        link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    "typescript": {
        name: "Typescript",
        color: "#2b7489",
        percentage: 70,
        level: SkillLevel.Expert,
        link: "https://en.wikipedia.org/wiki/TypeScript",
    },
    "php": {
        name: "PHP",
        color: "#4f5d95",
        percentage: 50,
        level: SkillLevel.Intermediate,
        link: "https://en.wikipedia.org/wiki/PHP",
    },
    "dart": {
        name: "Dart",
        color: "#00b4ab",
        percentage: 50,
        level: SkillLevel.Intermediate,
        link: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
    },
    "html": {
        name: "HTML/CSS",
        color: "#e34c26",
        percentage: 85,
        level: SkillLevel.Expert,
        link: "https://en.wikipedia.org/wiki/HTML",
    },
    "haskell": {
        name: "Haskell",
        color: "#5e5086",
        percentage: 40,
        level: SkillLevel.Intermediate,
        link: "https://en.wikipedia.org/wiki/Haskell_(programming_language)",
    },
    "sass": {
        name: "Sass/Scss",
        color: "#cf5c92",
        percentage: 70,
        level: SkillLevel.Intermediate,
        link: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
    },
    "go": {
        name: "Golang",
        color: "#00add8",
        percentage: 30,
        level: SkillLevel.Beginner,
        link: "https://en.wikipedia.org/wiki/Go_(programming_language)",
    },
    "r": {
        name: "R",
        color: "#198ce7",
        percentage: 30,
        level: SkillLevel.Beginner,
        link: "https://en.wikipedia.org/wiki/R_(programming_language)",
    },
    "cpp": {
        name: "C++",
        color: "#f34b7d",
        percentage: 50,
        level: SkillLevel.Intermediate,
        link: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
};

export default languageInformations;
