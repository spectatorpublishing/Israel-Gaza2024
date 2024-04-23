import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'

const HeaderDiv = styled.div`
    z-index: 10;
    color:white;
`;

const PageWrapper = styled.div`
    position: relative;
    margin: 0rem 10rem;
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 200rem;
    margin-top: 2rem;
`;

const Section = styled.div`
    width: 20%;
    color: white;
    font-family: "Noto Sans KR", ;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    margin-top:60px;
`;


const Name = styled.div`
    width: 500%;
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