import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    fab, faLinkedin, faTwitter, faFacebookSquare,
    faDiscord, faReddit
} from "@fortawesome/free-brands-svg-icons"
import { SocialAccount } from "./SocialAccount";
import { Project } from './Project';
import { UniversityProject } from './UniversityProject';
library.add(faLinkedin, fab, faTwitter, faFacebookSquare, faDiscord, faReddit);

export const firstName: string = "Guillaume";
export const lastName: string = "Letellier";
export const yearOfBorn: string = "07-26-2000";
export const smallDescription: string = `I am a french student in computer science option AI at University of Caen Normandy.\n
I've been coming from Caen for as long as I can remember.\n
I'm passionate about science in general, but more specifically about computers and physics.`;
export const emailAddress: string = "letgui2@gmail.com";
export const phoneShortVersion: string = "+33699120722";
export const phoneLongVersion: string = "(+33) 6 99 12 07 22";
export const address: string = "12 Rue de Suresnes, Colombelles, Normandy, France";


export const worksInProgressProjectsData: Project[] = [];
export const projectsData: Project[] = [];
export const universityProjectsData: UniversityProject[] = [];

export const socialAccounts: SocialAccount[] = [
    {name: "Twitter", username: "@GuiguiLet", url: "https://twitter.com/GuiguiLet", iconProperties: ["fab", "twitter"], iconColor: "#1DA1F2",},
    {name: "LinkedIn", username: "Guillaume Letellier", url: "https://www.linkedin.com/in/guillaume-letellier-466418193/", iconProperties: ["fab", "linkedin"], iconColor: "#2867B2",},
    {name: "Reddit",username: "Guigui14460",url: "https://twitter.com/GuiguiLet",iconProperties: ["fab", "reddit"],iconColor: "#FF4500",},
    {name: "Discord", username: "Guigui#7684", url: "https://discordapp.com/users/339384664118657034/", iconProperties: ["fab", "discord"], iconColor: "#7289DA",},
    {name: "Facebook", username: "Guigui Letellier", url: "https://www.facebook.com/guiguiletellier.14/", iconProperties: ["fab", "facebook-square"], iconColor: "#4267B2",},
];