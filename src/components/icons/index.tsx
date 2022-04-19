import styled from "styled-components";
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, SizeProp, IconProp } from '@fortawesome/fontawesome-svg-core';

// image icons
export const ImageIcon = styled.img<{ width: number }>`
    width: ${({ width }) => width}px;
    height: auto;
`;

// font awesome icons
type FontAwesomeIconType = 'brand' | 'solid' | 'regular';

export const FontAwesomeIcon = (props: {type: FontAwesomeIconType, iconName: IconName, size: SizeProp }) => {
    const prefix: IconPrefix = (props.type === "brand" ? "fab" : (props.type === "solid" ? "fas" : "far"));
    const icon: [IconPrefix, IconName] = [prefix, props.iconName];
    return <FAIcon icon={icon} size={props.size} />
};

// social icons
export const SocialIcon = styled(FAIcon)<{ colorused: string }>`
    color: ${({ colorused }) => colorused};
`;
export const SocialIconContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-evenly;
`;

export const SocialIconClickable = (props: { 
        url: string; title: string; iconProps: IconProp; 
        iconSize: SizeProp; iconColor: string; 
    }) : JSX.Element => {
    const { url, title, iconProps, iconSize, iconColor } = props;
    return <a href={url} title={title} target="_blank" rel="noreferrer">
        <SocialIcon icon={iconProps} size={iconSize} colorused={iconColor} />
    </a>
}
