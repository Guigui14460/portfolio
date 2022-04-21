import { Project } from "../model/Project";
import { getOnlyAuthors } from "../model/ProjectAuthor";
import authorsList from "./authorsData";
import { me } from "./data";
import languageInformations from "./languagesData";

export const projectsData: Project[] = [
    {
        date: 2022,
        type: "personal",
        name: "Predictor of the effects of molecules on the human body",
        // repoUrl: "https://github.com/Guigui14460/molecule-effects-prediction",
        description: "Application to predict the effects of a molecule on a human organism. Data taken from different databases belonging to the NCBI (National Center for Biotechnology Information).",
        leader: me,
        authors: getOnlyAuthors([me]),
        languages: [languageInformations["python"]],
        isPrivate: true,
        notFinished: true,
        keywords: ["artificial intelligence", "molecule effects", "command-line interface", "natural language processing", "machine learning", "graph neural networks"],
    },
    {
        date: 2022,
        type: "personal",
        name: "Nebulae Generator",
        // repoUrl: "https://github.com/Guigui14460/nebulae-generator",
        description: "Creation of an AI which is able to generate new nebulae (planetary, dark, diffuse, protoplanetary or as supernova remnant) images with a GAN (Generative Adversarial Networks)",
        leader: me,
        authors: getOnlyAuthors([me]),
        languages: [languageInformations["python"]],
        isPrivate: true,
        notFinished: true,
        keywords: ["deep learning", "tensorflow", "generative model", "astronomy"],
    },
    {
        date: 2021,
        type: "personal",
        name: "Artificial neural network",
        repoUrl: "https://github.com/Guigui14460/neural-network-from-scratch",
        description: "Implementation of an artificial neural network using the book nnfs.io. Python implementation with Numpy, tested with real examples (MNIST, regression). Work on mathematics to improve the optimization of the implementation.",
        leader: me,
        authors: getOnlyAuthors([me]),
        languages: [languageInformations["python"]],
        officialSiteUrl: "http://nnfs.io",
        keywords: ["artificial intelligence", "neural networks", "deep learning", "introduction"],
    },
    // {
    //     date: 2020,
    //     type: "personal",
    //     name: "Trading bot (for cryptocurrencies)",
    //     repoUrl: "https://github.com/Guigui14460/trading_bot",
    //     description: "Bot allowing to trade crypto-currencies mainly via different platforms. Different trading strategies are available for short, medium and long term via the different indicators existing in the trading world.",
    //     leader: me,
    //     authors: getOnlyAuthors([me, authorsList.get("ml")]),
    //     languages: [languageInformations["python"]],
    //     notFinished: true,
    // },
    {
        date: 2020,
        type: "personal",
        name: "Password manager",
        // repoUrl: "https://github.com/Guigui14460/password-manager",
        description: "An application that allows you to securely store your credentials, notes, contacts, credit cards and other information locally. A safe is available to back up his files. This uses the AES encryption protocol. Others are available such as Blowfish, Twofish, RSA, etc...",
        leader: me,
        authors: getOnlyAuthors([me]),
        languages: [languageInformations["java"]],
        isPrivate: true,
        keywords: ["password secure storage", "data encryption/decryption"],
    },
    {
        date: 2020,
        type: "personal",
        name: "Automation of project creation for developers",
        repoUrl: "https://github.com/Guigui14460/project-automation",
        description: "Open-source project allowing to generate the base of any project following the conventions of the chosen language. Allows to generate a project in one command line.",
        leader: me,
        authors: getOnlyAuthors([me]),
        languages: [languageInformations["python"]],
        keywords: ["automation", "projects generation"],
    },
    {
        date: 2019,
        type: "personal",
        name: "ProgLangLearn",
        repoUrl: "https://github.com/Guigui14460/proglanglearn",
        description: "Site offering training on computer science and the world of development. The trainings make it possible to learn a programming language or a framework by working on various projects of different scales.",
        leader: me,
        authors: getOnlyAuthors([me]),
        languages: [languageInformations["python"], languageInformations["html"], languageInformations["javascript"], languageInformations["sass"]],
        keywords: ["educational website", "django", "web development"],
    },
];

