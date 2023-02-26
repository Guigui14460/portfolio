import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Marginer from "../marginer";
import { deviceSize } from "../Responsive";

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

    &:not(.button-link).active {
        filter: contrast(0.6);
    }

    &:not(.button-link):hover, &:not(.button-link):focus {
        color: var(--color);
        filter: contrast(0.4);
    }
`
function NavLink({ href, exact, children, fontSize }: {
    href: string,
    exact?: boolean,
    children: ReactNode | ReactNode[],
    fontSize?: number,
}) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
        <AnchorLink href={href} className={`${isActive ? "active" : ""}`} fontSize={fontSize}>
            {children}
        </AnchorLink>
    );
}

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
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    const verySmallMobile = useMediaQuery({ maxWidth: 360 });
    return <NavbarContainer verySmallMobile={verySmallMobile} className="container" useTransparent={useTransparent}>
        <BrandLogo fontSize={!isMobile ? 22 : undefined} href="/">Guillaume Letellier</BrandLogo>
        <AccessibilityContainer verySmallMobile={verySmallMobile}>
            <NavLink fontSize={!isMobile ? 16 : undefined} href="/projects">Projects</NavLink>
            <Marginer direction="horizontal" margin={10} />
            <NavLink fontSize={!isMobile ? 16 : undefined} href="/skills">Skills</NavLink>
            <Marginer direction="horizontal" margin={10} />
            <NavLink fontSize={!isMobile ? 16 : undefined} href="/about">About</NavLink>
            <Marginer direction="horizontal" margin={10} />
            <NavLink fontSize={!isMobile ? 16 : undefined} href="/contact">Contact</NavLink>
        </AccessibilityContainer>
    </NavbarContainer>
}

export default Navbar;
