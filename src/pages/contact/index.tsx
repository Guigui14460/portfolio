import { FontAwesomeIcon, ImageIcon, SocialIcon } from "../../components/icons"
import styled from 'styled-components';
import { emailAddress, phoneLongVersion, phoneShortVersion, socialAccounts } from '../../data';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faBriefcase);

const SocialDiv = styled.a`
    display: flex;
    text-decoration: none;
    color: var(--color);
    align-items: center;
    margin: 10px 20px;
    font-size: 1.1em;
    line-height: 1.1em;

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
        <section id="for-short">
            <h2>For short</h2>
            <p>Through this QR code and link, you can access to <a className="link" href="https://linktr.ee/hadesguigui" rel="noreferrer" target="_blank">my LinkTree page</a> that combines all related links to myself.</p>
            <div style={{ textAlign: "center" }}>
                <ImageIcon style={{ borderRadius: "8px", maxWidth: "250px", height: "auto" }} src="/images/linktree.png" alt="LinkTree QR code" />
            </div>
        </section>
        <section id="mail">
            <h2>Via email (recommended)</h2>
            <p>There is several email addresses where I can be reached:</p>
            <ul>
                Professional addresses:
                <li><a className="link" href="mailto:guillaume.letellier@unicaen.fr" >guillaume.letellier@unicaen.fr</a></li>
                Personal addresses:
                <li><a className="link" href={`mailto:${emailAddress}`} >{emailAddress}</a></li>
                <li><a className="link" href="mailto:letellier.guillaume@protonmail.com" >letellier.guillaume@protonmail.com</a></li>
            </ul>
        </section>
        <section id="social-networks">
            <h2>Via social networks</h2>
            <p>You can contact me via different social networks:</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center"}}>
                {socialAccounts.map<JSX.Element>(value => {return <SocialDiv key={value.name.split(" ").join("-")} href={value.url} rel="noreferrer" target="_blank" >
                    <SocialIcon key={value.name.split(" ").join("-")} size="2x" colorused={value.iconColor} icon={value.iconProperties} />
                    <span>{value.name}<span>({value.username})</span></span>
                </SocialDiv>})}
            </div>
        </section>
        <section id="personnal-info">
            <h2>Contact information</h2>
            <p>You can contact or meet me with this different informations:</p>
            <ul style={{ listStyle: "none", fontSize: 17 }}>
                <ListElement>
                    <FontAwesomeIcon iconName="phone" type="solid" size="1x" /> <a className="link" href={`tel:${phoneShortVersion}`}>{phoneLongVersion}</a>
                </ListElement>
                <ListElement>
                    <FontAwesomeIcon iconName="briefcase" type="solid" size="1x" />&nbsp;<a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Laboratoire+GREYC/@49.2144937,-0.3697877,17.64z/data=!4m6!3m5!1s0x480a5d47a4bb051d:0xaaaf93ededd034fb!8m2!3d49.214891!4d-0.368952!16s%2Fg%2F11b7720l9j?entry=ttu">GREYC - UMR CNRS 6072 - University of Caen Normandy - 6 Boulevard du Maréchal Juin - ENSICAEN Building F - Office FB224</a>
                </ListElement>
            </ul>
        </section>
    </>
}

export default ContactPage;
