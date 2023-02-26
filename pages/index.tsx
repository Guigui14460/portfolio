import { Fragment, ReactElement, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled, { CSSProperties } from 'styled-components';
import Marginer from '@/components/ui/marginer';
import Grid from '@/components/ui/grid';
import Card from '@/components/ui/card';
import { ImageIcon } from '@/components/ui/icons';
import { ProjectAuthorTooltipContent } from '@/components/ui/tooltips';
import { ButtonExternalLink, ButtonLink } from '@/components/ui/button';
import { deviceSize } from '@/components/ui/Responsive';
import { contrast, hexToRgb } from '@/utils/color';
import { isInstanceOfInternship } from '@/models/Experience';
import authorsList from "@/data/authorsData"
import { experiencesData } from "@/data/experiencesData"
import { worksInProgressProjectsData } from '@/data/projectsData';
import PageMetaTags from '@/components/meta/PageMetaTags';
import Link from 'next/link';
import buttonStyles from "@/styles/Button.module.css"
import classNames from 'classnames';


const Keywords = styled.p`
    & > span {
        display: inline-block;
        border-radius: 5px;
        padding: 3px 8px;
        margin: 2px 5px;
    }
`;


export default function Home() {
  const authorsLinksTooltip: ReactElement = <ReactTooltip 
          id='project-author-links' getContent={(dataTip) => authorsList.has(dataTip) && ProjectAuthorTooltipContent(authorsList.get(dataTip))} 
          effect="solid" delayHide={250} delayShow={200} delayUpdate={100} place="bottom" border type='light' scrollHide resizeHide />;
  
  const [matchesMobileDevice, setMatchesMobileDevice] = useState(true)

  useEffect(() => {
    setMatchesMobileDevice(window.matchMedia(`(max-width: ${deviceSize.mobile}px)`).matches)
  }, [])
  
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

  return (
    <>
      <PageMetaTags pagePath='/' />

      <h1>Guillaume Letellier Portfolio</h1>
      <Marginer direction="vertical" margin={14} />
      <section>
          <h2>Who am I?</h2>
          <p className='justify'>
              Hi! My name is Guillaume Letellier, I'm {age}-year-old french student and I develop things on my free time.
              I am passionate about computer science, focusing on <strong>Signal Processing</strong> (sounds, images), <strong>Data Science</strong> and <strong>Artificial Intelligence</strong> (Machine Learning, Deep Learning, Reinforcement Learning). Furthermore, I am very interested in <strong>Quantum Computing</strong> and AI applied with this technology.
              You can go to <Link href="/projects" className='link'>projects</Link> and <Link href="/about#educational" className='link'>about</Link> pages.
          </p>
          <p className='justify'>
              In the future, I would like to continue my studies as a PhD student to help research (especially in the fields of Deep Learning, Reinforcement Learning or Quantum AI).
          </p>
          <p className='justify'>
              After seeing my different projects, I invite you to contact me if you want to hire me, learn more about my projects/background or even just talk about anything!
          </p>
          <div style={{ textAlign: 'center' }}>
              <ButtonLink title="Contact" targetLink="/contact" className={classNames(buttonStyles["secondary"], buttonStyles["outlined"])}>Contact me</ButtonLink>
          </div>
      </section>
      <section>
          <h2>My goals</h2>
          <p className='justify'>
              I'm going to get a master's degree in artificial intelligence and signal processing in September 2023.
              I think that these fields can really help society to evolve, whether in medicine or in science (chemistry, physics, biology).
          </p>
          <p className='justify'>
              I would also like to do a PhD in order to advance research in Data Science and more particularly in deep learning and reinforcement learning.
              Research attracts me because it allows me to invent new techniques or optimise existing ones to help society.
              Moreover, I have always sought to deepen my knowledge in different fields ranging from the death of stars to DNA and new advances in computer science such as artificial intelligence or quantum computing.
              Participating in global research would allow me to continue this quest for knowledge for the benefit of society.
          </p>
      </section>
      <section>
          <h2>Resume download section</h2>
          <p className='justify'>You can download my resume with the two following buttons:</p>
          <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
              <ButtonExternalLink title="English resume" targetLink="/documents/english_resume_guillaume_letellier.pdf" target="_blank" className={buttonStyles['primary']} size={1.2}>English version</ButtonExternalLink>
              <ButtonExternalLink title="French resume" targetLink="/documents/french_resume_guillaume_letellier.pdf" target="_blank" className={buttonStyles['ternary']} size={1.2}>French version</ButtonExternalLink>
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
                      <Grid column sm={12} md={7} lg={6} style={matchesMobileDevice ? {padding: 0, textAlign: "left"} : {paddingRight: 0, textAlign: "left", alignSelf: "center"}}>
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
              <ButtonLink title="Projects" className={buttonStyles['ternary-bis']} targetLink="/projects">More projects here</ButtonLink>
          </div>
      </section>
      {authorsLinksTooltip}
    </>
  )
}
