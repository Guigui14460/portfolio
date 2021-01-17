import React from 'react';
import styled from 'styled-components';
import { Language } from '../../model/Language';
import { hexToRgb, contrast } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub, faGitlab);

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

export const Card = (props: { name: string; notFinished?: boolean; officialSiteUrl?: string; repoURL?: string; description: string; languages: Language[]; }) => {
    const { name, repoURL, description, languages, officialSiteUrl, notFinished } = props;
    const isGithubRepo = repoURL && repoURL.includes("github");
    const isGitlabRepo = repoURL && repoURL.includes("gitlab");
    let icon: [IconPrefix, IconName] = ["fab", (isGithubRepo ? "github" : (isGitlabRepo ? "gitlab" : "reddit"))];
    return <CardWrapper notFinished={notFinished}>
       {repoURL ? <a className="project__repo-url" href={repoURL} target="_blank" rel="noreferrer"><h3 className="project__name">{name} {(icon[1] !== "reddit" ? <FontAwesomeIcon size="1x" icon={icon} /> : null)}</h3></a> : <h3 className="project__name">{name} {(icon[1] !== "reddit" ? <FontAwesomeIcon size="1x" icon={icon} /> : null)}</h3>}
       {repoURL ? <a className="project__repo-url" href={repoURL} target="_blank" rel="noreferrer"><p className="project__description">{description}</p></a> : <p className="project__description">{description}</p>}
       {officialSiteUrl !== undefined ? <p>You can have more precision <a href={officialSiteUrl} rel="noreferrer" target="_blank">here</a>.</p> : null}
        <p className="project__languages">Languages : {languages.map((value, index) => {
            return <span style={{ backgroundColor: value.color, color: (contrast(hexToRgb(value.color), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }} key={index}>{value.name}</span>
        })}</p>
    </CardWrapper>
}
