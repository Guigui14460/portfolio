import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 40px 10px;
    margin: 0;
    width: 100%;
    background-color: #1f1e1c;
`;

const Footer = () => {
    return <FooterContainer className="container">
            <div>All rights reserved &copy; { new Date().getFullYear() } Guillaume Letellier's Portfolio</div>
            <p>Some icons of this site has been picked from <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br/>Made by <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></p>
            <p>Created with ReactJS and Typescript</p>
    </FooterContainer>
};

export default Footer;
