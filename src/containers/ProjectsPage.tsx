import { ReactElement } from 'react';
import ReactTooltip from 'react-tooltip';
import { Card } from '../components/card';
import Grid from '../components/grid';
import { ImageIcon, FontAwesomeIcon } from '../components/icons';
import { projectsData, universityProjectsData } from '../model/data';
import { authorsList } from '../model/authorsData';
import { authorHasNoLinks, ProjectAuthor } from '../model/Project'
import { googleScholarIcon, githubIcon, gitlabIcon,linkedinIcon } from "../images/Icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Marginer from '../components/marginer';
library.add(faGlobe);

const TooltipContent = (author: ProjectAuthor | undefined) => {
    if (author === undefined) return null;
    if (authorHasNoLinks(author)) return null;
    return <div style={{ display: "flex" }}>
        {author.portfolioUrl !== undefined ? <a target="_blank" rel="noreferrer" href={author.portfolioUrl} title="Portfolio website"><FontAwesomeIcon type='solid' iconName="globe" size="2x" /></a> : null}
        {
            author.portfolioUrl !== undefined && author.githubProfile !== undefined ?
                <Marginer direction='horizontal' margin={"8px"} /> : null
        }
        {author.githubProfile !== undefined ? <a target="_blank" rel="noreferrer" href={author.githubProfile} title='Github profile'><ImageIcon style={{ color: "white" }} width={26} src={githubIcon} alt="Github icon" /></a>: null}
        {
            author.githubProfile !== undefined && author.gitlabProfile !== undefined ?
                <Marginer direction='horizontal' margin={"8px"} /> : null
        }
        {author.gitlabProfile !== undefined ? <a target="_blank" rel="noreferrer" href={author.gitlabProfile} title="Gitlab profile"><ImageIcon width={26} src={gitlabIcon} alt="Gitlab icon" /></a>: null}
        {
            author.gitlabProfile !== undefined && author.linkedInProfile !== undefined ?
                <Marginer direction='horizontal' margin={"8px"} /> : null
        }
        {author.linkedInProfile !== undefined ? <a target="_blank" rel="noreferrer" href={author.linkedInProfile} title="LinkedIn profile"><ImageIcon width={26} src={linkedinIcon} alt="LinkedIn icon" /></a>: null}
        {
            author.linkedInProfile !== undefined && author.googleScholarProfile !== undefined ?
                <Marginer direction='horizontal' margin={"8px"} /> : null
        }
        {author.googleScholarProfile !== undefined ? <a target="_blank" rel="noreferrer" href={author.googleScholarProfile} title="Google Scholar profile"><ImageIcon width={26} src={googleScholarIcon} alt="Google Scholar icon" /></a>: null}
    </div>
}

export const ProjectsPage = () => {
    const authorsLinksTooltip: ReactElement = <ReactTooltip 
            id='links' getContent={(dataTip) => authorsList.has(dataTip) ? TooltipContent(authorsList.get(dataTip)) : null} 
            effect="solid" delayHide={250} delayShow={250} delayUpdate={250} place={"bottom"} border={false} type={"light"} />;
    return <>
        <h1 data-for="links" data-tip="ab">Projects</h1>
        <p style={{ color: "#ff0000", fontWeight: 700 }}>Only large projects are present. To have more, I advise you to look at my github and gitlab profiles to see a larger panel of projects (small as well as large).</p>
        <p style={{ color: "#cfbd21", fontWeight: 700 }}>Each section are ordered by most recent to more older.</p>
        {/*
            TODO: filtering system with https://react-select.com/home
            - make same anim as demo
            - put language colour (bg)
            - multi select of languages and keywords
            - clearable et searchable
        */}
        <section id="university-projects">
            <h2>University projects</h2>
            <Grid row>
                {universityProjectsData.map((value, index) => {
                    return <Grid key={index} column sm={12} md={6} lg={4}>
                        <Card project={value} />
                    </Grid>
                })}
            </Grid>
        </section>
        <section id="personnal-projects">
            <h2>Personnal projects</h2>
            <Grid row>
                {projectsData.map((value, index) => {
                    return <Grid key={index} column sm={12} md={6} lg={4}>
                        <Card project={value} />
                    </Grid>
                })}
            </Grid>
        </section>
        {authorsLinksTooltip}
    </>
};