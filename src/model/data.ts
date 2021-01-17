import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    fab, faLinkedin, faTwitter, faFacebookSquare,
    faDiscord, faReddit
} from "@fortawesome/free-brands-svg-icons"
import { SocialAccount } from "./SocialAccount";
import { Project } from './Project';
import languageInformations from "./Language";
import { Reference } from "./Reference";
library.add(faLinkedin, fab, faTwitter, faFacebookSquare, faDiscord, faReddit);

export const firstName: string = "Guillaume";
export const lastName: string = "Letellier";
export const yearOfBorn: string = "07-26-2000";
export const emailAddress: string = "letgui2@gmail.com";
export const phoneShortVersion: string = "+33699120722";
export const phoneLongVersion: string = "(+33) 6 99 12 07 22";
export const address: string = "12 Rue de Suresnes, Colombelles, Normandy, France";

export const worksInProgressProjectsData: Project[] = [
    {
        name: "Hello Caen Application",
        // repoUrl: "https://github.com/Guigui14460/hello-caen-app",
        description: "An application that allows you to securely store your credentials, notes, contacts, credit cards and other information locally. A safe is available to back up his files. This uses the AES encryption protocol. Others are available such as Blowfish, Twofish, RSA, etc...",
        owner: "Hello Caen",
        languages: [languageInformations["dart"]],
        officialSiteUrl: "https://www.hellocaen.com/",
        notFinished: true,
    },
    {
        name: "Password manager",
        // repoUrl: "https://github.com/Guigui14460/password-manager",
        description: "An application that allows you to securely store your credentials, notes, contacts, credit cards and other information locally. A safe is available to back up his files. This uses the AES encryption protocol. Others are available such as Blowfish, Twofish, RSA, etc...",
        owner: "Guigui14460",
        languages: [languageInformations["java"]],
        officialSiteUrl: undefined,
        notFinished: true,
    },
    {
        name: "Trading bot (for cryptocurrencies)",
        repoUrl: "https://github.com/Guigui14460/trading_bot",
        description: "Bot allowing to trade crypto-currencies mainly via different platforms. Different trading strategies are available for short, medium and long term via the different indicators existing in the trading world.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        notFinished: true,
    },
];
export const projectsData: Project[] = [
    {
        name: "Artificial neural network",
        repoUrl: "https://github.com/Guigui14460/neural-network-from-scratch",
        description: "Implementation of an artificial neural network using the book nnfs.io. Python implementation with Numpy, tested with real examples (MNIST, regression). Work on mathematics to improve the optimization of the implementation.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
        officialSiteUrl: "http://nnfs.io",
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
        notFinished: true,
        officialSiteUrl: undefined,
    },
    {
        name: "Automation of project creation for developers",
        repoUrl: "https://github.com/Guigui14460/project-automation",
        description: "Open-source project allowing to generate the base of any project following the conventions of the chosen language. Allows to generate a project in one command line.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
    },
    {
        name: "ProgLangLearn",
        description: "Site offering training on computer science and the world of development. The trainings make it possible to learn a programming language or a framework by working on various projects of different scales.",
        owner: "Guigui14460",
        languages: [languageInformations["python"], languageInformations["html"], languageInformations["javascript"], languageInformations["sass"]],
    },
];

export const universityProjectsData: Project[] = [
    {
        name: "Hello Caen Application",
        // repoUrl: "https://github.com/Guigui14460/hello-caen-app",
        description: "An application that allows you to securely store your credentials, notes, contacts, credit cards and other information locally. A safe is available to back up his files. This uses the AES encryption protocol. Others are available such as Blowfish, Twofish, RSA, etc...",
        owner: "Hello Caen",
        languages: [languageInformations["dart"]],
        officialSiteUrl: "https://www.hellocaen.com/",
        notFinished: true,
    },
    {
        name: "House generator",
        repoUrl: "https://github.com/Guigui14460/intelligence-artificielle",
        description: "Users can generate houses according to constraints (CSP), houses already built (extractions) and plan its construction (planning).",
        owner: "Guigui14460",
        languages: [languageInformations["java"]],
    },
    {
        name: "Pandemic site",
        repoUrl: "https://github.com/Guigui14460/optimisateur-de-wargame",
        description: "Site allowing to put into practice our knowledge in PHP.",
        owner: "Guigui14460",
        languages: [languageInformations["php"], languageInformations["html"]],
    },
    {
        name: "N-body simulator",
        repoUrl: "https://github.com/Guigui14460/simulateur-n-corps",
        description: "Users can simulate N gravitationally interacting objects using Newton’s laws of motion. In this one, we can load a simulation, create one with a random generation of bodies. Calculation optimization with the Barnes-Hut algorithm.",
        owner: "Guigui14460",
        languages: [languageInformations["java"]],
    },
    {
        name: "Wargame optimizer",
        repoUrl: "https://github.com/Guigui14460/optimisateur-de-wargame",
        description: "Users can play a strategy game in front of a computer and can, among other things, ask an algorithm to generate an army for them that will allow them to win in the vast majority of cases.",
        owner: "Guigui14460",
        languages: [languageInformations["python"]],
    },
];

export const socialAccounts: SocialAccount[] = [
    {name: "Twitter", username: "@GuiguiLet", url: "https://twitter.com/GuiguiLet", iconProperties: ["fab", "twitter"], iconColor: "#1DA1F2",},
    {name: "LinkedIn", username: "Guillaume Letellier", url: "https://www.linkedin.com/in/guillaume-letellier-466418193/", iconProperties: ["fab", "linkedin"], iconColor: "#2867B2",},
    {name: "Reddit",username: "Guigui14460",url: "https://twitter.com/GuiguiLet",iconProperties: ["fab", "reddit"],iconColor: "#FF4500",},
    {name: "Discord", username: "Guigui#7684", url: "https://discordapp.com/users/339384664118657034/", iconProperties: ["fab", "discord"], iconColor: "#7289DA",},
    {name: "Facebook", username: "Guigui Letellier", url: "https://www.facebook.com/guiguiletellier.14/", iconProperties: ["fab", "facebook-square"], iconColor: "#4267B2",},
];

export const referencesData: Reference[] = [];