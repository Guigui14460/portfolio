import styled from "styled-components";
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, SizeProp } from '@fortawesome/fontawesome-svg-core';

export const ImageIcon = styled.img<{ width: number }>`
    width: ${({ width }) => width}px;
    height: auto;
`;

type FontAwesomeIconType = 'brand' | 'solid' | 'regular';

export const FontAwesomeIcon = (props: {type: FontAwesomeIconType, iconName: IconName, size: SizeProp }) => {
    const prefix: IconPrefix = (props.type === "brand" ? "fab" : (props.type === "solid" ? "fas" : "far"));
    const icon: [IconPrefix, IconName] = [prefix, props.iconName];
    return <FAIcon icon={icon} size={props.size} />
};
