import { Fragment, ReactElement } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { ButtonExternalLink, ButtonLink } from '../../components/button';
import Grid from '../../components/grid';
import Marginer from '../../components/marginer';
import Card from '../../components/card';
import { authorsList, experiencesData, worksInProgressProjectsData } from '../../data';
import { isInstanceOfInternship } from '../../model/Experience';
import { contrast, hexToRgb } from '../../utils';
import { ProjectAuthorTooltipContent } from '../../components/tooltips';
import { HashLink } from 'react-router-hash-link';

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
            id='project-author-links' getContent={(dataTip) => authorsList.has(dataTip) ? ProjectAuthorTooltipContent(authorsList.get(dataTip)) : null} 
            effect="solid" delayHide={250} delayShow={250} delayUpdate={250} place={"bottom"} border={false} type={"light"} />;
    return <>
        <h1>Guillaume Letellier Portfolio</h1>
        <Marginer direction="vertical" margin={14} />
        <section>
            <h2>Who am I?</h2>
            <p>Hi! My name is Guillaume Letellier, I'm 21-year-old french student and I develop things on my free time. I am passionate about IT, both in the thoery and development aspects. In particular, I am fascinated by artificial intelligence (including machine learning and deep learning), quantum computing, computational optimization and algorithmics. You can go to <HashLink to="/projects" className='link'>projects</HashLink> and <HashLink to="/about#educational" className='link'>about</HashLink> pages.</p>
            <p>After seeing the different projects implemented, I invite you to contact me if you want to hire me or learn more about my projects/background.</p>
            <div style={{ textAlign: 'center' }}>
                <ButtonLink title="Contact" targetLink="/contact" className="secondary outlined">Contact me</ButtonLink>
            </div>
        </section>
        <section>
            <h2>My goals</h2>
            <p>I would like to obtain a master's degree specialized in artificial intelligence because this domain can help society evolve.</p>
            <p>
                I would also like to have a PhD in order to advance research in Machine Learning and more specifically in Deep Learning.
                The research seems to me particularly attractive because it allows to invent new techniques or to optimize the existing ones in order to help the society.
                Moreover, I have always sought to deepen my knowledge in different fields from the death of stars to DNA to new advances in computer science such as artificial intelligence or quantum computing.
                Participating in global research would allow me to continue the search for knowledge to benefit society.
            </p>
        </section>
        <section>
            <h2>Resume download section</h2>
            <p>You can download my resume with the two following buttons :</p>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                <ButtonExternalLink title="English resume" targetLink="english_cv.pdf" target="_blank" className='primary' size={1.2}>English (version)</ButtonExternalLink>
                <ButtonExternalLink title="French resume" targetLink="french_cv.pdf" target="_blank" className='ternary' size={1.2}>French (version)</ButtonExternalLink>
            </div>
        </section>
        <section>
            <h2>Professional experience</h2>
            {experiencesData.sort((a, b) => {
                return b.from.getTime() - a.from.getTime()
            }).map((value, index) => {
                return <Fragment key={index}>
                    <article>
                        <h3>{value.title}{value.entreprise ? <> at {value.entrepriseUrl ? <a target="_blank" rel="noreferrer" className='link' href={value.entrepriseUrl}>{value.entreprise}</a>: value.entreprise}</> : null}{isInstanceOfInternship(value) ? <span> • Internship</span> : null}</h3>
                        <span>From {value.from.toLocaleDateString()} to {value.to == null ? "Today" : value.to.toLocaleDateString()} in {value.location}</span>
                        <p>{isInstanceOfInternship(value) ? <><strong style={{fontSize: "1.1rem"}}>{value.subject}</strong>{value.associatedTo ? <> (associated to {value.associatedToUrl ? <a target="_blank" rel="noreferrer" className='link' href={value.associatedToUrl}>{value.associatedTo}</a>: value.associatedTo})</>  : null}<Marginer direction="vertical" margin={8} /></>  : null}Description : {value.description}</p>
                        {isInstanceOfInternship(value) ? <p>
                            My referent : <a target="_blank" rel="noreferrer" className='link' href={value.referent.url}>{value.referent.firstName} {value.referent.lastName}</a>, {value.referent.jobDescription}
                        </p> : null}
                        {value.keywords != null ? <Keywords>Keywords : {value.keywords.map((value2, index2) => {
                            return <span key={index2} style={{ backgroundColor: "#cf9038", color: (contrast(hexToRgb("#cf9038"), hexToRgb("#000000")) < 4.5 ? "#ffffff" : "#000000") }}>{value2}</span>
                        })}</Keywords> : null}
                    </article>
                    {experiencesData.length - 1 !== index ? <Marginer direction="vertical" margin={4} /> : null}
                </Fragment>
            })}
        </section>
        <section>
            <h2>Works in progress</h2>
            <Grid row>
                {worksInProgressProjectsData.map((value, index) => {
                    return <Grid key={index} column sm={12} md={6} lg={4}>
                        <Card project={value} />
                    </Grid>
                })}
            </Grid>
            <div style={{ textAlign: 'center' }}>
                <ButtonLink title="Projects" className='ternary-bis' targetLink="/projects">More projects here</ButtonLink>
            </div>
        </section>
        {authorsLinksTooltip}
    </>;
};

export default HomePage;
