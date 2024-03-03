import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';



const Page = styled.div`
    display: flex;
    background-color: black;
    color: white;
    padding: 20px;
`;

const Column = styled.div`
    flex: 1; 
    padding: 20px;
`;

const VerticalLine = styled.div`
    width: 36px; 
    background-color: white; 
    margin: 0 20px;

`;

const Headertext = styled.div`
font-family: 'Playfair Display', serif;
font-size: 70px;
font-weight: 400;
line-height: 93px;
letter-spacing: 0.1em;
text-align: left;
`;

const Nametext = styled.div`
font-family: Nothing You Could Do;
font-size: 38px;
font-weight: 400;
line-height: 51px;
letter-spacing: -0.02em;
text-align: left;
margin:5px
`;

const Roletext = styled.div`
font-family: Bodoni Moda;
font-size: 18px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
`;




const Credits = () => {
    return (
        <Page>
            <Column>
                <Headertext>Letter</Headertext>
                <Headertext>From the</Headertext>
                <Headertext>Editor</Headertext>
                <Nametext>Noel Mark Negron III</Nametext>
                <Roletext>Editor in Chief</Roletext>
                <p></p>
                <p>Managing Editor</p>
                <p>Name</p>
                <p>Publisher</p>
            </Column>

            <VerticalLine />

            <Column>
                <p>WORDS WORDS WORDS</p>
            </Column>
        </Page>
    );
};

export default Credits;

