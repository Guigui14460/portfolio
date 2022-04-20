import styled from 'styled-components';
import { hexToRgb, contrast } from '../../utils';
import { FontAwesomeIcon } from '../../components/icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../model/Project';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
library.add(faGithub, faGitlab, faLock);

const CardWrapper = styled.div<{ notFinished?: boolean }>`
    color: #ffffff;

    .project__repo-url {
        color: #ffffff;
    }

    .project__name {
        display: flex;
        justify-content: space-between;
        vertical-align: center;
        ${({ notFinished }) => {
            return (notFinished ? "font-style: italic;" : null);
        }};
    }

    .project__description {
        text-align: justify;
    }

    .project__languages > span {
        display: inline-block;
        border-radius: 5px;
        padding: 3px 8px;
        margin: 2px 5px;
    }
`;

const Card = (props: { project: Project }) => {
    const { name, repoUrl, description, languages, officialSiteUrl, notFinished, isPrivate, keywords, authors, leader } = props.project;
    const isGithubRepo = repoUrl && repoUrl.includes("github");
    const isGitlabRepo = repoUrl && repoUrl.includes("gitlab");
    const icon = (isGithubRepo ? "github" : (isGitlabRepo ? "gitlab" : "reddit")); // reddit icon because we can't have a null icon
    const iconsElement = <span style={{ width: "40px", textAlign: "right" }}>{(icon !== "reddit" ? <span><FontAwesomeIcon size="1x" iconName="github" type="brand" /> {(isPrivate ? <FontAwesomeIcon size="1x" iconName="lock" type="solid" /> : null)}</span> : (isPrivate ? <FontAwesomeIcon size="1x" iconName="lock" type="solid" /> : null))}</span>;
    const titleElement = <h3 className="project__name">{name} {iconsElement}</h3>;
    const descriptionElement = <p className="project__description">{description}</p>;
    return <CardWrapper notFinished={notFinished}>
       {repoUrl ? <a className="project__repo-url" href={repoUrl} target="_blank" rel="noreferrer">{titleElement}</a> : titleElement}
       {repoUrl ? <a className="project__repo-url" href={repoUrl} target="_blank" rel="noreferrer">{descriptionElement}</a> : descriptionElement}
       {officialSiteUrl !== undefined ? <p>You can have more precision {
                officialSiteUrl.indexOf("http") !== -1 ? 
                    <a href={officialSiteUrl} className="link" rel="noreferrer" target="_blank">here</a>
                    : <Link to={officialSiteUrl} className="link">here</Link>
           }.</p> : null}
        <p className="project__languages">Languages : {languages.map((value, languageIndex) =>
            <span key={languageIndex} style={{ backgroundColor: value.color, color: (contrast(hexToRgb(value.color), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }}>{value.name}</span>
        )}</p>
        {keywords ? <p className="project__languages" style={{ fontSize: "0.8em" }}>Keywords : {keywords.map((value, keywordIndex) =>
            <span key={keywordIndex} style={{ backgroundColor: "#dddddd", color: "#333333" }}>{value}</span>
        )}</p> : null}
        {authors ? <p className='project__authors'>Authors : {authors.map((value, authorIndex) => {
            let isLeader = false;
            if(value === leader) isLeader = true;

            return <Fragment key={authorIndex}>{(authorIndex !== 0) ? <>, </> : null}<span style={{ fontWeight: (isLeader ? "bold" : "normal") }} data-for="project-author-links" data-tip={value.id}>{value.name}</span></Fragment>
        })}</p>: null}
    </CardWrapper>
}

export default Card;
