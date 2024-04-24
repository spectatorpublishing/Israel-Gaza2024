import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'

const HeaderDiv = styled.div`
    z-index: 10;
    color: white;
    text-align: center;
`;

const PageWrapper = styled.div`
    position: relative;
    padding: 0 5%;
    margin: 0 auto;
    max-width: 960px;
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;

    @media only screen and (max-width: 1023px){
        flex-direction: column;
    }
`;

const Section = styled.div`
    width: 100%;
    color: white;
    font-family: "Noto Sans KR";
    font-size: 3.2vw;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 2rem;

    @media (min-width: 1024px) {
        width: 20%;
        font-size: 32px;
        margin-top: 60px;
    }
`;

const Name = styled.div`
    color: white;
    font-family: "Noto Sans KR";
    font-size: 2vw;
    font-weight: 300;
    margin-top: 1.3rem;

    @media (min-width: 1024px) {
        font-size: 20px;
        margin-top: 13px;
    }
`;

const Header = styled.div`
    color: white;
    font-family: "DM Serif Text";
    font-size: 8.2vw;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    margin-top: 20vh;

    @media (min-width: 1024px) {
        font-size: 82px;
        margin-top: 200px;
    }
`;

const CreditsSection = () => {
    return (
        <PageWrapper>
            <HeaderDiv><Header>Staff who made this issue possible</Header></HeaderDiv>
                <SectAndNames>
                    {Object.entries(credits). map(([section, key]) => {
                        return (
                            <Section key={section}> {section} 
                                <br/>
                                {key.map((person, index) => {
                                    return (
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
