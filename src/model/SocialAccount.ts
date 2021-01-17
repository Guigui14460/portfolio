import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SocialAccount {
    name: string;
    username: string;
    url: string;
    iconProperties: IconProp;
    iconColor: string;
}