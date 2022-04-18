import { Card } from '../components/card';
import Grid from '../components/grid';
import { projectsData, universityProjectsData } from '../model/data';

export const ProjectsPage = () => {
    return <>
        <h1>Projects</h1>
        <span style={{ color: "#ff0000", fontWeight: 700 }}>Each section are ordered by most recent to more older.</span>
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
    </>
};