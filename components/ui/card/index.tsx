import { Fragment } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '../icons'
import { hexToRgb, contrast } from '@/utils/color';
import { Project } from '@/models/Project';
import { authorHasNoLinks } from '@/models/ProjectAuthor';
import Link from 'next/link';
library.add(faGithub, faGitlab, faLock);

const CardWrapper = styled.div<{ notFinished?: boolean, padding?: string }>`
    color: var(--color);
    padding: ${({ padding }) => { if(padding) return padding; return "0" }};
    transition: all 250ms ease;
    height: 100%;

    &:hover {
        background-color: var(--background-color-darker);
        border-radius: 8px;
    }

    .project__repo-url {
        color: var(--color);
    }

    .project__name {
        display: flex;
        justify-content: space-between;
        ${({ notFinished }) => {
            return (notFinished && "font-style: italic;");
        }};
    }

    .project__description {
        text-align: justify;
    }

    .project__languages > a,
    .project__languages > span {
        display: inline-block;
        border-radius: 5px;
        padding: 3px 8px;
        margin: 2px 5px;
    }

    .project__languages > a:hover,
    .project__languages > a:focus {
        filter: contrast(0.75);
    }

    .project__authors__link {
        cursor: pointer;
    }
`;

const Card = (props: { project: Project, padding?: string }) => {
    const { name, repoUrl, description, languages, officialSiteUrl, officialSiteUrlTitle, notFinished, isPrivate, keywords, authors, leader } = props.project;
    const isGithubRepo = repoUrl && repoUrl.includes("github");
    const isGitlabRepo = repoUrl && repoUrl.includes("gitlab");
    const icon = (isGithubRepo ? "github" : (isGitlabRepo ? "gitlab" : "reddit")); // reddit icon because we can't have a null icon
    const iconsElement = <span style={{ flex: "0 0 1em", paddingLeft: "5px", textAlign: "right" }}>{(icon !== "reddit" ? <span><FontAwesomeIcon size="1x" iconName="github" type="brand" /> {(isPrivate && <FontAwesomeIcon size="1x" iconName="lock" type="solid" />)}</span>: (isPrivate && <FontAwesomeIcon size="1x" iconName="lock" type="solid" />))}</span>;
    const titleElement = <h3 className="project__name">{name} {iconsElement}</h3>;
    const descriptionElement = <p className="project__description">{description}</p>;
    return <CardWrapper notFinished={notFinished} padding={props.padding} className="project">
       {repoUrl ? <a className="project__repo-url" href={repoUrl} title="Repository link" target="_blank" rel="noreferrer">{titleElement}</a>: titleElement}
       {repoUrl ? <a className="project__repo-url" href={repoUrl} title="Repository link" target="_blank" rel="noreferrer">{descriptionElement}</a>: descriptionElement}
       {officialSiteUrl && <p>You can have more precision on the {
                officialSiteUrl.indexOf("http") !== -1 ? 
                    <a href={officialSiteUrl} className="link" rel="noreferrer" target="_blank">{officialSiteUrlTitle}</a>
                    : <Link href={officialSiteUrl} className="link">{officialSiteUrlTitle}</Link>
           }.</p>}
        <p className="project__languages">Languages: {languages.map((value, languageIndex) =>
            <a key={languageIndex} style={{ backgroundColor: value.color, color: (contrast(hexToRgb(value.color), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }}
                href={value.link} target="_blank" rel="noreferrer">{value.name}</a>
        )}</p>
        {keywords && <p className="project__languages" style={{ fontSize: "0.8em" }}>Keywords: {keywords.map((value, keywordIndex) =>
            <span key={keywordIndex} style={{ backgroundColor: "#cccccc", color: "#333333" }}>{value}</span>
        )}</p>}
        {authors && <p className='project__authors'>Authors: {authors.map((value, authorIndex) => {
            const hasLinks = !authorHasNoLinks(value);
            let isLeader = false;
            if(value === leader) isLeader = true;

            return <Fragment key={authorIndex}>
                {(authorIndex !== 0) && <>, </>}
                <span className={hasLinks ? "project__authors__link" : undefined} style={{ fontWeight: (isLeader ? "bold" : "normal") }} 
                      data-for="project-author-links" data-tip={value.id} tabIndex={0}>
                    {value.name}
                </span>
            </Fragment>
        })}</p>}
    </CardWrapper>
}

export default Card;
