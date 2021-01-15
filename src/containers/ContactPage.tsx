import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from '../components/SocialIcon';
import { emailAddress, socialAccounts } from '../model/data';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faHome);

const SocialDiv = styled.a`
    display: flex;
    text-decoration: none;
    color: var(--color);
    align-items: center;
    margin: 10px 20px;
    font-size: 1.1em;

    & > span {
        display: flex;
        padding-left: 8px;
        align-items: center;

        & > span {
            font-size: 0.65em;
            padding-left: 3px;
        }
    }

`;

export const ContactPage = () => {
    return <>
        <h1>Contact me</h1>
        <section>
            <h2>Via email</h2>
            <p>You can contact me at this email address : <a href={"mailto:" + emailAddress} >{emailAddress}</a></p>
        </section>
        <section>
            <h2>Via social networks</h2>
            <p>You can contact me via different social networks :</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
                {socialAccounts.map<JSX.Element>((value, index) => {return <SocialDiv href={value.url} rel="noreferrer" target="_blank" >
                    <SocialIcon key={index} size="2x" colorUsed={value.iconColor} icon={value.iconProperties} />
                    <span>{value.name}<span>({value.username})</span></span>
                </SocialDiv>})}
            </div>
        </section>
        <section>
            <h2>Coordonates</h2>
            <p>You can contact or meet me with this different informations :</p>
            <ul style={{ listStyle: "none", fontSize: 17 }}>
                <li>
                    <FontAwesomeIcon icon={faPhone} /> (+33) 6 99 12 07 22
                </li>
                <li>
                    <FontAwesomeIcon icon={faHome} /> 12 Rue de Suresnes, Colombelles, Normandy, France
                </li>
            </ul>
        </section>
    </>
}