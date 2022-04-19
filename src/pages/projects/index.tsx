import { ReactElement } from 'react';
import ReactTooltip from 'react-tooltip';
import Card from '../../components/card';
import Grid from '../../components/grid';
import { projectsData, universityProjectsData } from '../../model/data';
import { authorsList } from '../../model/authorsData';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ProjectAuthorTooltipContent } from '../../components/tooltips';
library.add(faGlobe);

const ProjectsPage = () => {
    const authorsLinksTooltip: ReactElement = <ReactTooltip 
            id='project-author-links' getContent={(dataTip) => authorsList.has(dataTip) ? ProjectAuthorTooltipContent(authorsList.get(dataTip)) : null} 
            effect="solid" delayHide={250} delayShow={250} delayUpdate={250} place={"bottom"} border={false} type={"light"} />;
    return <>
        <h1>Projects</h1>
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
                        <Card key={index} project={value} />
                    </Grid>
                })}
            </Grid>
        </section>
        <section id="personnal-projects">
            <h2>Personnal projects</h2>
            <Grid row>
                {projectsData.map((value, index) => {
                    return <Grid key={index} column sm={12} md={6} lg={4}>
                        <Card key={index} project={value} />
                    </Grid>
                })}
            </Grid>
        </section>
        {authorsLinksTooltip}
    </>
};

export default ProjectsPage;
