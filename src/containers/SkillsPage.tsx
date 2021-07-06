import styled from 'styled-components';
import Marginer from '../components/marginer';
import ProgressBarSkill from '../components/ProgressBarSkill';
import { Link } from 'react-router-dom';
import Grid from '../components/grid';

import { motivationIcon, curiousIcon, timeIcon, brainstormingIcon } from "../images/Images";
import { firebaseIcon, mysqlIcon, postgresqlIcon, mongodbIcon, sqliteIcon, vuejsIcon, djangoIcon, reactjsIcon, jupyterIcon, numpyIcon, pandasIcon, scipyIcon, matplotlibIcon, tensorflowIcon, seabornIcon } from "../images/Icons"
import languageInformations from '../model/Language';

const SkillIcon = styled.img<{ width: number }>`
    width: ${({ width }) => width}px;
    height: auto;
`;

const ElementItem = styled.a`
    display: flex;
    align-items: center;
    margin: 10px 20px;
    & > img {
        margin-right: 10px;
    }
`;


const ElementContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const SkillsPage = () => {
    return <>
        <h1>Skills</h1>
        <section>
            <h2>Soft skills</h2>
            <Marginer direction="vertical" margin={20} />
            <Grid row style={{ textAlign: "center" }}>
                <Grid column sm={12} md={6} lg={3}>
                    <SkillIcon width={100} src={motivationIcon} alt="Motivation icon" />
                    <h3>Motivated</h3>
                    <p>I am a person who is always motivated when I undertake any kind of activity. Motivation is one of the most useful skills in our daily life, it allows us to continue and get closer to our goals.<br />
                        You can see <Link to="/about#sentences">my sentences</Link> to understand how important this skill is to me.</p>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <SkillIcon width={100} src={curiousIcon} alt="Curious icon" />
                    <h3>Curious</h3>
                    <p>Curiosity is very important. It allows us to deepen our knowledge in different fields. In the world of computer development, in particular, it is even more so, in order to know better and more languages, frameworks or libraries for the project we are working on, or for another one in the future.</p>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <SkillIcon width={100} src={timeIcon} alt="Time icon" />
                    <h3>Patient</h3>
                    <p>Patience, in my opinion, is essential in computer science. Indeed, when we develop any kind of program, we encounter some problems that are more or less difficult to solve. This skill allows us to be able to reflect on it in order to calmly understand what is wrong. As they say, "To those who know how to wait, time opens its doors".</p>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <SkillIcon width={100} src={brainstormingIcon} alt="Brainstorming icon" />
                    <h3>Problem solving</h3>
                    <p>As said before, we can encounter a lot of problems in all existing areas. In computer science, problems are omnipresent so this quality is fundamental. Indeed, without it, it is impossible to work because during the development of a project, we are constantly confronted with new problems, whether it is writing code, interpretation, compilation, or deployment in production.</p>
                </Grid>
            </Grid>
        </section>
        <section>
            <h2>Hard skills</h2>
            <Grid row style={{ textAlign: "center" }}>
                <Grid column sm={12} md={7}>
                    <h3>Programming languages</h3>
                    <Grid row style={{ alignItems: 'flex-end' }}>
                        {Object.entries(languageInformations).map(([key, val], index) => {
                            let sm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined = 12;
                            let md: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined = 4;
                            if (index % 5 === 3 || index % 5 === 4) {
                                md = 6;
                            }
                            return <Grid key={index} column sm={sm} md={md}>
                                <ProgressBarSkill name={val.name} percentage={val.percentage} level={val.level} color={val.color} />
                            </Grid>;
                        })}
                    </Grid>
                </Grid>
                <Grid column sm={12} md={5}>
                    <h3>Some frameworks</h3>
                    <ElementContainer>
                        <ElementItem href="https://www.djangoproject.com/" title="Django" target="_blank" rel="noreferrer">
                            <SkillIcon width={100} src={djangoIcon} title="Django" alt="Django icon" />
                            Django
                        </ElementItem>
                        <ElementItem href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={reactjsIcon} title="ReactJS" alt="ReactJS icon" />
                            ReactJS
                        </ElementItem>
                        <ElementItem href="https://vuejs.org/" title="VueJS" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={vuejsIcon} title="VueJS" alt="VueJS icon" />
                            VueJS
                        </ElementItem>
                    </ElementContainer>
                </Grid>
                <Grid column sm={12} md={6}>
                    <h3>Databases</h3>
                    <ElementContainer>
                        <ElementItem href="https://sqlite.org/index.html" title="SQLite" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={sqliteIcon} title="SQLite" alt="SQLite icon" />
                            SQLite
                        </ElementItem>
                        <ElementItem href="https://www.mysql.com/" title="MySQL" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={mysqlIcon} title="MySQL" alt="MySQL icon" />
                            MySQL/MariaDB
                        </ElementItem>
                        <ElementItem href="https://www.postgresql.org/" title="PostgreSQL" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={postgresqlIcon} title="PostgreSQL" alt="PostgreSQL icon" />
                            PostgreSQL
                        </ElementItem>
                        <ElementItem href="https://www.mongodb.com/" title="MongoDB" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={mongodbIcon} title="MongoDB" alt="MongoDB icon" />
                            MongoDB
                        </ElementItem>
                        <ElementItem href="https://firebase.google.com/" title="Firebase" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={firebaseIcon} title="Firebase" alt="Firebase icon" />
                            Firebase
                        </ElementItem>
                    </ElementContainer>
                </Grid>
                <Grid column sm={12} md={6}>
                    <h3>Scientific libraries/environment</h3>
                    <ElementContainer>
                        <ElementItem href="https://jupyter.org/" title="Jupyter" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={jupyterIcon} title="Jupyter" alt="Jupyter icon" />
                            Jupyter Notebook
                        </ElementItem>
                        <ElementItem href="https://numpy.org/" title="NumPy" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={numpyIcon} title="NumPy" alt="NumPy icon" />
                            NumPy
                        </ElementItem>
                        <ElementItem href="https://pandas.pydata.org/" title="Pandas" target="_blank" rel="noreferrer">
                            <SkillIcon width={100} src={pandasIcon} title="Pandas" alt="Pandas icon" />
                            Pandas
                        </ElementItem>
                        <ElementItem href="https://www.scipy.org/" title="SciPy" target="_blank" rel="noreferrer">
                            <SkillIcon width={50} src={scipyIcon} title="SciPy" alt="SciPy icon" />
                            SciPy
                        </ElementItem>
                        <ElementItem href="https://matplotlib.org/" title="Matplotlib" target="_blank" rel="noreferrer">
                            <SkillIcon width={100} src={matplotlibIcon} title="Matplotlib" alt="Matplotlib icon" />
                            Matplotlib
                        </ElementItem>
                        <ElementItem href="https://www.tensorflow.org/" title="TensorFlow" target="_blank" rel="noreferrer">
                            <SkillIcon width={100} src={tensorflowIcon} title="TensorFlow" alt="TensorFlow icon" />
                            TensorFlow
                        </ElementItem>
                        <ElementItem href="https://seaborn.pydata.org/index.html" title="Seaborn" target="_blank" rel="noreferrer">
                            <SkillIcon width={100} src={seabornIcon} title="Seaborn" alt="Seaborn icon" />
                            Seaborn
                        </ElementItem>
                    </ElementContainer>
                </Grid>
                <Grid column sm={12}>
                    <h3>Worked area</h3>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Mathematics (probabilities, statistics, linear algebra, logic and reasoning, arrangements, algebric structures)</li>
                        <li>Web technologies</li>
                        <li>Software design</li>
                        <li>Scientific computing and parallism</li>
                        <li>System architecture and microcontrollers</li>
                        <li>Programming paradagims (OOP, imperative, functionnal, procedural)</li>
                        <li>Algorithmic and graphs</li>
                        <li>System &amp; Networks</li>
                        <li>Databases</li>
                        <li>Decision Support and Artificial Intelligence</li>
                        <li>Mobile applications</li>
                        <li>Language theory and compilation</li>
                    </ul>
                </Grid>
            </Grid>
        </section>
    </>
}
