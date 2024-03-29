import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Marginer from "../marginer";
import { deviceSize } from "../Responsive";

const NavbarContainer = styled.nav<{ useTransparent: boolean, verySmallMobile: boolean }>`
    height: ${({ verySmallMobile }) => (!verySmallMobile ? "65px" : "auto")};
    display: ${({ verySmallMobile }) => (!verySmallMobile ? "flex" : "block")};
    text-align: ${({ verySmallMobile }) => (!verySmallMobile ? "initial" : "center")};
    align-items: center;
    justify-content: space-between;
    background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "var(--primary-color)"};
`

const AccessibilityContainer = styled.div<{ verySmallMobile: boolean }>`
    height: ${({ verySmallMobile }) => (!verySmallMobile ? "100%" : "auto")};
    display: flex;
    align-items: center;
    justify-content: ${({ verySmallMobile }) => (!verySmallMobile ? "initial" : "center")};
    margin-top: ${({ verySmallMobile }) => (!verySmallMobile ? "initial" : "1em")};
    flex-wrap: wrap;
`;

const AnchorLink = styled(NavLink)<{ fontSize: number | undefined }>`
    font-size: ${({ fontSize }) => (fontSize !== undefined ? fontSize + "px" : "15px")};
    color: var(--color);
    cursor: pointer;
    outline: none;

    &:not(.button-link).active {
        filter: contrast(0.6);
    }

    &:not(.button-link):hover, &:not(.button-link):focus {
        color: var(--color);
        filter: contrast(0.4);
    }
`

const BrandLogo = styled(Link)<{ fontSize: number | undefined }>`
    font-size: ${({ fontSize }) => (fontSize !== undefined ? fontSize + "px" : "20px")};
    color: var(--color);
    cursor: pointer;
    outline: none;

    &:not(.button-link):hover, &:not(.button-link):focus {
        color: var(--color);
        filter: contrast(0.4);
    }
`;

const Navbar = (props: { useTransparent: boolean; }) => {
    const { useTransparent } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet });
    const verySmallMobile = useMediaQuery({ maxWidth: 650 });
    return <NavbarContainer verySmallMobile={verySmallMobile} className="container" useTransparent={useTransparent}>
        <BrandLogo fontSize={!isMobile ? 22 : undefined} to="/">Guillaume Letellier</BrandLogo>
        <AccessibilityContainer verySmallMobile={verySmallMobile}>
            <AnchorLink fontSize={!isMobile ? 16 : undefined} activeClassName="active" to="/publications">Publications</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} activeClassName="active" to="/teaching">Teaching</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} activeClassName="active" to="/projects">Projects</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} activeClassName="active" to="/skills">Skills</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} activeClassName="active" to="/about">About</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} activeClassName="active" to="/contact">Contact</AnchorLink>
        </AccessibilityContainer>
    </NavbarContainer>
}

export default Navbar;
