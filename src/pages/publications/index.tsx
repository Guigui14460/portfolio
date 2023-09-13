import { useState } from 'react';
import { MultiValue } from 'react-select';
import ProjectsFilterBar from '../../components/filterBar/FilterBar';
import { Publication, hasLanguagesOrKeywords } from '../../model/Publication';
import { KeywordOption } from '../../model/Options';
import { publicationsData } from '../../data';
import { FontAwesomeIcon } from '../../components/icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Marginer from '../../components/marginer';
import Grid from '../../components/grid';
import { contrast, hexToRgb } from '../../utils';
import { publicationGroupedOptions } from '../../data/optionsData';
library.add(faGlobe);

const CardWrapper = styled.div`
    font-size: 0.8em;

    .project__name {
        margin: 0;
    }

    .project__description {
        text-align: justify;
        margin: 10px 0;
        padding: 0;
    }

    .project__informations {
        margin: 0;
        padding: 0;
    }

    .keywords > span {
        display: inline-block;
        border-radius: 5px;
        padding: 3px 8px;
        margin: 2px 5px;
    }
`;

const PublicationCard = (props: { publication: Publication}) => {
    const { name, description, month, year, publicationLink, image, projectUrl, repoUrl, keywords, authors } = props.publication;

    const isGithubRepo = repoUrl && repoUrl.includes("github");
    const isGitlabRepo = repoUrl && repoUrl.includes("gitlab");
    const icon = (isGithubRepo ? "github" : (isGitlabRepo ? "gitlab" : "reddit")); // reddit icon because we can't have a null icon
    const iconsElement = <span style={{ width: "40px", textAlign: "right" }}>{(icon !== "reddit" ? <FontAwesomeIcon size="1x" iconName="github" type="brand" />: (repoUrl && <FontAwesomeIcon size="1x" iconName="lock" type="solid" />))}</span>;
    const titleElement = <h3 className="project__name">{name}</h3>;
    const descriptionElement = <p className="project__description">{description}</p>;

    return (
        <CardWrapper>
            <Grid row alignItems='center'>
                <Grid column sm={3} md={3} lg={3} padding="8">
                    <img src={image} alt={`View of the "${name}" project`} style={{ width: "100%", height: "auto" }} />
                </Grid>
                <Grid column sm={9} md={9} lg={9} padding="4">
                    {publicationLink ? <a href={publicationLink} title="Repository link" target="_blank" rel="noreferrer">{titleElement}</a>: titleElement}
                    {descriptionElement}
                    <p className='project__informations' style={{ fontSize: "0.9em" }}>
                        Authors: {authors.map((value, authorIndex) => <span key={value.name.split(" ").join("-")}>{value.name}{authorIndex === authors.length - 1 ? "." : ", "}</span>)}
                        <br />
                        Date: {new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(year, month))} {year}
                        <> | </>
                        {repoUrl && (<>
                            Repository: <a href={repoUrl} title="Repository link" target="_blank" rel="noreferrer">{iconsElement}</a>
                        </>)}
                        <> | </>
                        {projectUrl && (<>
                            Project URL: <a href={projectUrl} title="Project link" target="_blank" rel="noreferrer"><FontAwesomeIcon size="1x" iconName="globe" type="solid" /></a>
                        </>)}
                        <br />
                        {keywords && <>Keywords:<span className="keywords" style={{ fontSize: "0.8em" }}>{keywords.map(value =>
                            <span key={value.split(" ").join("-")} style={{ backgroundColor: "#ffd090", color: (contrast(hexToRgb("#ffd090"), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }}>{value}</span>
                        )}</span></>}
                    </p>
                </Grid>
            </Grid>
        </CardWrapper>
    )
}

const PublicationsPage = () => {
    const [filters, setFilters] = useState<MultiValue<KeywordOption>>([]);

    const publicationsGrid = publicationsData
        .filter(value => hasLanguagesOrKeywords(value, filters))
        .sort((a, b) => new Date(a.year, a.month).getTime() - new Date(b.year, b.month).getTime())
        .reverse()
        .map(value => 
        <>
            <PublicationCard publication={value} />
            <Marginer direction='vertical' margin={8} />
        </>
    );

    return <>
        <h1>Publications</h1>
        <ProjectsFilterBar onChange={setFilters} options={publicationGroupedOptions} />
        <Marginer direction='vertical' margin={20} />

        {publicationsGrid}

        <Marginer direction='vertical' margin={20} />

        <h2>ORCID iD</h2>
        <p>You can check my ORCID record at <a href="https://orcid.org/0009-0000-7352-4305"><img alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" width="16" height="16" />https://orcid.org/0009-0000-7352-4305</a>.</p>
        
        <Marginer direction='vertical' margin={20} />
    </>
};

export default PublicationsPage;
