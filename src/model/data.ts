import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { 
    fab, faLinkedin, faTwitter, faFacebookSquare,
    faDiscord, faReddit
} from "@fortawesome/free-brands-svg-icons"
import { Project } from './Project';
import { UniversityProject } from './UniversityProject';
import { EducationalBackground } from './EducationalBackground';
library.add(faLinkedin, fab, faTwitter, faFacebookSquare, faDiscord, faReddit);


export const projectsData: Project[] = [];

export const universityProjectsData: UniversityProject[] = [];

export const educationalBackground: EducationalBackground[] = [
    {
        establishment: "University of Caen Normandy",
        diploma: "BSC degree in computer science",
        results: "not published and with honors for the first two years",
        yearOfDiploma: 2021,
    },
    {
        establishment: "Salvador Allende High School in Herouville-Saint-Clair",
        diploma: "High-School diploma",
        results: "with honors",
        yearOfDiploma: 2018,
    },
];

export const firstName = "Guillaume";
export const lastName = "Letellier";
export const yearOfBorn = "07/26/2000";
export const smallDescription = `I am a french student in computer science option AI at University of Caen Normandy.\n
I've been coming from Caen for as long as I can remember.\n
I'm passionate about science in general, but more specifically about computers and physics.`;
export const emailAddress = "letgui2@gmail.com";

export interface SocialAccount {
    name: string;
    url: string;
    iconProperties: IconProp;
    iconColor: string;
    username: string,
}

export const socialAccounts: SocialAccount[] = [
    {
        name: "Twitter",
        url: "https://twitter.com/GuiguiLet",
        iconProperties: ["fab", "twitter"],
        iconColor: "#1DA1F2",
        username: "@GuiguiLet",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guillaume-letellier-466418193/",
        iconProperties: ["fab", "linkedin"],
        iconColor: "#2867B2",
        username: "Guillaume Letellier",
    },
    {
        name: "Reddit",
        url: "https://twitter.com/GuiguiLet",
        iconProperties: ["fab", "reddit"],
        iconColor: "#FF4500",
        username: "Guigui14460",
    },
    {
        name: "Discord",
        url: "https://discordapp.com/users/339384664118657034/",
        iconProperties: ["fab", "discord"],
        iconColor: "#7289DA",
        username: "Guigui#7684",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/guiguiletellier.14/",
        iconProperties: ["fab", "facebook-square"],
        iconColor: "#4267B2",
        username: "Guigui Letellier",
    },
];