import styled from 'styled-components';
import Marginer from '../components/marginer';
import ProgressBarSkill from '../components/ProgressBarSkill';
import { Link } from 'react-router-dom';
import Grid from '../components/grid';
import { ImageIcon } from '../components/icons';

import { motivationIcon, curiousIcon, timeIcon, brainstormingIcon } from "../images/Images";
import { firebaseIcon, mysqlIcon, postgresqlIcon, mongodbIcon, sqliteIcon, vuejsIcon, djangoIcon, reactjsIcon, jupyterIcon, numpyIcon, pandasIcon, scipyIcon, matplotlibIcon, tensorflowIcon, seabornIcon, scikitLearnIcon } from "../images/Icons"
import languageInformations from '../model/Language';

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
                    <ImageIcon width={100} src={motivationIcon} alt="Motivation icon" />
                    <h3>Motivated</h3>
                    <p>I am a person who is always motivated when I undertake any kind of activity. Motivation is one of the most useful skills in our daily life, it allows us to continue and get closer to our goals.<br />
                        You can see <Link to="/about#sentences">my sentences</Link> to understand how important this skill is to me.</p>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <ImageIcon width={100} src={curiousIcon} alt="Curious icon" />
                    <h3>Curious</h3>
                    <p>Curiosity is very important. It allows us to deepen our knowledge in different fields. In the world of computer development, in particular, it is even more so, in order to know better and more languages, frameworks or libraries for the project we are working on, or for another one in the future.</p>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <ImageIcon width={100} src={timeIcon} alt="Time icon" />
                    <h3>Patient</h3>
                    <p>Patience, in my opinion, is essential in computer science. Indeed, when we develop any kind of program, we encounter some problems that are more or less difficult to solve. This skill allows us to be able to reflect on it in order to calmly understand what is wrong. As they say, "To those who know how to wait, time opens its doors".</p>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <ImageIcon width={100} src={brainstormingIcon} alt="Brainstorming icon" />
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
                            <ImageIcon width={100} src={djangoIcon} title="Django" alt="Django icon" />
                            Django
                        </ElementItem>
                        <ElementItem href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={reactjsIcon} title="ReactJS" alt="ReactJS icon" />
                            ReactJS
                        </ElementItem>
                        <ElementItem href="https://vuejs.org/" title="VueJS" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={vuejsIcon} title="VueJS" alt="VueJS icon" />
                            VueJS
                        </ElementItem>
                    </ElementContainer>
                </Grid>
                <Grid column sm={12} md={6}>
                    <h3>Databases</h3>
                    <ElementContainer>
                        <ElementItem href="https://sqlite.org/index.html" title="SQLite" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={sqliteIcon} title="SQLite" alt="SQLite icon" />
                            SQLite
                        </ElementItem>
                        <ElementItem href="https://www.mysql.com/" title="MySQL" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={mysqlIcon} title="MySQL" alt="MySQL icon" />
                            MySQL/MariaDB
                        </ElementItem>
                        <ElementItem href="https://www.postgresql.org/" title="PostgreSQL" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={postgresqlIcon} title="PostgreSQL" alt="PostgreSQL icon" />
                            PostgreSQL
                        </ElementItem>
                        <ElementItem href="https://www.mongodb.com/" title="MongoDB" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={mongodbIcon} title="MongoDB" alt="MongoDB icon" />
                            MongoDB
                        </ElementItem>
                        <ElementItem href="https://firebase.google.com/" title="Firebase" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={firebaseIcon} title="Firebase" alt="Firebase icon" />
                            Firebase
                        </ElementItem>
                    </ElementContainer>
                </Grid>
                <Grid column sm={12} md={6}>
                    <h3>Scientific libraries/environment</h3>
                    <ElementContainer>
                        <ElementItem href="https://jupyter.org/" title="Jupyter" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={jupyterIcon} title="Jupyter" alt="Jupyter icon" />
                            Jupyter Notebook
                        </ElementItem>
                        <ElementItem href="https://numpy.org/" title="NumPy" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={numpyIcon} title="NumPy" alt="NumPy icon" />
                            NumPy
                        </ElementItem>
                        <ElementItem href="https://pandas.pydata.org/" title="Pandas" target="_blank" rel="noreferrer">
                            <ImageIcon width={100} src={pandasIcon} title="Pandas" alt="Pandas icon" />
                            Pandas
                        </ElementItem>
                        <ElementItem href="https://www.scipy.org/" title="SciPy" target="_blank" rel="noreferrer">
                            <ImageIcon width={50} src={scipyIcon} title="SciPy" alt="SciPy icon" />
                            SciPy
                        </ElementItem>
                        <ElementItem href="https://matplotlib.org/" title="Matplotlib" target="_blank" rel="noreferrer">
                            <ImageIcon width={100} src={matplotlibIcon} title="Matplotlib" alt="Matplotlib icon" />
                            Matplotlib
                        </ElementItem>
                        <ElementItem href="https://www.tensorflow.org/" title="TensorFlow" target="_blank" rel="noreferrer">
                            <ImageIcon width={100} src={tensorflowIcon} title="TensorFlow" alt="TensorFlow icon" />
                            TensorFlow
                        </ElementItem>
                        <ElementItem href="https://seaborn.pydata.org/index.html" title="Seaborn" target="_blank" rel="noreferrer">
                            <ImageIcon width={100} src={seabornIcon} title="Seaborn" alt="Seaborn icon" />
                            Seaborn
                        </ElementItem>
                        <ElementItem href='https://scikit-learn.org/' title='Scikit-Learn' target="_blank" rel="noreferrer">
                            <ImageIcon width={100} src={scikitLearnIcon} title="Scikit-Learn" alt="Scikit-Learn icon" />
                            Scikit-Learn
                        </ElementItem>
                    </ElementContainer>
                </Grid>
            </Grid>
        </section>
        <section>
            <h2>Worked area in University</h2>
            <h3>Annual projects</h3>
            <p>In the last year of Bachelor Science and in the two years of Master Science, the Computer Science Department offers the possibility to students
            for realizing project during the year (1 ou 2 semesters depending on the year). The main goal is to apply some of our knowledge on a new subject including
            project management skills, learn new things that we d'ont have time in courses or go deeper in a field. The chosen project made by an algorithm
            developed to associate each student in a group and try to satisfies the projects ordering made by students.</p>
            
            <h4>Annual project 3rd year of BSc : <a href="https://github.com/Guigui14460/recommender-system" target="_blank" rel="noreferrer">Movie recommendation system</a></h4>
            <p>
                The goal of this project, proposed by <a href="https://alec.users.greyc.fr/" target="_blank" rel="noreferrer">Céline Alec</a> from 
                the <a href="https://www.greyc.fr/en/equipes/codag-2/" target="_blank" rel="noreferrer">CODAG team</a> (Constraints, Ontologies, Data, Annotations, Graphs) 
                of <a href="https://www.greyc.fr/en/home/" target="_blank" rel="noreferrer">GREYC</a>, was to realize a recommendation system (on any subject) 
                in one month (due to teachers' organization problems). We had to test and use different approaches in the short time 
                we had on a dataset of a few thousand movies that we found on Kaggle. We used three main approaches:
            </p>
            <ul>
                <li>content-based: analysis of movie names, descriptions, and actors especially through TF-IDF;</li>
                <li>based on user collaboration: each user rated movies and we use the ratings of the users close to the current one to choose the movies;</li>
                <li>hybrid: combination of the two above mentioned.</li>
            </ul>
            <p>We also used the categorical approach to select the best movies in a certain category (action, horror, etc.).</p>
            <h4>Annual project 1st year of MSc : <a href="https://github.com/Guigui14460/multi-agents-knowledge-based-programs-interpreter" target="_blank" rel="noreferrer">Multi-agent knowledge-based program interpreter</a></h4>
            <p>
                The goal of this project, proposed by <a href="https://zanuttini.users.greyc.fr/" target="_blank" rel="noreferrer">Bruno Zanuttini</a> from 
                the <a href="https://www.greyc.fr/en/equipes/mad-2/" target="_blank" rel="noreferrer">MAD team</a> (Model, Agents, Decision) of <a href="https://www.greyc.fr/en/home/" target="_blank" rel="noreferrer">GREYC</a>, 
                was to realize a knowledge-based program interpreter in a multi-agent execution context in order to complete a code base 
                maintained and used by the team. The interpreter can be used to solve knowledge-based problems such as the "Muddy Children" puzzle.
            </p>
            <p>
                In this project, each agent has a program that it executes based on the knowledge it has about the execution environment. 
                Each condition is a knowledge formula associated with an action to be executed on the environment. A knowledge formula uses 
                propositional logic and modal logic, and more particularly epistemic logic using knowledge logic (whether it is T, S4 or S5). 
                In order to be able to evaluate them, we have implemented the Kripke structure. Being in a multi-agent environment, each agent 
                can see the actions performed by the other agents. It is therefore important that each agent can deduce new knowledge from the 
                actions of the others (if and only if they have knowledge of their program).
            </p>
            <br />

            <h3>Topics and tools seen</h3>
            <Grid row style={{ textAlign: "center" }}>
                <Grid column sm={12} md={6} lg={3}>
                    <h4>Mathematics, Algorithmics and CS Theory</h4>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Mathematics (probabilities, statistics, linear algebra, logic and reasoning, arrangements, algebric structures)</li>
                        <li>Algorithmic, graphs and tree-based search (Flow networks, dynamic programming, divide-and-conquer algorithms, greedy algorithms, Branch &amp; bound algorithm)</li>
                        <li>Language theory and compilation</li>
                        <li>Numerical &amp; Functionnal Analysis</li>
                        <li>Calculability &amp; complexity (Turing machines, problems complexity)</li>
                    </ul>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <h4>Data Science &amp; AI</h4>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Scientific computing</li>
                        <li>Databases (SQL and NoSQL DBs)</li>
                        <li>Decision support and artificial intelligence</li>
                        <li>Language engineering (base of Natural Language Processing)</li>
                        <li>Machine Learning (KNN, Bayesian networks, Linear Regression (and projection on other spaces), Logistic Classification, SVM (and kernel functions), Neural Networks)</li>
                        <li>Data Analysis (descriptive stats, MCA, ICA, PCA)</li>
                    </ul>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <h4>Development</h4>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Programming paradagims (OOP, imperative, functionnal, procedural)</li>
                        <li>Software design</li>
                        <li>Web technologies (HTML/CSS, JavaScript, PHP)</li>
                        <li>Parallel and distributed programming (C/C++ : vectorization, OpenMP, TBB, MPI)</li>
                        <li>Mobile applications</li>
                        <li>Image synthesis (OpenGL)</li>
                    </ul>
                </Grid>
                <Grid column sm={12} md={6} lg={3}>
                    <h4>Others</h4>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Scientific and IT culture</li>
                        <li>Communication &amp; English</li>
                        <li>Project Management</li>
                        <li>Software Creativity</li>
                        <li>System architecture and microcontrollers</li>
                        <li>System &amp; Networks (OSPF, BGP, MPLS, VPLS, virtualized datacenter)</li>
                    </ul>
                </Grid>
            </Grid>
        </section>
    </>
}
