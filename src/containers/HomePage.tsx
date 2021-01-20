import React from 'react';
import { ButtonExternalLink, ButtonLink } from '../components/button';
import Grid from '../components/grid';
import Marginer from '../components/marginer';
import { Card } from '../components/card';
import { worksInProgressProjectsData } from '../model/data';

export const HomePage = () => {
    return <>
        <h1>Guillaume Letellier's Portfolio</h1>
        <Marginer direction="vertical" margin={14} />
        <section>
            <h2>Short description of myself</h2>
            <p>Hello, I'm a french computer science student, come take a look at my portfolio and contact me if you want to hire me !</p>
            <div style={{ textAlign: 'center' }}>
                <ButtonLink targetLink="/contact" className="primary">Contact me</ButtonLink>
            </div>
            <Marginer direction="vertical" margin={14} />
            <p>I am passionate about IT, both in the design and development aspects. In particular, I am fascinated by artificial intelligence (including machine learning and deep learning), quantum computing, computational optimization and algorithmics.</p>
        </section>
        <section>
            <h2>My goals</h2>
            <p>I would like to obtain a master's degree specialized in artificial intelligence and machine learning because this technology can help society evolve.</p>
            <p>I would also like to create my own company to offer expertise in artificial intelligence to clients, and to train people in this field. This, by having an R&D space to participate in the growing improvement that this field is undergoing with the next coming technological revolutions such as quantum computing.</p>
            <div style={{ textAlign: 'center' }}>
                <ButtonLink targetLink="/about" className="secondary outlined">About me</ButtonLink>
            </div>
        </section>
        <section>
            <h2>Resume download section</h2>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                <ButtonExternalLink title="English resume" targetLink="resume_en.pdf" download style={{ backgroundColor: "#36b558" }} size={1.2}>English (version)</ButtonExternalLink>
                <ButtonExternalLink title="French resume" targetLink="resume_fr.pdf" download style={{ backgroundColor: "#ded11b" }} size={1.2}>French (version)</ButtonExternalLink>
            </div>
        </section>
        <section>
            <h2>Works in progress</h2>
            <Grid row>
                {worksInProgressProjectsData.map((value, index) => {
                    return <Grid key={index} column sm={12} md={6} lg={4}>
                        <Card notFinished={value.notFinished} name={value.name} officialSiteUrl={value.officialSiteUrl} description={value.description} repoURL={value.repoUrl} languages={value.languages}  />
                    </Grid>
                })}
            </Grid>
            <div style={{ textAlign: 'center' }}>
                <ButtonLink className="ternary outlined" targetLink="/projects#top">More projects here</ButtonLink>
            </div>
        </section>
    </>;
};