import { credits } from '../data/credits'

import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    align-items: center;
    margin-top:200px;
    
    @media only screen and (min-width: 1023px){
            display: none;
        }
`;

const Wrapper =  styled.div`
width: 90%;
padding-left: 1.67rem; //this is correct, ignore red line
}
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: fixed;
    margin-top: 2rem;
    width: 90%;  
`;

const Section = styled.div`
color: var(--white, #FFF);
font-family: "Noto Sans KR",;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
margin-bottom: 30px;
`;



const TopHeader = styled.div`
    width: 90%;  
    height: 48px;
    flex-shrink: 0;
    
    color: var(--white, #FFF);
    font-family: "Playfair Display";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
   

    margin-top: 20px;

`;

const Name = styled.div`
    width: 362.274px;
    height: 34.918px;
    flex-shrink: 0;

    color: var(--white, #FFF);
    font-family: "Noto Sans KR",;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: 10px
`;

//i added this to create more space lmao
const Buffer = styled.div`
    width: 362.274px;
    height: 34.918px;
`;


const LetterEditor = () => {
    return (
        <Page>
            <Wrapper>
            <TopHeader>Staff that made this issue possible</TopHeader>
            <Buffer></Buffer>
            <SectAndNames>
                    {Object.entries(credits).map(([section, key]) => {
                        return(
                            <Section> {section} 
                            {key.map((person, index) => {
                                return(
                                    <Name key={index}>{person.staff_name}, {person.title}</Name>
                                );
                            })}
                            </Section>
                        );
                    })}
                </SectAndNames>
            </Wrapper>      
        </Page>
    );
};

export default LetterEditor;