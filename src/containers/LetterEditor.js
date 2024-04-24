import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    color: white;
    margin: 2rem;
    gap: 2rem;
    @media only screen and (max-width: 1023px) {
        flex-direction: column;
        margin: 1rem;
    }
`;

const Column = styled.div`
    flex: 1;
    padding: 2rem;
    @media only screen and (max-width: 1023px) {
        padding: 1rem;
    }
`;
const VerticalLine = styled.div`
  width: 1rem;
  background-color: white;
  height: 100%;
  z-index: 0;
  position: relative; 
 
`;


const Header = styled.div`
    z-index: 10000;   
font-family: Playfair Display;
    font-size: 4vw;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-align: center;
    margin-bottom: 2rem;
    @media only screen and (max-width: 1023px) {
        font-size: 8vw;
    }
`;

const Name = styled.div`
    font-family: "Nothing You Could Do", cursive;
    font-size: 3vw;
    letter-spacing: -0.02em;
    text-align: left;
    margin: 1rem 0;
    @media only screen and (max-width: 1023px) {
        font-size: 6vw;
    }
`;

const Role = styled.div`
    font-family: Bodoni Moda;
    font-size: 2vw;
    text-align: left;
    margin-bottom: 1rem;
    @media only screen and (max-width: 1023px) {
        font-size: 4vw;
    }
`;

const Text = styled.div`
    font-family: Noto Serif SC;
    font-size: 2vw;
    text-align: left;
    margin-bottom: 2rem;
    @media only screen and (max-width: 1023px) {
        font-size: 4vw;
    }
`;

const LetterEditor = () => (
    <Page>
        <Column>
            <Header>Letter From the Editor</Header>
            <Name>Name</Name>
            <Role>Editor in Chief</Role>
            <Name>Name</Name>
            <Role>Managing Editor</Role>
            <Name>Name</Name>
            <Role>Publisher</Role>
        </Column>
        <Column>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus,
                semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et.
                Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus.
            </Text>
            <Text>
                Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id.
                Ipsum volutpat etiam tristique fringilla.
            </Text>
        </Column>
    </Page>
);

export default LetterEditor;
