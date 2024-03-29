import { Fragment } from "react";
import Marginer from "../marginer";
import { FontAwesomeIcon, ImageIcon } from "../icons";
import { authorHasNoLinks, ProjectAuthor } from "../../model/ProjectAuthor";
import styled from "styled-components";

const ProjectAuthorWrapper = styled.div`
    & > a {
        transition: opacity 0s ease;
    }
`;

export const ProjectAuthorTooltipContent = (author: ProjectAuthor | undefined) => {
    if (author === undefined) return null;
    if (authorHasNoLinks(author)) return null;
    const links = [];
    if(author.portfolioUrl) links.push(<a target="_blank" rel="noreferrer" href={author.portfolioUrl} title="Portfolio website"><FontAwesomeIcon type='solid' iconName="globe" size="2x" /></a>)
    if(author.githubProfile) links.push(<a target="_blank" rel="noreferrer" href={author.githubProfile} title='Github profile'><ImageIcon width={26} src="/images/socials/github.svg" alt="Github icon" /></a>)
    if(author.gitlabProfile) links.push(<a target="_blank" rel="noreferrer" href={author.gitlabProfile} title="Gitlab profile"><ImageIcon width={26} src="/images/socials/gitlab.svg" alt="Gitlab icon" /></a>)
    if(author.linkedInProfile) links.push(<a target="_blank" rel="noreferrer" href={author.linkedInProfile} title="LinkedIn profile"><ImageIcon width={26} src="/images/socials/linkedin.svg" alt="LinkedIn icon" /></a>)
    if(author.googleScholarProfile) links.push(<a target="_blank" rel="noreferrer" href={author.googleScholarProfile} title="Google Scholar profile"><ImageIcon width={26} src="/images/socials/googleScholar.svg" alt="Google Scholar icon" /></a>)

    return <ProjectAuthorWrapper style={{ display: "flex", margin: 0, padding: 0 }}>
        {links.map((value, index) => {
            return <Fragment key={index}>{index !== 0 && <Marginer direction='horizontal' margin={"8px"} />}{value}</Fragment>
        })}
    </ProjectAuthorWrapper>
};
