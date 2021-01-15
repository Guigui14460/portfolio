import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/button';
import SpinLoader, { DotsLoader } from '../components/Loader';
import Marginer from '../components/marginer';

const Title = styled.h1`
`

export const HomePage = (props: any) => {
    return (<>
        <Title>Guillaume Letellier's Portfolio</Title>
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