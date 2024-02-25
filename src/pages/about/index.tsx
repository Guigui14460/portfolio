import styled from 'styled-components';
import Grid from '../../components/grid';

const GreatPeopleLink = styled.a`
    font-weight: bold;
`;

const AboutPage = () => {
    return <>
        <h1>About me</h1>
        <section>
            <h2>Work philosophy</h2>
            <article id="sentences">
                <h3>My sentences</h3>
                <p className='justify'>These few sentences define my life and work philosophy:</p>
                <ul>
                    <li>"Work hard, train as much as you can, and you won't find any goals that can't be accomplished by your hard work, experience and motivation"</li>
                    <li>"Work, fail, succeed. That's the best way to achieve your dreams."</li>
                </ul>
                <p className='justify'>These different sentences have been a part of my life since I was little. When I lack motivation, I repeat these sentences to myself and it comes back even bigger !</p>
            </article>
            <article id="influential-people">
                <h3>People who have influenced me</h3>
                <p className='justify'>I have great admiration for these different great men:</p>
                <ul>
                    <li><GreatPeopleLink target="_blank" className='link' href="https://www.wikiwand.com/en/Elon_Musk">Elon Musk</GreatPeopleLink>: for these ideas of greatness in order to improve humanity, his hard work that allows him to do things and achieve them like no one before.</li>
                    <li><GreatPeopleLink target="_blank" className='link' href="https://www.wikiwand.com/en/David_Goggins">David Goggins</GreatPeopleLink>: for his motivation, its strength and determination when he undertakes something.</li>
                    <li><GreatPeopleLink target="_blank" className='link' href="https://www.wikiwand.com/en/Robert_Kiyosaki">Robert Kiyosaki</GreatPeopleLink>: for his demonstration on how to effectively manage money and the importance of financial literacy for everyone.</li>
                    <li><GreatPeopleLink target="_blank" className='link' href="https://www.wikiwand.com/en/Albert_Einstein">Albert Einstein</GreatPeopleLink>: why not put it on ! His great intelligence put at the service of the understanding of the world around us, which has revolutionized physics and has brought enormous benefits to humanity and science.</li>
                </ul>
            </article>
        </section>
        <section>
            <h2 id="educational">Educational background</h2>
            <ul>
                <li>From Sep 2011 to July 2015: Henri Sellier Lower Secondary School, <a href="https://www.colombelles.fr/" target="_blank" rel="noreferrer" className="link">Colombelles</a>, <a href="https://en.wikipedia.org/wiki/France" target="_blank" rel="noreferrer" className="link">France</a></li>
                <li>
                    From Sep 2015 to July 2018: <a href="https://lycee-salvador-allende.etab.ac-caen.fr/" target="_blank" rel="noreferrer" className="link">Salvador Allende High School</a>, <a href="https://www.herouville.net/"  target="_blank" rel="noreferrer" className="link">Hérouville-Saint-Clair</a>, <a href="https://en.wikipedia.org/wiki/France" target="_blank" rel="noreferrer" className="link">France</a>
                </li>
                <li>
                    From Sep 2018 to June 2021: <a href="https://www.unicaen.fr/" target="_blank" rel="noreferrer" className="link">University of Caen Normandy</a>, <a href="https://caen.fr/" target="_blank" rel="noreferrer" className="link">Caen</a>, <a href="https://en.wikipedia.org/wiki/France" target="_blank" rel="noreferrer" className="link">France</a> (BSc in Computer Science)
                </li>
                <li>
                    From Sep 2021 to Sep 2023: <a href="https://www.unicaen.fr/" target="_blank" rel="noreferrer" className="link">University of Caen Normandy</a>, <a href="https://caen.fr/" target="_blank" rel="noreferrer" className="link">Caen</a>, <a href="https://en.wikipedia.org/wiki/France" target="_blank" rel="noreferrer" className="link">France</a> (MSc in Computer Science)
                </li>
                <li>
                    From Sep 2023 to today: <a href="https://www.unicaen.fr/" target="_blank" rel="noreferrer" className="link">University of Caen Normandy</a>, <a href="https://caen.fr/" target="_blank" rel="noreferrer" className="link">Caen</a>, <a href="https://en.wikipedia.org/wiki/France" target="_blank" rel="noreferrer" className="link">France</a> (PhD in Computer Science)
                </li>
            </ul>
        </section>
        <section>
            <h2 id="certifications">Certifications</h2>
            <ul>
                <li>
                    Sep 2021: <a className='link' target="_blank" rel="noreferrer" href="https://www.credly.com/badges/af6413b1-706b-4c2f-b5f7-31143daefdd5">IBM Quantum Challenge Africa 2021 Achievement</a>
                    <p>Building and solving application models in Qiskit, in the areas of optimisation, finance and chemistry.</p>
                </li>
            </ul>
        </section>
        <section>
            <h2>Hobbies</h2>
            
            <Grid row style={{ textAlign: "center" }}>
                <Grid column sm={12} md={6}>
                    <h3>Computer science</h3>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Artificial intelligence (Machine Learning and Deep Learning especially)</li>
                        <li>Data analysis</li>
                        <li>Quantum computing</li>
                        <li>Algorithmic</li>
                        <li>Scientific computing and parallelism</li>
                    </ul>
                </Grid>
                <Grid column sm={12} md={6}>
                    <h3>Sciences</h3>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            Physics
                            <ul>
                                <li>Astrophysics / astronomy / cosmology</li>
                                <li>Quantum physics</li>
                                <li>Particle theory</li>
                                <li>General relativity theory</li>
                            </ul>
                        </li>
                        <li>
                            Mathematics
                        </li>
                        <li>
                            Biology
                        </li>
                    </ul>
                </Grid>
                <Grid column sm={12} md={6}>
                    <h3>History</h3>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Ancient period</li>
                        <li>Modern age</li>
                        <li>Contemporary age</li>
                    </ul>
                </Grid>
                <Grid column sm={12} md={6}>
                    <h3>Others</h3>
                    <ul style={{ textAlign: 'left' }}>
                        <li>French Rap</li>
                        <li>Watching movies / series</li>
                        <li>Video Games</li>
                        <li>Reading books</li>
                    </ul>
                </Grid>
            </Grid>
        </section>
    </>
};

export default AboutPage;
