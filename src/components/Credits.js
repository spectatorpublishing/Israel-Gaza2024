import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'

const HeaderDiv = styled.div`
    color:white;
`;

const PageWrapper = styled.div`
    position: relative;
    margin: 0rem 10rem;
    @media only screen and (max-width: 1023px){
        display: none;
    }
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 200rem;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    @media only screen and (max-width: 1023px){
        height: 850rem;
    }
`;

const Section = styled.div`
    width: 20%;
    color: white;
    font-family: "Noto Sans KR", ;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
`;


const Name = styled.div`
    width:450%;
    color: white;
    font-family: "Noto Sans KR",;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    margin-top: 13px;
`;

const Header = styled.div`
    color: white;
    font-family: "DM Serif Text";
    font-size: 82px;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    font-weight: 400;
    margin-top: 200px;
`;

const CreditsSection = () => {
    return (
        <PageWrapper>
            <HeaderDiv><Header>Staff who made this issue possible </Header></HeaderDiv>
                <SectAndNames>
                    {Object.entries(credits).map(([section, key]) => {
                        return(
                            <Section> {section} 
                            <br/>
                            {key.map((person, index) => {
                                return(
                                    <Name key={index}>{person.staff_name}, {person.title}</Name>
                                );
                            })}
                            <br/>
                            </Section>
                        );
                    })}
                </SectAndNames>
        </PageWrapper>
    );
};

export default CreditsSection;