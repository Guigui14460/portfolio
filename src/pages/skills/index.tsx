import "./index.css"
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Marginer from '../../components/marginer';
import Grid from '../../components/grid';
import { ImageIcon } from '../../components/icons';
import { Tab, TabPanel } from '../../components/tabs';
import Accordion from '../../components/accordion';
import { skillsTabData } from '../../model/Skill';
import { hardSkillData } from "../../data";

const SkillItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color);
  gap: 10px;

  & > img {
    transform: scale(0.9);
    transition: all 250ms ease;
  }

  &:hover {
    filter: none !important;

    & > img {
      transform: scale(1);
    }
  }
`;

const SkillsPage = () => {
    return <>
      <h1>Skills</h1>
      <section>
        <h2>Soft skills</h2>
        <Marginer direction="vertical" margin={20} />
        <Grid row style={{ textAlign: "center" }}>
          <Grid column sm={12} md={6} lg={3}>
            <ImageIcon width={100} src="/images/soft_skills/motivation.webp" alt="Motivation icon" />
            <h3>Motivated</h3>
            <p className='justify'>I am a person who is always motivated when I undertake any kind of activity. Motivation is one of the most useful skills in our daily life, it allows us to continue and get closer to our goals.<br />
                You can see <Link className='link' to="/about#sentences">my sentences</Link> to understand how important this skill is to me.</p>
          </Grid>
          <Grid column sm={12} md={6} lg={3}>
            <ImageIcon width={100} src="/images/soft_skills/curious.webp" alt="Curious icon" />
            <h3>Curious</h3>
            <p className='justify'>Curiosity is very important. It allows us to deepen our knowledge in different fields. In the world of computer development, in particular, it is even more so, in order to know better and more languages, frameworks or libraries for the project we are working on, or for another one in the future.</p>
          </Grid>
          <Grid column sm={12} md={6} lg={3}>
            <ImageIcon width={100} src="/images/soft_skills/time.webp" alt="Time icon" />
            <h3>Patient</h3>
            <p className='justify'>Patience, in my opinion, is essential in computer science. Indeed, when we develop any kind of program, we encounter some problems that are more or less difficult to solve. This skill allows us to be able to reflect on it in order to calmly understand what is wrong. As they say, "To those who know how to wait, time opens its doors".</p>
          </Grid>
          <Grid column sm={12} md={6} lg={3}>
            <ImageIcon width={100} src="/images/soft_skills/brainstorming.webp" alt="Brainstorming icon" />
            <h3>Problem solving</h3>
            <p className='justify'>We can encounter a lot of problems in all existing areas. In computer science, problems are omnipresent so this quality is fundamental. Indeed, without it, it is impossible to work because we are constantly confronted with new problems, whether it is writing code, interpretation, compilation, or deployment in production.</p>
          </Grid>
        </Grid>
      </section>
      <section>
        <h2>Hard skills</h2>
        <Tab contentTabStyle={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 100px)", justifyContent: "center", padding: "2em", gridGap: "2em" }}>
          {skillsTabData.map((tabTitle, tabIndex) => {
            return <TabPanel title={tabTitle} key={tabIndex}>
              {hardSkillData.filter(value => {
                return value.tabs.includes(tabTitle)
              }).map((skill, skillIndex) => {
                return <SkillItem key={skillIndex} href={skill.link} target="_blank" rel="noreferrer" title={skill.name}>
                  <ImageIcon height={60} src={skill.logoUrl} alt={`${skill.name} icon`} />
                  <span>{skill.name}</span>
                </SkillItem>
              })}
            </TabPanel>
          })}
        </Tab>
      </section>
      <section>
        <h2>Area of work at the university</h2>
        <h3>Annual projects</h3>
        <p className='justify'>In the last year of Bachelor Science and in the two years of Master Science, the Computer Science Department offers the possibility to students
        for realizing project during the year (1 ou 2 semesters depending on the year). The main goal is to apply some of our knowledge on a new subject including
        project management skills, learn new things that we don't have time in courses or to go deeper in a specific field. The chosen project made by an algorithm
        developed to associate each student in a group and try to satisfies the projects ordering made by students.</p>
        
        <Accordion title='Annual project 3rd year of BSc' id="annual-project-b3">
          <>
            <h4><a className='link' href="https://github.com/Guigui14460/recommender-system" target="_blank" rel="noreferrer">Movie recommendation system</a></h4>
            <p className='justify'>
              The goal of this project, proposed by <a className='link' href="https://alec.users.greyc.fr/" target="_blank" rel="noreferrer">Céline Alec</a> from 
              the <a className='link' href="https://www.greyc.fr/en/equipes/codag-2/" target="_blank" rel="noreferrer">CODAG team</a> (Constraints, Ontologies, Data, Annotations, Graphs) 
              of <a className='link' href="https://www.greyc.fr/en/home/" target="_blank" rel="noreferrer">GREYC</a>, was to realize a recommendation system (on any subject) 
              in one month (due to teachers' organization problems). We had to test and use different approaches in the short time 
              we had on a dataset of a few thousand movies that we found on Kaggle. We used three main approaches:
            </p>
            <ul>
              <li>content-based: analysis of movie names, descriptions, and actors especially through TF-IDF;</li>
              <li>based on user collaboration: each user rated movies and we use the ratings of the users close to the current one to choose the movies;</li>
              <li>hybrid: combination of the two above mentioned.</li>
            </ul>
            <p className='justify'>We also used the categorical approach to select the best movies in a certain category (action, horror, etc.).</p>
          </>
        </Accordion>
        <Marginer direction='vertical' margin={8} />
        <Accordion title='Annual project 1st year of MSc' id="annual-project-m1">
          <>
            <h4><a className='link' href="https://github.com/Guigui14460/multi-agents-knowledge-based-programs-interpreter" target="_blank" rel="noreferrer">Multi-agent knowledge-based program interpreter</a></h4>
            <p className='justify'>
              The goal of this project, proposed by <a className='link' href="https://zanuttini.users.greyc.fr/" target="_blank" rel="noreferrer">Bruno Zanuttini</a> from 
              the <a className='link' href="https://www.greyc.fr/en/equipes/mad-2/" target="_blank" rel="noreferrer">MAD team</a> (Models, Agents, Decision) of <a className='link' href="https://www.greyc.fr/en/home/" target="_blank" rel="noreferrer">GREYC</a>, 
              was to realize a knowledge-based program interpreter in a multi-agent execution context in order to complete a code base 
              maintained and used by the team. The interpreter can be used to solve knowledge-based problems such as the "Muddy Children" puzzle.
            </p>
            <p className='justify'>
              In this project, each agent has a program that it executes based on the knowledge it has about the execution environment. 
              Each condition is a knowledge formula associated with an action to be executed on the environment. A knowledge formula uses 
              propositional logic and modal logic, and more particularly epistemic logic using knowledge logic (whether it is T, S4 or S5). 
              In order to be able to evaluate them, we have implemented the Kripke structure. Being in a multi-agent environment, each agent 
              can see the actions performed by the other agents. It is therefore important that each agent can deduce new knowledge from the 
              actions of the others (if and only if they have knowledge of their program).
            </p>
          </>
        </Accordion>
        <Marginer direction='vertical' margin={8} />
        <Accordion title='Annual project 2nd year of MSc' id="annual-project-m2">
          <>
            <h4>Link and subject available soon...</h4>
            <p className="justify">
              Information will be provided in this section once projects have been assigned.
            </p>
          </>
        </Accordion>
        <br />

        <h3>Covered topics</h3>
        <p>
          The topics below also include those under study during my last university semester.
        </p>
        <Tab>
          <TabPanel title="Short version">
            <Grid row style={{ textAlign: "center" }}>
              <Grid column sm={12} md={6}>
                <h4>Mathematics, Algorithmics and CS Theory</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Mathematics</li>
                  <li>Algorithmic, graphs and tree-based search</li>
                  <li>Language theory and compilation</li>
                  <li>Numerical &amp; Functionnal Analysis</li>
                  <li>Calculability &amp; complexity</li>
                  <li>Data transmission (data compression and information coding)</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Data Science &amp; AI</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Scientific computing</li>
                  <li>Data Analysis</li>
                  <li>Machine Learning</li>
                  <li>Reinforcement Learning</li>
                  <li>Deep Learning</li>
                  <li>Pattern Recognition</li>
                  <li>Image and signal processing</li>
                  <li>Language engineering</li>
                  <li>Decision support and artificial intelligence</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Development</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Programming paradagims</li>
                  <li>Software design</li>
                  <li>Web technologies</li>
                  <li>Databases</li>
                  <li>Parallel and distributed programming</li>
                  <li>Mobile applications</li>
                  <li>Image synthesis / Game engine</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Others</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Scientific and IT culture</li>
                  <li>Communication &amp; English</li>
                  <li>Project Management</li>
                  <li>Software Creativity</li>
                  <li>System architecture and microcontrollers</li>
                  <li>Systems &amp; Networks</li>
                </ul>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel title="Detailed version">
            <Grid row style={{ textAlign: "center" }}>
              <Grid column sm={12} md={6}>
                <h4>Mathematics, Algorithmics and CS Theory</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Mathematics (probabilities, statistics, linear algebra, logic and reasoning, arrangements, algebric structures, optimization)</li>
                  <li>Algorithmic, graphs and tree-based search (Flow networks, dynamic programming, divide-and-conquer algorithms, greedy algorithms, Branch &amp; bound algorithm)</li>
                  <li>Language theory and compilation</li>
                  <li>Numerical &amp; Functionnal Analysis (signal processing)</li>
                  <li>Calculability &amp; complexity (Turing machines, problems complexity)</li>
                  <li>
                    Data transmission
                    <ul>
                      <li>Data compression (RLE, Huffman, vectorial quantification, image and signal coding, JPEG and MPEG format)</li>
                      <li>Information coding (Shannon's theorem, Hamming's coding, Reed-Solomon's coding)</li>
                    </ul>
                  </li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Data Science &amp; AI</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Scientific computing</li>
                  <li>Data Analysis (descriptive stats, MCA, ICA, PCA, statistical tests, regression methods, density estimation)</li>
                  <li>
                    Machine Learning
                    <ul>
                      <li>Theory (VC theorem, bias-variance dilemmma, regularization, model validation, ERM, Lagrangian optimization)</li>
                      <li>Supervised learning (KNN, Bayesian networks, Linear and Non-linear Regressions, Logistic Classification, SVM, Kernel methods, Neural Networks, ensemble methods)</li>
                      <li>Unsupervised learning (clustering: k-means, dimension reduction: PCA, t-SNE, ISOMAP, Laplacian Eigenmaps)</li>
                    </ul>
                  </li>
                  <li>Reinforcement Learning (MDP, Bellman equation, SARSA, Q-learning, Policy Gradient Method)</li>
                  <li>
                    Deep Learning
                    <ul>
                      <li>Basics (universal approximation theorem, SGD, auto-differentiation, CNN, network visualization)</li>
                      <li>Image generation (VAE, GAN)</li>
                    </ul>
                  </li>
                  <li>Pattern Recognition (objects similarity measurements for chains or graphs, regression/indexing/classification tasks, moments method, Hungarian algorithm, Levenshtein distance, graph kernels)</li>
                  <li>Image and signal processing (inverse problems, PDE for image processing and graphs, harmonic analysis and variational methods for inverse image problems)</li>
                  <li>Language engineering (base of Natural Language Processing)</li>
                  <li>Decision support and artificial intelligence (logic, planning, constraint satisfaction, data mining, evolutionary algorithms)</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Development</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Programming paradagims (OOP, imperative, functionnal, procedural)</li>
                  <li>Software design</li>
                  <li>Web technologies (HTML/CSS, JavaScript, PHP)</li>
                  <li>Databases (SQL and NoSQL DBs)</li>
                  <li>Parallel and distributed programming (C/C++: vectorization, OpenMP, TBB, MPI)</li>
                  <li>Mobile applications (VueJS with Ionic, Flutter)</li>
                  <li>Image synthesis / Game engine (OpenGL)</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Others</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Scientific and IT culture</li>
                  <li>Communication &amp; English</li>
                  <li>Project Management</li>
                  <li>Software Creativity</li>
                  <li>System architecture and microcontrollers</li>
                  <li>Systems &amp; Networks (OSPF, BGP, MPLS, VPLS, virtualized datacenter)</li>
                </ul>
              </Grid>
            </Grid>
          </TabPanel>
        </Tab>
      </section>
      <section>
        <h2>Covered topics in personal projects (or that interest me)</h2>
        <p>
          Only the topics that were not covered during my training are presented below.
        </p>
        <Tab>
          <TabPanel title="Short version">
            <Grid row style={{ textAlign: "center" }}>
              <Grid column sm={12} md={6}>
                <h4>Data Science &amp; AI</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Data extraction</li>
                  <li>Data Analysis</li>
                  <li>Machine Learning</li>
                  <li>Deep Learning</li>
                  <li>Image and signal processing</li>
                  <li>Decision support and artificial intelligence</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Development</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Web technologies</li>
                  <li>Image synthesis / Game engine</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Mathematics, Algorithmics and CS Theory</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Mathematics</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Others</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Quantum computing</li>
                </ul>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel title="Detailed version">
            <Grid row style={{ textAlign: "center" }}>
              <Grid column sm={12} md={6}>
                <h4>Data Science &amp; AI</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Data extraction (scraping, parsing)</li>
                  <li>Data Analysis (data wrangling)</li>
                  <li>Machine Learning (time series data)</li>
                  <li>Deep Learning (neural networks, CNN, RNN, GNN, transformers, diffusion models)</li>
                  <li>Image and signal processing</li>
                  <li>Decision support and artificial intelligence</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Development</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Web technologies (ReactJS, NextJS, Django)</li>
                  <li>Image synthesis / Game engine (Ray Tracing implementation)</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Mathematics, Algorithmics and CS Theory</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Mathematics (statistics, linear algebra, geometry)</li>
                </ul>
              </Grid>
              <Grid column sm={12} md={6}>
                <h4>Others</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Quantum computing (theory, use of Qiskit, QAI/QML understanding)</li>
                </ul>
              </Grid>
            </Grid>
          </TabPanel>
        </Tab>
      </section>
    </>
};

export default SkillsPage;
