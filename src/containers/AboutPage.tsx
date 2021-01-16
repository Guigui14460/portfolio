import React from 'react';
import styled from 'styled-components';

const GreatPeopleLink = styled.a`
    font-weight: bold;
`;

export const AboutPage = (props: any) => {
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
                    <li><GreatPeopleLink target="_blank" href="https://www.wikiwand.com/en/David_Goggins">David Goggins</GreatPeopleLink> : for his motivation when he undertakes something.</li>
                    <li><GreatPeopleLink target="_blank" href="https://www.wikiwand.com/en/Robert_Kiyosaki">Robert Kiyosaki</GreatPeopleLink> : for his demonstration on how to effectively manage money and the importance of financial literacy for everyone.</li>
                    <li><GreatPeopleLink target="_blank" href="https://www.wikiwand.com/en/Albert_Einstein">Albert Einstein</GreatPeopleLink> : why not put it on ! His great intelligence put at the service of the understanding of the world around us, which has revolutionized physics and has brought enormous benefits to humanity and science.</li>
                </ul>
            </article>
        </section>
    </>
};
