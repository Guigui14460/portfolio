import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './buttons.css';

const ButtonWrapper = styled.button<{ size?: number }>`
    border: none;
    outline: none;
    padding: 6px 1.8em;
    font-size: ${({size}) => (size ? size + "px" : "1em")};
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:focus {
        outline: none;
    }
`;

export const Button = (props: { className?: string; children: React.Component|string|number|boolean|JSX.Element; size?: number; }) => {
    return <ButtonWrapper size={props.size} className={"button " + props.className}>
        {props.children}
    </ButtonWrapper>
};

export const ButtonLink = (props: { targetLink: string; className?: string; children: React.Component|string|number|boolean|JSX.Element; size?: number; }) => {
    return <Link to={props.targetLink} className="button-link">
        <ButtonWrapper size={props.size} className={"button " + props.className}>
            {props.children}
        </ButtonWrapper>
    </Link>;
};

export const ButtonExternalLink = (props: { download?: boolean, title: string; targetLink: string; className?: string; children: React.Component|string|number|boolean|JSX.Element; size?: number; }) => {
    return <a className="button-link" href={props.targetLink} title={props.title} download={props.download} rel="noreferrer">
        <ButtonWrapper size={props.size} className={"button " + props.className}>
            {props.children}
        </ButtonWrapper>
    </a>;
};