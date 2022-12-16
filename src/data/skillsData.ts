import { getOnlyLanguagesByKey } from "../model/Language";
import { SkillOrLanguage } from "../model/Skill";
import languageInformations from "./languagesData";

const hardSkillData: SkillOrLanguage[] = [
    // languages
    ...getOnlyLanguagesByKey([
        "python", "java", "c", "cpp", "r", "latex",
        "html", "css", "sass", "javascript", "typescript",
        "php", "sql", "dart", "haskell", "go", "matlab",
    ], languageInformations),

    // quantum libraries
    {
        name: "Qiskit",
        link: "https://qiskit.org/",
        logoUrl: "/images/hard_skills/quantum_libraries/qiskit.webp",
        tabs: ["Quantum Libraries"],
        level: 1,
    },

    // data science libraries
    {
        name: "Jupyter",
        link: "https://jupyter.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/jupyter.svg",
        tabs: ["Data Science"],
        level: 2,
    },
    {
        name: "NumPy",
        link: "https://numpy.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/numpy.svg",
        tabs: ["Data Science"],
        level: 2,
    },
    {
        name: "Pandas",
        link: "https://pandas.pydata.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/pandas.webp",
        tabs: ["Data Science"],
        level: 2,
    },
    {
        name: "Matplotlib",
        link: "https://matplotlib.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/matplotlib.webp",
        tabs: ["Data Science"],
        level: 2,
    },
    {
        name: "SciPy",
        link: "https://scipy.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/scipy.webp",
        tabs: ["Data Science"],
        level: 1,
    },
    {
        name: "Seaborn",
        link: "https://seaborn.pydata.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/seaborn.webp",
        tabs: ["Data Science"],
        level: 1,
    },
    {
        name: "Scikit-Learn",
        link: "https://scikit-learn.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/scikit-learn.webp",
        tabs: ["Data Science"],
        level: 2,
    },
    {
        name: "PyTorch",
        link: "https://pytorch.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/pytorch.webp",
        tabs: ["Data Science"],
        level: 2,
    },
    {
        name: "TensorFlow",
        link: "https://www.tensorflow.org/",
        logoUrl: "/images/hard_skills/data_science_libraries/tensorflow.webp",
        tabs: ["Data Science"],
        level: 1,
    },

    // computer graphics
    {
        name: "OpenGL",
        link: "https://www.opengl.org/",
        logoUrl: "/images/hard_skills/computer_graphics/opengl.webp",
        tabs: ["Computer Graphics"],
        level: 1,
    },
    {
        name: "GLM",
        link: "https://glm.g-truc.net/0.9.9/",
        logoUrl: "/images/hard_skills/computer_graphics/glm.webp",
        tabs: ["Computer Graphics"],
        level: 1,
    },
    {
        name: "CUDA",
        link: "https://developer.nvidia.com/cuda-toolkit",
        logoUrl: "/images/hard_skills/computer_graphics/cuda.webp",
        tabs: ["Computer Graphics"],
        level: 1,
    },

    // databases
    {
        name: "MariaDB / MySQL",
        link: "https://mariadb.org/",
        logoUrl: "/images/hard_skills/databases/mariadb.svg",
        tabs: ["Databases"],
        level: 2,
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        logoUrl: "/images/hard_skills/databases/postgresql.webp",
        tabs: ["Databases"],
        level: 2,
    },
    {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        logoUrl: "/images/hard_skills/databases/mongodb.webp",
        tabs: ["Databases"],
        level: 2,
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        logoUrl: "/images/hard_skills/databases/firebase.webp",
        tabs: ["Databases"],
        level: 1,
    },

    // web frameworks/libraries
    {
        name: "Django",
        link: "https://www.djangoproject.com/",
        logoUrl: "/images/hard_skills/web_frameworks_libraries/django.webp",
        tabs: ["Web"],
        level: 1,
    },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        logoUrl: "/images/hard_skills/web_frameworks_libraries/nodejs.webp",
        tabs: ["Web"],
        level: 2,
    },
    {
        name: "ReactJS",
        link: "https://en.reactjs.org/",
        logoUrl: "/images/hard_skills/web_frameworks_libraries/reactjs.svg",
        tabs: ["Web"],
        level: 2,
    },
    {
        name: "NextJS",
        link: "https://nextjs.org/",
        logoUrl: "/images/hard_skills/web_frameworks_libraries/nextjs.webp",
        tabs: ["Web"],
        level: 2,
    },
    {
        name: "VueJS",
        link: "https://vuejs.org/",
        logoUrl: "/images/hard_skills/web_frameworks_libraries/vuejs.webp",
        tabs: ["Web"],
        level: 1,
    },
    {
        name: "D3.js",
        link: "https://d3js.org/",
        logoUrl: "/images/hard_skills/web_frameworks_libraries/d3.webp",
        tabs: ["Web"],
        level: 1,
    },

    // tools
    {
        name: "Git",
        link: "https://git-scm.com/",
        logoUrl: "/images/hard_skills/tools/git.webp",
        tabs: ["Tools"],
        level: 2,
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        logoUrl: "/images/hard_skills/tools/docker.webp",
        tabs: ["Tools"],
        level: 1,
    },
    {
        name: "Ubuntu",
        link: "https://ubuntu.com/",
        logoUrl: "/images/hard_skills/tools/ubuntu.webp",
        tabs: ["Tools"],
    },
    {
        name: "Windows",
        link: "https://www.microsoft.com/en-us/windows",
        logoUrl: "/images/hard_skills/tools/windows.webp",
        tabs: ["Tools"],
    },
];

export default hardSkillData;
