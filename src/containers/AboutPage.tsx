import styled from 'styled-components';

const GreatPeopleLink = styled.a`
    font-weight: bold;
`;

export const AboutPage = () => {
    return <>
        <h1>About me</h1>
        <section>
            <h2>Work philosophy</h2>
            <article id="sentences">
                <h3>My sentences</h3>
                <p>These few sentences define my life and work philosophy :</p>
                <ul>
                    <li>"Work hard, train as much as you can, and you won't find any goals that can't be accomplished by your hard work, experience and motivation"</li>
                    <li>"Work, fail, succeed. That's the best way to achieve your dreams."</li>
                </ul>
                <p>These different sentences have been a part of my life since I was little. When I lack motivation, I repeat these sentences to myself and it comes back even bigger !</p>
            </article>
            <article id="influential-people">
                <h3>People who have influenced me</h3>
                <p>I have great admiration for these different great men :</p>
                <ul>
                    <li><GreatPeopleLink target="_blank" href="https://www.wikiwand.com/en/Elon_Musk">Elon Musk</GreatPeopleLink> : for these ideas of greatness in order to improve humanity, his hard work that allows him to do things and achieve them like no one before.</li>
                    <li><GreatPeopleLink target="_blank" href="https://www.wikiwand.com/en/David_Goggins">David Goggins</GreatPeopleLink> : for his motivation, its strength and determination when he undertakes something.</li>
                    <li><GreatPeopleLink target="_blank" href="https://www.wikiwand.com/en/Robert_Kiyosaki">Robert Kiyosaki</GreatPeopleLink> : for his demonstration on how to effectively manage money and the importance of financial literacy for everyone.</li>
                    <li><GreatPeopleLink target="_blank" href="https://www.wikiwand.com/en/Albert_Einstein">Albert Einstein</GreatPeopleLink> : why not put it on ! His great intelligence put at the service of the understanding of the world around us, which has revolutionized physics and has brought enormous benefits to humanity and science.</li>
                </ul>
            </article>
        </section>
        <section>
            <h2>Educational background and diplomas</h2>
            <article>
                <h3>Etablishments</h3>
                <ul>
                    <li>From Sep 2011 to July 2015 : Henri Sellier Lower Secondary School, Colombelles, Normandy, France</li>
                    <li>From Sep 2015 to July 2018 : Salvador Allende High School, Hérouville-Saint-Clair, Normandy, France</li>
                    <li>From Sep 2018 to June 2021 : University of Caen Normandy, France</li>
                </ul>
            </article>
            <article>
                <h3>Download my diplomas</h3>
                <ul>
                    <li><a target="_blank" href="high_school_diploma.pdf">High School diploma (scientific option)</a></li>
                    <li><a target="_blank" href="university_first_year.pdf">Marks of 1st year at University of Caen Normandy</a></li>
                    <li><a target="_blank" href="university_second_year.pdf">Marks of 2nd year at University of Caen Normandy</a></li>
                    <li><a target="_blank" href="university_third_year.pdf">Marks of 3rd year at University of Caen Normandy</a></li>
                </ul>
            </article>
        </section>
        <section>
            <h2>Hobbies</h2>
            <article>
                <h3>Computer science</h3>
                <ul>
                    <li>Artificial intelligence (Machine Learning and Deep Learning particularly)</li>
                    <li>Algorithmic</li>
                    <li>Quantum computing</li>
                    <li>Scientific computing and parallelism</li>
                    <li>Cryptography</li>
                    <li>Data analysis</li>
                </ul>
            </article>
            <article>
                <h3>Physics</h3>
                <ul>
                    <li>Astrophysics / astronomy / cosmology</li>
                    <li>Quantum physics</li>
                    <li>Particle theory</li>
                    <li>General relativity theory</li>
                </ul>
            </article>
            <article>
                <h3>History</h3>
                <ul>
                    <li>Ancient Egypt and Greece</li>
                    <li>Modern age</li>
                    <li>Contemporary age</li>
                </ul>
            </article>
        </section>
    </>
};
