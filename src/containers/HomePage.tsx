import React from 'react';
import { Button } from '../components/button';
import SpinLoader, { DotsLoader } from '../components/Loader';
import Marginer from '../components/marginer';

export const HomePage = (props: any) => {
    return (<>
        <h1>Guillaume Letellier's Portfolio</h1>
        <Marginer margin={50} />
        <p style={{color: "white", textAlign: 'start'}}>Ok super</p>
        <Button className={"primary"}>Test</Button>
        <Button className={"secondary"}>Test</Button>
        <Button className={"primary outlined"}>Test</Button>
        <a href="resume.pdf" download>Resume</a>
        <SpinLoader width={50} />
        <DotsLoader />
    </>)
};