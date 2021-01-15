import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 40px 0;
    margin: 0;
    width: 100%;
    background-color: #1f1e1c;
`;

const Footer = () => {
    return <FooterContainer className="container">
            <div>All rights reserved &copy; { new Date().getFullYear() } Guillaume Letellier's Portfolio</div>
    </FooterContainer>
};

export default Footer;