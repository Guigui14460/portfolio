import { ReactElement, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { MultiValue } from 'react-select';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/card';
import Grid from '../../components/grid';
import { ProjectAuthorTooltipContent } from '../../components/tooltips';
import ObjectFilterBar from '../../components/filterBar/FilterBar';
import { hasLanguagesOrKeywords } from '../../model/Project';
import { KeywordOption, LanguageOption } from '../../model/Options';
import { authorsList, groupedOptions, projectsData, universityProjectsData } from '../../data';
library.add(faGlobe);

const ProjectsPage = () => {
    const [filters, setFilters] = useState<MultiValue<LanguageOption | KeywordOption>>([]);

    const authorsLinksTooltip: ReactElement = <ReactTooltip 
            id='project-author-links' getContent={(dataTip) => authorsList.has(dataTip) && ProjectAuthorTooltipContent(authorsList.get(dataTip))} 
            effect="solid" delayHide={250} delayShow={200} delayUpdate={100} place="bottom" border type='light' />;
    const universityProjectsGrid = universityProjectsData.filter(value => hasLanguagesOrKeywords(value, filters)).map(value =>
        <Grid key={value.name.split(" ").join("-")} column sm={12} md={6} lg={4} padding="0"><Card key={value.name.split(" ").join("-")} project={value} padding="0.75rem" /></Grid>
    );
    const personalProjectsGrid = projectsData.filter(value => hasLanguagesOrKeywords(value, filters)).map(value => 
        <Grid key={value.name.split(" ").join("-")} column sm={12} md={6} lg={4} padding="0"><Card key={value.name.split(" ").join("-")} project={value} padding="0.75rem" /></Grid>
    );

    return <>
        <h1>Projects</h1>
        <p style={{ color: "#c51010", fontWeight: 700 }}>Only large projects are present. To have more, I advise you to look at my github and gitlab profiles to see a larger panel of projects (small as well as large).</p>
        <p style={{ color: "#bfa110", fontWeight: 700 }}>Each section are ordered by most recent to more older.</p>
        <ObjectFilterBar
            onChange={setFilters}
            options={groupedOptions}
            name="projects-search-bar"
            noOptionsMessage="No more languages or keywords to select 😢"
            placeholder="Select options to filter projects"
        />

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
