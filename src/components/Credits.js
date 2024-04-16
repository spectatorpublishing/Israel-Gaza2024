import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'


const PageWrapper = styled.div`
    height: fit-content;
    position: relative;
`;

const Page = styled.div`
    display: flex;
    background-color: black;
    color: white;
`;

const Column = styled.div`
    flex: 1; 
`;


const LeftSectionTitle = styled.div`
    width: 140px;
    height: 38px;
    flex-shrink: 0;
    color: var(--white, #FFF);
    font-family: "Noto Sans KR", ;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;


    margin-top:60px;
    margin-left:254px;
`;


const RightSectionTitle = styled.div`
    width: 140px;
    height: 38px;
    flex-shrink: 0;
    color: var(--white, #FFF);
    font-family: "Noto Sans KR", ;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;


    margin-top:60px;
`;



const Name = styled.div`
width: 332px;
height: 32px;
flex-shrink: 0;
color: var(--white, #FFF);
font-family: "Noto Sans KR",;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: normal;


margin-left:254px;
margin-top:13px;
`;

const RightName = styled.div`
width: 332px;
height: 32px;
flex-shrink: 0;
color: var(--white, #FFF);
font-family: "Noto Sans KR",;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: normal;



margin-top:13px;
`;


const Header = styled.div`

width: 1070px;
height: 51px;
flex-shrink: 0;
color: var(--white, #FFF);
font-family: "DM Serif Text";
font-size: 64px;
font-style: normal;
font-weight: 400;
text-transform: capitalize;
font-weight: 400;
line-height: 34.49px;
margin-top:200px;
margin-left:254px;


`;



const CreditsSection = () => {
    return (
        <PageWrapper>

        <Header>Staff Who Made this Issue Possible</Header>
            <Page>
                
                <Column>
                
                    <LeftSectionTitle>Section</LeftSectionTitle>
                    <Name>Name, Position Title Position Title</Name>
                    <Name>Name, Position Title Position Title</Name>
                    <Name>Name, Position Title Position Title</Name>
                    <Name>Name, Position Title Position Title</Name>
                    <LeftSectionTitle>Section</LeftSectionTitle>
                    <Name>Name, Position Title Position Title</Name>
                    <Name>Name, Position Title Position Title</Name>
                    <Name>Name, Position Title Position Title</Name>
                    <Name>Name, Position Title Position Title</Name>

                </Column>


                <Column>
                    <RightSectionTitle>Section</RightSectionTitle>
                    <RightName>Name, Position Title Position Title</RightName>
                    <RightName>Name, Position Title Position Title</RightName>
                    <RightName>Name, Position Title Position Title</RightName>
                    <RightName>Name, Position Title Position Title</RightName>
                    <RightSectionTitle>Section</RightSectionTitle>
                    <RightName>Name, Position Title Position Title</RightName>
                    <RightName>Name, Position Title Position Title</RightName>
                    <RightName>Name, Position Title Position Title</RightName>
                    <RightName>Name, Position Title Position Title</RightName>
                </Column>


            </Page>
        </PageWrapper>
    );
};


export default CreditsSection;