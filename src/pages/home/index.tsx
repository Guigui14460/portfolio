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

    const today = new Date()
    const birthDate = new Date(2000, 6, 26)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
        
    return <>
        <h1>Guillaume Letellier Portfolio</h1>
        <Marginer direction="vertical" margin={14} />
        <section>
            <h2>Who am I?</h2>
            <p className='justify'>
                Hi! My name is Guillaume Letellier, I'm {age}-year-old french student and I develop things on my free time.
                I am passionate about computer science, focusing on <strong>Signal Processing</strong> (sounds, images), <strong>Data Science</strong> and <strong>Artificial Intelligence</strong> (Machine Learning, Deep Learning, Reinforcement Learning). Furthermore, I am very interested in <strong>Quantum Computing</strong> and AI applied with this technology.
                You can go to <HashLink to="/projects" className='link'>projects</HashLink> and <HashLink to="/about#educational" className='link'>about</HashLink> pages.
            </p>
            <p className='justify'>
                After seeing my different projects, I invite you to contact me if you want to hire me, learn more about my projects/background or even just talk about anything!
            </p>
            <div style={{ textAlign: 'center' }}>
                <ButtonLink title="Contact" targetLink="/contact" className="secondary outlined">Contact me</ButtonLink>
            </div>
        </section>
        <section>
            <h2>My goals</h2>
            <p className='justify'>
                I'm going to get a master's degree in artificial intelligence and signal processing in September 2023.
                I think that these fields can really help society to evolve, whether in medicine or in science (chemistry, physics, biology).
            </p>
            <p className='justify'>
                Research attracts me because it allows me to invent new techniques or optimise existing ones to help society.
                Moreover, I have always sought to deepen my knowledge in different fields ranging from the death of stars to DNA and new advances in computer science such as artificial intelligence or quantum computing.
                Participating in global research allows me to continue this quest for knowledge for the benefit of society.
            </p>
        </section>
        <section>
            <h2>Resume download section</h2>
            <p className='justify'>You can download my resume with the two following buttons:</p>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                <ButtonExternalLink title="English resume" targetLink="/documents/english_resume_guillaume_letellier.pdf" target="_blank" className='primary' size={1.2}>English version</ButtonExternalLink>
                <ButtonExternalLink title="French resume" targetLink="/documents/french_resume_guillaume_letellier.pdf" target="_blank" className='ternary' size={1.2}>French version</ButtonExternalLink>
            </div>
        </section>
        <section>
            <h2>Professional experience</h2>
            {experiencesData.toReversed().map((value, index) => {
                const gridRowStyle: CSSProperties = { justifyContent: "center", maxWidth: "100%" };
                if(matchesMobileDevice) {
                    gridRowStyle.backgroundColor = "var(--background-color-darker)";
                    gridRowStyle.borderRadius = "8px";
                    gridRowStyle.paddingTop = "1em";
                }
                return <Fragment key={value.title.split(" ").join("-")}>
                    {index !== 0 && <Marginer direction='vertical' margin="3em" />}
                    <Grid row style={gridRowStyle}>
                        <Grid column sm={12} md={5} lg={4} style={{ padding: 0, textAlign: "center" }}>
                            <ImageIcon style={{ borderRadius: "8px", maxWidth: "300px", height: "auto" }} src={value.entrepriseLogo} alt={value.entreprise + " logo"} />
                        </Grid>
                        <Grid column sm={12} md={7} lg={6} style={matchesMobileDevice ? {padding: 0, textAlign: "left"} : {paddingRight: 0, textAlign: "left", alignSelf: "center"}}>
                            <div style={{ backgroundColor: "var(--background-color-darker)", borderRadius: "8px", padding: "0.5em 1em" }}>
                                <h3 style={{ marginTop: 0 }}>{value.title}{value.entreprise && <> at {value.entrepriseUrl ? <a target="_blank" rel="noreferrer" className='link' href={value.entrepriseUrl}>{value.entreprise}</a>: value.entreprise}</>} • {value.employementType}</h3>
                                <span>From {value.from} to {value.to ?? "Today"}</span><br />
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
                            My referent{value.referents.length > 1 && "s"}: {value.referents.map((referent, referentIndex) => (
                                <><a target="_blank" rel="noreferrer" className='link' href={referent.url}>{referent.firstName} {referent.lastName}</a>, {referent.jobDescription}{referentIndex !== value.referents.length - 1 ? "; " : "."}</>
                            ))}
                        </p>}
                        {value.keywords && <Keywords>Keywords: {value.keywords.map(value2 => {
                            return <span key={value2.split(" ").join("-")} style={{ backgroundColor: "#ffd090", color: (contrast(hexToRgb("#ffd090"), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }}>{value2}</span>
                        })}</Keywords>}
                    </article>
                    {experiencesData.length - 1 !== index ?? <Marginer direction="vertical" margin={4} />}
                </Fragment>
            })}
        </section>
        <section>
            <h2>Works in progress</h2>
            <Grid row>
                {worksInProgressProjectsData.map(value => {
                    return <Grid key={value.name.split(" ").join("-")} column sm={12} md={6} lg={4} padding="0">
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
