import { library } from "@fortawesome/fontawesome-svg-core";
import {
    fab, faLinkedin, faTwitter, faFacebookSquare,
    faDiscord, faReddit
} from "@fortawesome/free-brands-svg-icons"
import { SocialAccount } from "./SocialAccount";
import { Project } from './Project';
import languageInformations from "./Language";
import { expType } from "./Experience";
library.add(faLinkedin, fab, faTwitter, faFacebookSquare, faDiscord, faReddit);

export const firstName: string = "Guillaume";
export const lastName: string = "Letellier";
export const yearOfBorn: string = "07-26-2000";
export const emailAddress: string = "letgui2@gmail.com";
export const phoneShortVersion: string = "+33699120722";
export const phoneLongVersion: string = "(+33) 6 99 12 07 22";
export const address: string = "12 Rue de Suresnes, Colombelles, Normandy, France";

export const projectsData: Project[] = [
    {
        name: "Predictor of the effects of molecules on the human body",
        // repoUrl: "https://github.com/Guigui14460/molecule-effects-prediction",
        description: "Application to predict the effects of a molecule on a human organism. Data taken from different databases belonging to the NCBI (National Center for Biotechnology Information).",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        isPrivate: true,
        notFinished: true,
        keywords: ["artificial intelligence", "molecule effects", "command-line interface", "natural language processing", "machine learning", "graph neural networks"],
    },
    {
        name: "Nebulae Generator",
        // repoUrl: "https://github.com/Guigui14460/nebulae-generator",
        description: "Creation of an AI which is able to generate new nebulae (planetary, dark, diffuse, protoplanetary or as supernova remnant) images with a GAN (Generative Adversarial Networks)",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        isPrivate: true,
        notFinished: true,
        keywords: ["deep learning", "tensorflow", "generative model"],
    },
    {
        name: "Artificial neural network",
        repoUrl: "https://github.com/Guigui14460/neural-network-from-scratch",
        description: "Implementation of an artificial neural network using the book nnfs.io. Python implementation with Numpy, tested with real examples (MNIST, regression). Work on mathematics to improve the optimization of the implementation.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        officialSiteUrl: "http://nnfs.io",
        keywords: ["artificial intelligence", "neural networks", "deep learning", "introduction"],
    },
    {
        name: "Trading bot (for cryptocurrencies)",
        repoUrl: "https://github.com/Guigui14460/trading_bot",
        description: "Bot allowing to trade crypto-currencies mainly via different platforms. Different trading strategies are available for short, medium and long term via the different indicators existing in the trading world.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        notFinished: true,
    },
    {
        name: "Password manager",
        // repoUrl: "https://github.com/Guigui14460/password-manager",
        description: "An application that allows you to securely store your credentials, notes, contacts, credit cards and other information locally. A safe is available to back up his files. This uses the AES encryption protocol. Others are available such as Blowfish, Twofish, RSA, etc...",
        owner: "Guigui14460",
        languages: [languageInformations["java"]],
        isPrivate: true,
        keywords: ["password secure storage", "data encryption/decryption"],
    },
    {
        name: "Automation of project creation for developers",
        repoUrl: "https://github.com/Guigui14460/project-automation",
        description: "Open-source project allowing to generate the base of any project following the conventions of the chosen language. Allows to generate a project in one command line.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        keywords: ["automation", "projects generation"],
    },
    {
        name: "ProgLangLearn",
        repoUrl: "https://github.com/Guigui14460/proglanglearn",
        description: "Site offering training on computer science and the world of development. The trainings make it possible to learn a programming language or a framework by working on various projects of different scales.",
        owner: "Guigui14460",
        languages: [languageInformations["python"], languageInformations["html"], languageInformations["javascript"], languageInformations["sass"]],
        keywords: ["educational website", "django", "web-development"],
    },
];

