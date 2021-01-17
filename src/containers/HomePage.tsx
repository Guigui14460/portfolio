import React from 'react';
import { ButtonExternalLink, ButtonLink } from '../components/button';
import Grid from '../components/grid';
import Marginer from '../components/marginer';
import { Card } from '../components/card';

export const HomePage = (props: any) => {
    return <>
        <h1>Guillaume Letellier's Portfolio</h1>
        <Marginer direction="vertical" margin={14} />
        <section style={{ width: "65%", textAlign: "center"}}>
            <h2>Biography</h2>
            <p style={{ color: "#0c7f9c" }}>Hello, I'm a computer science student, come take a look at my portfolio and contact me if you want to hire me !</p>
            <ButtonLink targetLink="/contact" className={"primary"}>Contact me</ButtonLink>
            <Marginer direction="vertical" margin={14} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officiis non accusamus harum dignissimos, veritatis, soluta deserunt esse nostrum natus distinctio sint error a nemo quos, earum beatae unde? Esse?</p>
        </section>
        <section>
            <h2>Resume download section</h2>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                <ButtonExternalLink title="English resume" targetLink="resume_en.pdf" download className="primary outlined" size={17}>English version)</ButtonExternalLink>
                <ButtonExternalLink title="French resume" targetLink="resume_fr.pdf" download className="secondary outlined" size={17}>French version)</ButtonExternalLink>
            </div>
        </section>
        <section>
            <h2>Works in progress</h2>
            <Grid row>
                <Grid column sm={12} md={6} lg={4}>
                    <Card name="Password manager" languages={["java"]} repoURL="https://github.com/Guigui14460/password-manager" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ipsam hic consequuntur sequi porro explicabo provident in accusamus qui dolores, rem similique maxime quia minus officiis labore magni placeat odio!" />
                </Grid>
            </Grid>
        </section>
    </>;
};