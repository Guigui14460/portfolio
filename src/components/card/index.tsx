import React from 'react';
import styled from 'styled-components';
import { Language } from '../../model/Language';
import { hexToRgb, contrast } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
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

export const Card = (props: { name: string; notFinished?: boolean; officialSiteUrl?: string; repoURL?: string; description: string; languages: Language[]; isPrivate?: boolean, keywords?: string[] }) => {
    const { name, repoURL, description, languages, officialSiteUrl, notFinished,  isPrivate, keywords } = props;
    const isGithubRepo = repoURL && repoURL.includes("github");
    const isGitlabRepo = repoURL && repoURL.includes("gitlab");
    const icon: [IconPrefix, IconName] = ["fab", (isGithubRepo ? "github" : (isGitlabRepo ? "gitlab" : "reddit"))]; // reddit icon because we can't have a null icon
    const icon2: [IconPrefix, IconName] = ["fas", "lock"];
    const iconsElement = <span style={{ width: "40px", textAlign: "right" }}>{(icon[1] !== "reddit" ? <span><FontAwesomeIcon size="1x" icon={icon} /> {(isPrivate ? <FontAwesomeIcon size="1x" icon={icon2} /> : null)}</span> : (isPrivate ? <FontAwesomeIcon size="1x" icon={icon2} /> : null))}</span>;
    const titleElement = <h3 className="project__name">{name} {iconsElement}</h3>;
    const descriptionElement = <p className="project__description">{description}</p>;
    return <CardWrapper notFinished={notFinished}>
       {repoURL ? <a className="project__repo-url" href={repoURL} target="_blank" rel="noreferrer">{titleElement}</a> : titleElement}
       {repoURL ? <a className="project__repo-url" href={repoURL} target="_blank" rel="noreferrer">{descriptionElement}</a> : descriptionElement}
       {officialSiteUrl !== undefined ? <p>You can have more precision <a href={officialSiteUrl} rel="noreferrer" target="_blank">here</a>.</p> : null}
        <p className="project__languages">Languages : {languages.map((value, index) => {
            return <span style={{ backgroundColor: value.color, color: (contrast(hexToRgb(value.color), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }} key={index}>{value.name}</span>
        })}</p>
        {keywords ? <p className="project__languages" style={{ fontSize: "0.8em" }}>Keywords : {keywords.map((value, index) => {
            return <span style={{ backgroundColor: "#dddddd", color: "#333333" }} key={index}>{value}</span>
        })}</p> : null}
    </CardWrapper>
}
