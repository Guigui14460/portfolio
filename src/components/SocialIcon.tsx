import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const SocialIcon = styled(FontAwesomeIcon)<{ colorUsed: string }>`
    color: ${({ colorUsed }) => colorUsed};
`;

export const SocialIconClickable = (props: { 
    url: string; title: string; iconProps: IconProp; 
    iconSize: "xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined; 
    iconColor: string; }) : JSX.Element => {
    const { url, title, iconProps, iconSize, iconColor } = props;
    return <a href={url} title={title} target="_blank" rel="noreferrer">
        <SocialIcon icon={iconProps} size={iconSize} colorUsed={iconColor} />
    </a>
}

export const SocialIconContainer = styled.div`
display: flex;
text-align: center;
justify-content: space-evenly;
`;