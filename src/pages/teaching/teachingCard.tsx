import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { hexToRgb, contrast } from '../../utils';
import { Teaching } from '../../model/Teaching';

const TeachingCardWrapper = styled.div<{ padding?: string }>`
    color: var(--color);
    padding: ${({ padding }) => { if(padding) {return padding} else {return "0"} }};
    transition: all 250ms ease;
    height: 100%;

    &:hover {
        background-color: var(--background-color-darker);
        border-radius: 8px;
    }

    .teaching__repo-url {
        color: var(--color);
    }

    .teaching__name {
        display: flex;
        justify-content: space-between;
        vertical-align: center;
    }
    .teaching__name:has(+ .teaching__date) {
        margin-bottom: 0px;
    }

    .teaching__description {
        text-align: justify;
    }

    .teaching__date {
        font-size: 0.75em;
    }

    .teaching__languages > a,
    .teaching__languages > span {
        display: inline-block;
        border-radius: 5px;
        padding: 3px 8px;
        margin: 2px 5px;
    }

    .teaching__languages > a:hover,
    .teaching__languages > a:focus {
        filter: contrast(0.75);
    }
`;

const TeachingCard = (props: { teaching: Teaching, padding?: string }) => {
    const { name, description, where, beginDate, endDate, repoUrl, languages, officialSiteUrl, officialSiteUrlTitle, keywords } = props.teaching;
    const titleElement = <h3 className="teaching__name">{name} at {where}</h3>;
    const datesElement = <span className="teaching__date">{beginDate} - {endDate}</span>;
    const descriptionElement = <p className="teaching__description">{description}</p>;
    return <TeachingCardWrapper padding={props.padding} className="teaching">
       {repoUrl ? <a className="teaching__repo-url" href={repoUrl} title="Repository link" target="_blank" rel="noreferrer">{titleElement}</a>: titleElement}
       {datesElement}
       {repoUrl ? <a className="teaching__repo-url" href={repoUrl} title="Repository link" target="_blank" rel="noreferrer">{descriptionElement}</a>: descriptionElement}
       {officialSiteUrl && <p>You can have more precision on the {
                officialSiteUrl.indexOf("http") !== -1 ? 
                    <a href={officialSiteUrl} className="link" rel="noreferrer" target="_blank">{officialSiteUrlTitle}</a>
                    : <HashLink to={officialSiteUrl} className="link">{officialSiteUrlTitle}</HashLink>
           }.</p>}
        <p className="teaching__languages">Languages: {languages.map(value =>
            <a key={value.name.split(" ").join("-")} style={{ backgroundColor: value.color, color: (contrast(hexToRgb(value.color), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }}
                href={value.link} target="_blank" rel="noreferrer">{value.name}</a>
        )}</p>
        {keywords && <p className="teaching__languages" style={{ fontSize: "0.8em" }}>Keywords: {keywords.map(value =>
            <span key={value.split(" ").join("-")} style={{ backgroundColor: "#cccccc", color: "#333333" }}>{value}</span>
        )}</p>}
    </TeachingCardWrapper>
}

export default TeachingCard;
