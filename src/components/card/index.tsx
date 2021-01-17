import React from 'react';
import styled from 'styled-components';
import languageInformations from '../../model/Language';
import { hexToRgb, contrast } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub, faGitlab);

const CardWrapper = styled.div`
    color: #ffffff;

    a {
        color: #ffffff;
    }

    .project__name {
        display: flex;
        justify-content: space-between;
        vertical-align: center;
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

export const Card = (props: { name: string; repoURL?: string; description: string; languages: string[]; }) => {
    const { name, repoURL, description, languages } = props;
    const isGithubRepo = repoURL && repoURL.includes("github");
    const isGitlabRepo = repoURL && repoURL.includes("gitlab");
    let icon: [IconPrefix, IconName] = ["fab", (isGithubRepo ? "github" : (isGitlabRepo ? "gitlab" : "home"))];
    return <CardWrapper>
       {repoURL ? <a href={repoURL} target="_blank" rel="noreferrer"><h3 className="project__name">{name} {(icon[-1] !== "home" ? <FontAwesomeIcon size="1x" icon={icon} /> : null)}</h3></a> : <h3 className="project__name">{name} {(icon[-1] !== "home" ? <FontAwesomeIcon size="1x" icon={icon} /> : null)}</h3>}
       {repoURL ? <a href={repoURL} target="_blank" rel="noreferrer"><p className="project__description">{description}</p></a> : <p className="project__description">{description}</p>}
        <p className="project__languages">Languages : {languages.map((value, index) => {
            let { name, color } = languageInformations[value];
            return <span style={{ backgroundColor: color, color: (contrast(hexToRgb(color), hexToRgb("#000000")) < 3 ? "#ffffff" : "#000000") }} key={index}>{name}</span>;
        })}</p>
    </CardWrapper>;
}
