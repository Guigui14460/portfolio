import styled from "styled-components";
import Marginer from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.nav<{ useTransparent: boolean, verySmallMobile: boolean }>`
    height: ${({ verySmallMobile }) => (!verySmallMobile ? "65px" : "65px")};
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
    const verySmallMobile = useMediaQuery({ maxWidth: 360 });
    return <NavbarContainer verySmallMobile={verySmallMobile} className="container" useTransparent={useTransparent}>
        <BrandLogo fontSize={!isMobile ? 22 : undefined} to="/">Guillaume Letellier</BrandLogo>
        <AccessibilityContainer verySmallMobile={verySmallMobile}>
            <AnchorLink fontSize={!isMobile ? 16 : undefined} to="/projects">Projects</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} to="/skills">Skills</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} to="/about">About</AnchorLink>
            <Marginer direction="horizontal" margin={10} />
            <AnchorLink fontSize={!isMobile ? 16 : undefined} to="/contact">Contact</AnchorLink>
        </AccessibilityContainer>
    </NavbarContainer>
}

export default Navbar;