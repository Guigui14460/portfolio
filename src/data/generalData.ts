import { library } from "@fortawesome/fontawesome-svg-core";
import {
    fab, faLinkedin, faTwitter, faFacebookSquare,
    faDiscord, faReddit
} from "@fortawesome/free-brands-svg-icons"
import { SocialAccount } from "../model/SocialAccount";
import { ProjectAuthor } from '../model/ProjectAuthor';
import authorsList from "./authorsData";
library.add(faLinkedin, fab, faTwitter, faFacebookSquare, faDiscord, faReddit);

export const firstName: string = "Guillaume";
export const lastName: string = "Letellier";
export const yearOfBorn: string = "07-26-2000";
export const emailAddress: string = "letgui2@gmail.com";
export const phoneShortVersion: string = "+33699120722";
export const phoneLongVersion: string = "+33 (0)6 99 12 07 22";
export const address: string = "12 Rue de Suresnes, Colombelles, Normandy, France";
const linkedInUrl: string = "https://www.linkedin.com/in/guillaume-letellier/";

export const socialAccounts: SocialAccount[] = [
    { name: "Twitter", username: "@HadesGuigui", url: "https://twitter.com/HadesGuigui", iconProperties: ["fab", "twitter"], iconColor: "#1DA1F2", },
    { name: "LinkedIn", username: "Guillaume Letellier", url: linkedInUrl, iconProperties: ["fab", "linkedin"], iconColor: "#2867B2", },
    { name: "Reddit", username: "Guigui14460", url: "https://www.reddit.com/user/Guigui14460", iconProperties: ["fab", "reddit"], iconColor: "#FF4500", },
    { name: "Discord", username: "HadesGuigui#4622", url: "https://discordapp.com/users/962737139894845460/", iconProperties: ["fab", "discord"], iconColor: "#7289DA", },
    { name: "Facebook", username: "Guigui Letellier", url: "https://www.facebook.com/guiguiletellier.14/", iconProperties: ["fab", "facebook-square"], iconColor: "#4267B2", },
];

export const me: ProjectAuthor = {
    id: "gl",
    name: firstName + " " + lastName,
    linkedInProfile: linkedInUrl,
    githubProfile: "https://github.com/Guigui14460",
    gitlabProfile: "https://gitlab.com/Guigui14460",
};
authorsList.set("gl", me);
