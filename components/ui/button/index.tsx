import styles from "@/styles/Button.module.css"
import Link from 'next/link';
import styled from 'styled-components';
import classNames from 'classnames'

const ButtonWrapper = styled.button<{ size?: number }>`
    border: none;
    outline: none;
    padding: 6px 1.8em;
    font-size: ${({ size }) => `${size || 1}em`};
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:focus {
        outline: none;
    }
`;

export const Button = (props: { className?: string; children: React.Component | string | number | boolean | JSX.Element; size?: number; style?: React.CSSProperties }) => {
    const classnames = classNames(
        styles["button"],
        props.className && props.className,
    )

    return <ButtonWrapper size={props.size} className={classnames} style={props.style}>
        {props.children}
    </ButtonWrapper>
};

export const ButtonLink = (props: { targetLink: string; className?: string; children: React.Component | string | number | boolean | JSX.Element; size?: number; style?: React.CSSProperties, title?: string }) => {
    const classnames = classNames(
        styles["button"],
        props.className && props.className,
    )
    
    return <Link href={props.targetLink} className="button-link" title={props.title}>
        <ButtonWrapper size={props.size} className={classnames} style={props.style}>
            {props.children}
        </ButtonWrapper>
    </Link>;
};

export const ButtonExternalLink = (props: { download?: boolean, title: string; targetLink: string; className?: string; target?: string, children: React.Component | string | number | boolean | JSX.Element; size?: number; style?: React.CSSProperties }) => {
    const classnames = classNames(
        styles["button"],
        props.className && props.className,
    )
    
    return <a className="button-link" href={props.targetLink} title={props.title} download={props.download} target={props.target} rel="noreferrer">
        <ButtonWrapper size={props.size} className={classnames} style={props.style}>
            {props.children}
        </ButtonWrapper>
    </a>;
};
