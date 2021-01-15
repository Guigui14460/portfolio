import { LanguageOrFrameworkOrLibrary } from './LanguageOrFrameworkOrLibrary';

export interface Project {
    name: string;
    description: string;
    repoUrl: string;
    owner: string;
    languagesAndFrameworksAndLibraryUsed: LanguageOrFrameworkOrLibrary[];
}
