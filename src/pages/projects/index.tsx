import { ReactElement, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Card from '../../components/card';
import Grid from '../../components/grid';
import ProjectsSearchBar from './searchbar';
import { projectsData, universityProjectsData } from '../../model/data';
import { authorsList } from '../../model/authorsData';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ProjectAuthorTooltipContent } from '../../components/tooltips';
import { KeywordOption, LanguageOption } from '../../model/Options';
import { MultiValue } from 'react-select';
import { hasLanguagesOrKeywords } from '../../model/Project';
library.add(faGlobe);

const ProjectsPage = () => {
    const [filters, setFilters] = useState<MultiValue<LanguageOption | KeywordOption>>([]);

    const authorsLinksTooltip: ReactElement = <ReactTooltip 
            id='project-author-links' getContent={(dataTip) => authorsList.has(dataTip) ? ProjectAuthorTooltipContent(authorsList.get(dataTip)) : null} 
            effect="solid" delayHide={250} delayShow={250} delayUpdate={250} place={"bottom"} border={false} type={"light"} />;
    const universityProjectsGrid = universityProjectsData.filter(value => hasLanguagesOrKeywords(value, filters)).map((value, index) =>
        <Grid key={index} column sm={12} md={6} lg={4}><Card project={value} /></Grid>
    );
    const personalProjectsGrid = projectsData.filter(value => hasLanguagesOrKeywords(value, filters)).map((value, index) => 
        <Grid key={index} column sm={12} md={6} lg={4}><Card project={value} /></Grid>
    );

    return <>
        <h1>Projects</h1>
        <p style={{ color: "#e93737", fontWeight: 700 }}>Only large projects are present. To have more, I advise you to look at my github and gitlab profiles to see a larger panel of projects (small as well as large).</p>
        <p style={{ color: "#cfbd21", fontWeight: 700 }}>Each section are ordered by most recent to more older.</p>
        <ProjectsSearchBar onChange={setFilters} />

        {
            universityProjectsGrid.length !== 0 && 
                <section id="university-projects">
                    <h2>University projects</h2>
                    <Grid row>
                        {universityProjectsGrid}
                    </Grid>
                </section>
        }
        {
            personalProjectsGrid.length !== 0 &&
            <section id="personal-projects">
                <h2>Personal projects</h2>
                <Grid row>
                    {personalProjectsGrid}
                </Grid>
            </section>
        }

        {authorsLinksTooltip}
    </>
};

export default ProjectsPage;
