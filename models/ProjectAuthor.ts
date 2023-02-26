export interface ProjectAuthor {
    id: string;
    name: string;
    googleScholarProfile?: string;
    githubProfile?: string;
    gitlabProfile?: string;
    linkedInProfile?: string;
    portfolioUrl?: string;
};

export const authorHasNoLinks = (author: ProjectAuthor | undefined) => {
    if (author === undefined) return false;
    return author.googleScholarProfile === undefined && author.githubProfile === undefined && 
           author.gitlabProfile === undefined && author.linkedInProfile === undefined &&
           author.portfolioUrl === undefined;
};

export const getOnlyAuthors = (authors: (ProjectAuthor | undefined)[]) => {
    return authors.filter(item => item) as ProjectAuthor[];
};
