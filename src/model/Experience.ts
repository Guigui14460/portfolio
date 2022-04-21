export interface Experience {
    title: string;
    employementType: string;
    from: string;
    to?: string;
    location: string;
    entreprise: string;
    description?: string;
    entrepriseLogo: string,
    entrepriseUrl?: string;
    keywords?: string[];
};

export interface Referent {
    firstName: string;
    lastName: string;
    jobDescription: string;
    url: string;
};

export interface Internship extends Experience {
    subject: string;
    referent: Referent;
    projectUrl?: string;
    associatedTo?: string;
    associatedToUrl?: string;
};

export function isInstanceOfInternship(instance: any) : instance is Internship {
    return "referent" in instance && "subject" in instance;
};

export type ExpType = Experience | Internship;
