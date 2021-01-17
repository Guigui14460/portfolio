import { Language } from './Language';

export interface Project {
    name: string;
    description: string;
    repoUrl?: string;
    owner: string;
    languages: Language[];
    officialSiteUrl?: string;
    notFinished?: boolean;
}
