import { ProjectAuthor } from "../model/ProjectAuthor";

const authorsList: Map<string, ProjectAuthor> = new Map<string, ProjectAuthor>([
    ["ml", {
        id: "ml",
        name: "Melvin Lucchini",
        githubProfile: "https://github.com/ChivaSdev",
        linkedInProfile: "https://www.linkedin.com/in/melvin-lucchini/",
    }],
    ["ab", {
        id: "ab",
        name: "Arthur Bocage",
        githubProfile: "https://github.com/Turlututur",
    }],
    ["cp", {
        id: "cp",
        name: "Corentin Pierre",
        githubProfile: "https://github.com/coco-ia",
        linkedInProfile: "https://www.linkedin.com/in/corentin-pierre-530394211/",
    }],
    ["ap", {
        id: "ap",
        name: "Alexandre Pignard",
        githubProfile: "https://github.com/Myrani",
    }],
    ["am", {
        id: "am",
        name: "Antoine Morlay",
    }],
    ["sl", {
        id: "sl",
        name: "Simon Leroux",
    }],
    ["kb", {
        id: "kb",
        name: "Kevin Boiziau",
    }],
    ["wm", {
        id: "wm",
        name: "William Mok",
        githubProfile: "https://github.com/Akbeeh",
        linkedInProfile: "https://www.linkedin.com/in/mokwilliam/",
    }],
    ["em", {
        id: "em",
        name: "Emmanuel Garreau",
        githubProfile: "https://github.com/Bigmax81",
        gitlabProfile: "https://gitlab.com/Bigouu",
        linkedInProfile: "https://www.linkedin.com/in/emmanuel-g-a92ba480/",
    }],
    ["lp", {
        id: "lp",
        name: "Lorenzo Païs",
    }],
    ["hk", {id: "hk",name: "Hamza Kabori"}],
    ["rk", {
        id: "rk",
        name: "Rina Kassa",
        linkedInProfile: "https://www.linkedin.com/in/rina-kassa-149219186/",
        githubProfile: "https://github.com/rinakassa7",
    }],
    ["mo", {
        id: "mo",
        name: "Melissa Ounesli",
        linkedInProfile: "https://www.linkedin.com/in/melissa-ounesli-664636179/",
        githubProfile: "https://github.com/melounesli",
    }],
    ["zu", {
        id: "zu",
        name: "Zhandos Urazov",
        githubProfile: "https://github.com/zhandu",
    }],
    ["rl", {
        id: "rl",
        name: "Raphaëlle Lemaire",
        // githubProfile: "",
        linkedInProfile: "https://www.linkedin.com/in/raphaelle-lemaire-a785b3231/",
    }],
]);

export default authorsList;
