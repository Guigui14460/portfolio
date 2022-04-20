import { authorHasNoLinks, ProjectAuthor } from "../../model/Project";
import { FontAwesomeIcon, ImageIcon } from "../icons";
import Marginer from "../marginer";
import { googleScholarIcon, githubIcon, gitlabIcon,linkedinIcon } from "../../images/Icons";
import { Fragment } from "react";

export const ProjectAuthorTooltipContent = (author: ProjectAuthor | undefined) => {
    if (author === undefined) return null;
    if (authorHasNoLinks(author)) return null;
    const links = [];
    if(author.portfolioUrl) links.push(<a target="_blank" rel="noreferrer" href={author.portfolioUrl} title="Portfolio website"><FontAwesomeIcon type='solid' iconName="globe" size="2x" /></a>)
    if(author.githubProfile) links.push(<a target="_blank" rel="noreferrer" href={author.githubProfile} title='Github profile'><ImageIcon style={{ color: "white" }} width={26} src={githubIcon} alt="Github icon" /></a>)
    if(author.gitlabProfile) links.push(<a target="_blank" rel="noreferrer" href={author.gitlabProfile} title="Gitlab profile"><ImageIcon width={26} src={gitlabIcon} alt="Gitlab icon" /></a>)
    if(author.linkedInProfile) links.push(<a target="_blank" rel="noreferrer" href={author.linkedInProfile} title="LinkedIn profile"><ImageIcon width={26} src={linkedinIcon} alt="LinkedIn icon" /></a>)
    if(author.googleScholarProfile) links.push(<a target="_blank" rel="noreferrer" href={author.googleScholarProfile} title="Google Scholar profile"><ImageIcon width={26} src={googleScholarIcon} alt="Google Scholar icon" /></a>)

    return <div style={{ display: "flex" }}>
        {links.map((value, index) => {
            return <Fragment key={index}>{index !== 0 ? <Marginer direction='horizontal' margin={"8px"} /> : null}{value}</Fragment>
        })}
    </div>
}
