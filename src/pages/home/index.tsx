import { Fragment, ReactElement, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import ReactTooltip from 'react-tooltip';
import styled, { CSSProperties } from 'styled-components';
import Marginer from '../../components/marginer';
import Grid from '../../components/grid';
import Card from '../../components/card';
import { ImageIcon } from '../../components/icons';
import { ProjectAuthorTooltipContent } from '../../components/tooltips';
import { ButtonExternalLink, ButtonLink } from '../../components/button';
import { deviceSize } from '../../components/Responsive';
import { contrast, hexToRgb } from '../../utils';
import { isInstanceOfInternship } from '../../model/Experience';
import { authorsList, experiencesData, worksInProgressProjectsData } from '../../data';

const Keywords = styled.p`
    & > span {
        display: inline-block;
        border-radius: 5px;
        padding: 3px 8px;
        margin: 2px 5px;
    }
`;

const HomePage = () => {
    const authorsLinksTooltip: ReactElement = <ReactTooltip 
            id='project-author-links' getContent={(dataTip) => authorsList.has(dataTip) && ProjectAuthorTooltipContent(authorsList.get(dataTip))} 
            effect="solid" delayHide={250} delayShow={200} delayUpdate={100} place="bottom" border type='light' />;
    
    const [matchesMobileDevice, setMatchesMobileDevice] = useState(window.matchMedia(`(max-width: ${deviceSize.mobile}px)`).matches)
    
    useEffect(() => {
        window
        .matchMedia(`(max-width: ${deviceSize.mobile}px)`)
        .addEventListener('change', e => setMatchesMobileDevice( e.matches ));
    }, [matchesMobileDevice]);

    var today = new Date()
    var birthDate = new Date(2000, 6, 26)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
        
    return <>
        <h1>Guillaume Letellier Portfolio</h1>
        <Marginer direction="vertical" margin={14} />
        <section>
            <h2>Who am I?</h2>
            <p className='justify'>Hi! My name is Guillaume Letellier, I'm {age}-year-old french student and I develop things on my free time. I am passionate about IT, both in the thoery and development aspects. In particular, I am fascinated by artificial intelligence (including machine learning and deep learning), quantum computing, computational optimization and algorithmics. You can go to <HashLink to="/projects" className='link'>projects</HashLink> and <HashLink to="/about#educational" className='link'>about</HashLink> pages.</p>
            <p className='justify'>After seeing the different projects implemented, I invite you to contact me if you want to hire me, learn more about my projects/background or even just discuss about anything!</p>
            <div style={{ textAlign: 'center' }}>
                <ButtonLink title="Contact" targetLink="/contact" className="secondary outlined">Contact me</ButtonLink>
            </div>
        </section>
        <section>
            <h2>My goals</h2>
            <p className='justify'>
                I will to obtain a master's degree specialized in artificial intelligence and, image & signal processing in 2023.
                I think these fields can really help society evolve, whether it's in medicine, chemistry, physics or transportation.
            </p>
            <p className='justify'>
                I would also like to have a PhD in order to advance research in Machine Learning and more specifically in Deep Learning.
                The research seems to me particularly attractive because it allows to invent new techniques or to optimize the existing ones in order to help the society.
                Moreover, I have always sought to deepen my knowledge in different fields from the death of stars to DNA to new advances in computer science such as artificial intelligence or quantum computing.
                Participating in global research would allow me to continue the search for knowledge to benefit society.
            </p>
        </section>
        <section>
            <h2>Resume download section</h2>
            <p className='justify'>You can download my resume with the two following buttons:</p>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                <ButtonExternalLink title="English resume" targetLink="/documents/english_resume_guillaume_letellier.pdf" target="_blank" className='primary' size={1.2}>English (version)</ButtonExternalLink>
                <ButtonExternalLink title="French resume" targetLink="/documents/french_resume_guillaume_letellier.pdf" target="_blank" className='ternary' size={1.2}>French (version)</ButtonExternalLink>
            </div>
        </section>
        <section>
            <h2>Professional experience</h2>
            {experiencesData.map((value, index) => {
                const gridRowStyle: CSSProperties = { justifyContent: "center", maxWidth: "100%" };
                if(matchesMobileDevice) {
                    gridRowStyle.backgroundColor = "var(--background-color-darker)";
                    gridRowStyle.borderRadius = "8px";
                    gridRowStyle.paddingTop = "1em";
                }
                return <Fragment key={index}>
                    <Grid row style={gridRowStyle}>
                        <Grid column sm={12} md={5} lg={4} style={{ padding: 0, textAlign: "center" }}>
                            <ImageIcon style={{ borderRadius: "8px", maxWidth: "300px", height: "auto" }} src={value.entrepriseLogo} alt={value.entreprise + " logo"} />
                        </Grid>
                        <Grid column sm={12} md={7} lg={6} style={matchesMobileDevice ? {padding: 0, textAlign: "left"} : {paddingRight: 0, textAlign: "right", alignSelf: "center"}}>
                            <div style={{ backgroundColor: "var(--background-color-darker)", borderRadius: "8px", padding: "0.5em 1em" }}>
                                <h3 style={{ marginTop: 0 }}>{value.title}{value.entreprise && <> at {value.entrepriseUrl ? <a target="_blank" rel="noreferrer" className='link' href={value.entrepriseUrl}>{value.entreprise}</a>: value.entreprise}</>} • {value.employementType}</h3>
                                <span>From {value.from} to {value.to === undefined ? "Today" : value.to}</span><br />
                                <span>in {value.location}</span>
                            </div>
                        </Grid>
                    </Grid>
                    <article>
                        {(isInstanceOfInternship(value) || value.description !== undefined) &&
                            <p className='justify'>{isInstanceOfInternship(value) &&
                                <><strong style={{fontSize: "1.1rem"}}>{value.subject}</strong>
                                {value.associatedTo && <> (associated to {value.associatedToUrl ? <a target="_blank" rel="noreferrer" className='link' href={value.associatedToUrl}>{value.associatedTo}</a> : value.associatedTo})</>}
                                <Marginer direction="vertical" margin={8} /></>}
                                {value.description && <>{value.description}</>}
                            </p>}
                        {isInstanceOfInternship(value) && <p>
                            My referent: <a target="_blank" rel="noreferrer" className='link' href={value.referent.url}>{value.referent.firstName} {value.referent.lastName}</a>, {value.referent.jobDescription}
                        </p>}
                        {value.keywords && <Keywords>Keywords: {value.keywords.map((value2, index2) => {
                            return <span key={index2} style={{ backgroundColor: "#ffd090", color: (contrast(hexToRgb("#ffd090"), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }}>{value2}</span>
                        })}</Keywords>}
                    </article>
                    {experiencesData.length - 1 !== index ?? <Marginer direction="vertical" margin={4} />}
                </Fragment>
            })}
        </section>
        <section>
            <h2>Works in progress</h2>
            <Grid row>
                {worksInProgressProjectsData.map((value, index) => {
                    return <Grid key={index} column sm={12} md={6} lg={4} padding="0">
                        <Card project={value} padding="0.75rem" />
                    </Grid>
                })}
            </Grid>
            <Marginer direction='vertical' margin={16} />
            <div style={{ textAlign: 'center' }}>
                <ButtonLink title="Projects" className='ternary-bis' targetLink="/projects">More projects here</ButtonLink>
            </div>
        </section>
        {authorsLinksTooltip}
    </>;
};

export default HomePage;