export const universityProjectsData: Project[] = [
    {
        date: 2022,
        type: "school",
        name: "Conquerer game (Image Synthesis Project)",
        repoUrl: "https://github.com/Guigui14460/image-synthesis-game-conquerer",
        description: "Realization of a 2D or 3D game in C++ and OpenGL. This is a fighting game in space with marine animals (dolphin and shark) that can be played on the same keyboard.",
        authors: getOnlyAuthors([me, authorsList.get("rl")]),
        languages: [languageInformations["cpp"]],
        keywords: ["game development", "opengl", "image synthesis"],
    },
    {
        date: 2022,
        type: "school",
        name: "Data visualization site of the delays of high speed trains in France",
        repoUrl: "https://github.com/Guigui14460/data-visualization-french-high-speed-train-delays",
        description: "Visualization site about the delays of the TGV (High Speed Trains) managed by the SNCF with MongoDB",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("cp")]),
        languages: [languageInformations["javascript"], languageInformations["python"]],
        keywords: ["data visualization", "nosql database", "mongodb", "d3js", "nodejs", "graphql"],
    },
    {
        date: 2022,
        type: "school",
        name: "Data Analysis on Normandy river",
        repoUrl: "https://github.com/Guigui14460/data-analysis-project",
        description: "Analysis of observations of a dataset from different sensors placed along the Touques, a river in Normandy",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("ab"), authorsList.get("ap"), authorsList.get("cp")]),
        languages: [languageInformations["r"]],
        keywords: ["data analysis"],
    },
    {
        date: 2021,
        type: "school",
        name: "Multi-agent knowledge-based program interpreter",
        repoUrl: "https://github.com/Guigui14460/multi-agents-knowledge-based-programs-interpreter",
        description: "Construction of a program interpreter allowing to execute programs based on multi-agent systems using epistemic logic as reasoning. In fine, the project will be integrated to a project of the MAD group (Models, Agents, Decision) of the GREYC laboratory.",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("cp")]),
        languages: [languageInformations["java"]],
        officialSiteUrl: "/skills#annual-project-m1",
        keywords: ["artificial intelligence", "interpreter", "knowledge", "logical reasoning", "dynamic epistemic logic", "symbolic AI", "multi-agents system"],
    },
    {
        date: 2021,
        type: "school",
        name: "Movie recommendation system",
        repoUrl: "https://github.com/Guigui14460/recommender-system",
        description: "Creation of a movie recommendation system using several approaches like collaborative-filtering, content-based, categorical or hybrid recommenders",
        authors: getOnlyAuthors([me, authorsList.get("rk"), authorsList.get("mo"), authorsList.get("zu")]),
        languages: [languageInformations["python"]],
        officialSiteUrl: "/skills#annual-project-b3",
        keywords: ["recommender system", "machine learning"],
    },
    {
        date: 2021,
        type: "school",
        name: "Hello Caen Application",
        repoUrl: "https://github.com/Guigui14460/hello-caen-app",
        description: "A mobile application available on Google Play and Apple Stores soon, which allows you to travel in Caen and discover some stores. You can use good deals in your favorite stores with a QR Code to benefit the reduction amount.",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("ab"), authorsList.get("ap"), authorsList.get("cp"), authorsList.get("kb"), authorsList.get("sl")]),
        languages: [languageInformations["dart"]],
        officialSiteUrl: "https://www.hellocaen.com/",
        keywords: ["mobile application", "geolocalization", "merchants", "discount plans"],
    },
    {
        date: 2020,
        type: "school",
        name: "House generator",
        repoUrl: "https://github.com/Guigui14460/intelligence-artificielle",
        description: "Users can generate houses according to constraints (CSP), houses already built (extractions) and plan its construction (planning).",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("ab"), authorsList.get("ap"), authorsList.get("cp")]),
        languages: [languageInformations["java"]],
        keywords: ["artificial intelligence", "constraint satisfaction problem", "planification", "knowledge extraction"],
    },
    {
        date: 2020,
        type: "school",
        name: "Pandemic site",
        repoUrl: "https://github.com/Guigui14460/pandemics-site",
        description: "Site allowing to put into practice our knowledge in PHP.",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("ab"), authorsList.get("ap"), authorsList.get("cp")]),
        languages: [languageInformations["php"], languageInformations["html"]],
        keywords: ["web development", "sql database"],
    },
    {
        date: 2020,
        type: "school",
        name: "N-body simulator",
        repoUrl: "https://github.com/Guigui14460/simulateur-n-corps",
        description: "Users can simulate N gravitationally interacting objects using Newton’s laws of motion. In this one, we can load a simulation, create one with a random generation of bodies. Calculation optimization with the Barnes-Hut algorithm.",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("ap"), authorsList.get("am")]),
        languages: [languageInformations["java"]],
        keywords: ["physics", "star simulation", "astrophysics"],
    },
    {
        date: 2019,
        type: "school",
        name: "Wargame optimizer",
        repoUrl: "https://github.com/Guigui14460/optimisateur-de-wargame",
        description: "Users can play a strategy game in front of a computer and can, among other things, ask an algorithm to generate an army for them that will allow them to win in the vast majority of cases.",
        leader: me,
        authors: getOnlyAuthors([me, authorsList.get("ml"), authorsList.get("wm"), authorsList.get("lp"), authorsList.get("hk")]),
        languages: [languageInformations["python"]],
        keywords: ["video game", "wargame", "fighting simulation", "artificial intelligence", "evolutionnary algorithm"],
    },
];

export const worksInProgressProjectsData: Project[] = [...universityProjectsData, ...projectsData].filter(project => project.notFinished);
