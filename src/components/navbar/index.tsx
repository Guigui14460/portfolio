import React from 'react';
import styled from "styled-components";
import Marginer from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.nav<{ useTransparent: boolean }>`
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "var(--primary-color)"};
`

const AccessibilityContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const AnchorLink = styled(Link)<{ fontSize: number | undefined }>`
    font-size: ${({ fontSize }) => (fontSize !== undefined ? fontSize + "px" : "15px")};
    color: var(--color);
    cursor: pointer;
    outline: none;

    &:hover, &:focus {
        color: var(--color);
    }
`

const BrandLogo = styled(AnchorLink)`
    font-size: ${({ fontSize }) => (fontSize !== undefined ? fontSize + "px" : "20px")};
`;

const Navbar = (props: { useTransparent: boolean; }) => {
    const { useTransparent } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    return <NavbarContainer className="container" useTransparent={useTransparent}>
        <BrandLogo fontSize={!isMobile ? 24 : undefined} to="/">Guillaume Letellier</BrandLogo>
        <AccessibilityContainer>
            <AnchorLink fontSize={!isMobile ? 17 : undefined} to="/projects">Projects</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 17 : undefined} to="/skills">Skills</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 17 : undefined} to="/about">About</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 17 : undefined} to="/contact">Contact</AnchorLink>
        </AccessibilityContainer>
    </NavbarContainer>
}
// TODO: à modifier sur les petits téléphones

export default Navbar;