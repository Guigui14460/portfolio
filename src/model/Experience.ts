import { Referent } from "./Referent";

export interface Experience {
    title: string;
    description: string;
    from: Date;
    location: string;
    to?: Date;
    entreprise?: string;
    entrepriseUrl?: string;
    keywords?: string[];
}

export interface Internship extends Experience {
    subject: string;
    referent: Referent;
    projectUrl?: string;
    associatedTo?: string;
    associatedToUrl?: string;
}

export function isInstanceOfInternship(instance: any) : instance is Internship {
    return "referent" in instance && "subject" in instance;
}

export type expType = Experience | Internship;
