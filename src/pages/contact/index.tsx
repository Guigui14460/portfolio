import { FontAwesomeIcon } from "../../components/icons"
import styled from 'styled-components';
import { SocialIcon } from '../../components/icons';
import { address, emailAddress, phoneLongVersion, phoneShortVersion, socialAccounts } from '../../model/data';
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

const ListElement = styled.li`
    margin: 12px 0;
`;

const ContactPage = () => {
    return <>
        <h1>Contact me</h1>
        <section id="mail">
            <h2>Via email (recommended)</h2>
            <p>You can contact me at this email address : <a href={"mailto:" + emailAddress} >{emailAddress}</a></p>
        </section>
        <section id="social-networks">
            <h2>Via social networks (recommended)</h2>
            <p>You can contact me via different social networks :</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
                {socialAccounts.map<JSX.Element>((value, index) => {return <SocialDiv key={index} href={value.url} rel="noreferrer" target="_blank" >
                    <SocialIcon key={index} size="2x" colorused={value.iconColor} icon={value.iconProperties} />
                    <span>{value.name}<span>({value.username})</span></span>
                </SocialDiv>})}
            </div>
        </section>
        <section id="personnal-info">
            <h2>Contact information</h2>
            <p>You can contact or meet me with this different informations :</p>
            <ul style={{ listStyle: "none", fontSize: 17 }}>
                <ListElement>
                    <FontAwesomeIcon iconName="phone" type="solid" size="1x" /> <a href={"tel:" + phoneShortVersion}>{phoneLongVersion}</a>
                </ListElement>
                <ListElement>
                    <FontAwesomeIcon iconName="home" type="solid" size="1x" /> {address}
                </ListElement>
            </ul>
        </section>
    </>
}

export default ContactPage;