export const universityProjectsData: Project[] = [
    {
        name: "Conquerer game (Image Synthesis Project)",
        repoUrl: "https://github.com/Guigui14460/image-synthesis-game-conquerer",
        description: "Realization of a 2D or 3D game in C++ and OpenGL",
        owner: "Raphaëlle Lemaire and Guillaume Letellier",
        languages: [languageInformations["cpp"]],
        keywords: ["game development", "opengl", "image synthesis"],
    },
    {
        name: "Data visualization site of the delays of high speed trains in France",
        repoUrl: "https://github.com/Guigui14460/data-visualization-french-high-speed-train-delays",
        description: "Visualization site about the delays of the TGV (High Speed Trains) managed by the SNCF with MongoDB",
        owner: "Guigui14460",
        languages: [languageInformations["javascript"], languageInformations["python"]],
        keywords: ["data visualization", "nosql database", "mongodb", "d3js", "nodejs", "graphql"],
    },
    {
        name: "Data Analysis on Normandy river",
        repoUrl: "https://github.com/Guigui14460/data-analysis-project",
        description: "Analysis of observations of a dataset from different sensors placed along the Touques, a river in Normandy",
        owner: "Guigui14460",
        languages: [languageInformations["r"]],
        keywords: ["data analysis"],
    },
    {
        name: "Multi-agent knowledge-based program interpreter",
        repoUrl: "https://github.com/Guigui14460/multi-agents-knowledge-based-programs-interpreter",
        description: "Construction of a program interpreter allowing to execute programs based on multi-agent systems using epistemic logic as reasoning. In fine, the project will be integrated to a project of the MAD group (Models, Agents, Decision) of the GREYC laboratory.",
        owner: "Corentin Pierre and Guillaume Letellier",
        languages: [languageInformations["java"]],
        officialSiteUrl: "https://www.greyc.fr/en/equipes/mad-2/",
        keywords: ["artificial intelligence", "interpreter", "knowledge", "logical reasoning", "dynamic epistemic logic", "symbolic AI", "multi-agents system"],
    },
    {
        name: "Hello Caen Application",
        repoUrl: "https://github.com/Guigui14460/hello-caen-app",
        description: "A mobile application available on Google Play and Apple Stores soon, which allows you to travel in Caen and discover some stores. You can use good deals in your favorite stores with a QR Code to benefit the reduction amount.",
        owner: "Guillaume Letellier's team",
        languages: [languageInformations["dart"]],
        officialSiteUrl: "https://www.hellocaen.com/",
        keywords: ["mobile application", "geolocalization", "merchants", "discount plans"],
    },
    {
        name: "House generator",
        repoUrl: "https://github.com/Guigui14460/intelligence-artificielle",
        description: "Users can generate houses according to constraints (CSP), houses already built (extractions) and plan its construction (planning).",
        owner: "Guigui14460",
        languages: [languageInformations["java"]],
        keywords: ["artificial intelligence", "constraint satisfaction problem", "planification", "knowledge extraction"],
    },
    {
        name: "Pandemic site",
        repoUrl: "https://github.com/Guigui14460/optimisateur-de-wargame",
        description: "Site allowing to put into practice our knowledge in PHP.",
        owner: "Guigui14460",
        languages: [languageInformations["php"], languageInformations["html"]],
        keywords: ["web development", "sql database"],
    },
    {
        name: "N-body simulator",
        repoUrl: "https://github.com/Guigui14460/simulateur-n-corps",
        description: "Users can simulate N gravitationally interacting objects using Newton’s laws of motion. In this one, we can load a simulation, create one with a random generation of bodies. Calculation optimization with the Barnes-Hut algorithm.",
        owner: "Guigui14460",
        languages: [languageInformations["java"]],
        keywords: ["physics", "star simulation"],
    },
    {
        name: "Wargame optimizer",
        repoUrl: "https://github.com/Guigui14460/optimisateur-de-wargame",
        description: "Users can play a strategy game in front of a computer and can, among other things, ask an algorithm to generate an army for them that will allow them to win in the vast majority of cases.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        keywords: ["video game", "wargame", "fighting simulation", "artificial intelligence", "evolutionnary algorithm"],
    },
];

export const worksInProgressProjectsData: Project[] = [...universityProjectsData, ...projectsData].filter(project => project.notFinished);

export const socialAccounts: SocialAccount[] = [
    { name: "Twitter", username: "@HadesGuigui", url: "https://twitter.com/HadesGuigui", iconProperties: ["fab", "twitter"], iconColor: "#1DA1F2", },
    { name: "LinkedIn", username: "Guillaume Letellier", url: "https://www.linkedin.com/in/guillaume-letellier/", iconProperties: ["fab", "linkedin"], iconColor: "#2867B2", },
    { name: "Reddit", username: "Guigui14460", url: "https://www.reddit.com/user/Guigui14460", iconProperties: ["fab", "reddit"], iconColor: "#FF4500", },
    { name: "Discord", username: "HadesGuigui#7684", url: "https://discordapp.com/users/339384664118657034/", iconProperties: ["fab", "discord"], iconColor: "#7289DA", },
    { name: "Facebook", username: "Guigui Letellier", url: "https://www.facebook.com/guiguiletellier.14/", iconProperties: ["fab", "facebook-square"], iconColor: "#4267B2", },
];

export const experiencesData: expType[] = [
    {
        title: "Data Scientist",
        from: new Date("2021-04-01"),
        to: new Date("2021-06-04"),
        entreprise: "Orange Labs",
        location: "Caen, France",
        entrepriseUrl: "https://www.orange.com",
        referent: {
            firstName: "Étienne",
            lastName: "Daspe",
            jobDescription: "Software engineer",
            url: "https://fr.linkedin.com/in/etiennedaspe",
        },
        associatedTo: "Orange Money",
        associatedToUrl: "https://orangemoney.fr/",
        subject: "Development of a demonstrator in Python as part of research work on the simulation of financial transactions",
        description: "I explored and visualized data from the production platform. From this, I then created a test simulator generating financial transactions in order to create Machine Learning models to verify the realism of this simulator. Then, I interpreted these models in order to continuously improve the simulator. Finally, I used Deep Learning techniques to go further in the realism analysis.",
        keywords: ["machine learning", "deep learning", "simulator", "finance", "data science"],
    },
];
