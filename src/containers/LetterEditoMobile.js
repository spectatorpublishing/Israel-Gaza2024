import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    align-items: center;

    @media only screen and (min-width: 1023px){
        display: none;
    }
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    justify-content: center;
    border-right: 20.9px solid white; // Outline only the right side
    
`;

const Wrapper = styled.div`
    width: 90%;
    padding-left: 1.67rem;
    z-index: 1;  // Ensure Wrapper is above the TopWhiteLine
    position: relative;
`;

const TopWhiteLine = styled.div`
    width: 50%;
    border-top: 1rem solid white;
    margin-bottom: 20px; // Adjust as needed for spacing
    position: absolute;
    right: 0; // Align the white line to the right
`;

const TopHeader = styled.div`
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    color: var(--white, #FFF);
    font-family: "Playfair Display";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.2px;
    margin-top: 20px;
`;

const LetterTop = styled.div`
    width: 85%;
    flex-shrink: 0;
    color: var(--white, #FFF);
    font-family: "Noto Serif SC";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 70px;
`;

const Letter = styled.div`
    width: 85%;
    flex-shrink: 0;
    color: var(--white, #FFF);
    font-family: "Noto Serif SC";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
`;

const BeginningVerticalLine = styled.div`
    width: 20.9px;
    height: 149px;
    flex-shrink: 0;
    background: linear-gradient(180deg, #000 1%, #FFF 100%);
    margin-top: 0px;
`;

const RoleNameWrapper = styled.div`
    margin-top: 30px;
`;

const Name = styled.div`
    width: 180px;
    height: 35px;
    flex-shrink: 0;
    color: var(--white, #FFF);
    font-family: "Nothing You Could Do", cursive;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
    text-transform: capitalize;
`;

const Role = styled.div`
    width: 180px;
    height: 29px;
    flex-shrink: 0;
    color: #EAF5FF;
    font-family: "Bodoni Moda";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const LetterEditor = () => {
    return (
        <Page>
            <BeginningVerticalLine></BeginningVerticalLine>
            <Container>
            <TopWhiteLine></TopWhiteLine>
                <Wrapper>
                    <TopHeader>Letter From the Editor</TopHeader>
                    <LetterTop>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, 
                        semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. 
                        Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas
                        in dignissim et sapien faucibus. Tortor accumsan libero sed aliquam dui magna vitae, habitant egestas.
                        Consectetur egestas tellus auctor interdum id gravida quis pellentesque. At amet nulla tellus orci gravida. 
                        Egestas aenean mauris in velit. Fermentum consectetur augue et habitant commodo, libero odio.
                    </LetterTop>
                    <Letter>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, 
                        semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. 
                        Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas
                        in dignissim et sapien faucibus. Tortor accumsan libero sed aliquam dui magna vitae, habitant egestas.
                        Consectetur egestas tellus auctor interdum id gravida quis pellentesque. At amet nulla tellus orci gravida. 
                        Egestas aenean mauris in velit. Fermentum consectetur augue et habitant commodo, libero odio.
                    </Letter>
                    <RoleNameWrapper>
                        <Name>Name</Name>
                        <Role>Editor in Chief</Role>
                        <Name>Name</Name>
                        <Role>Managing Editor</Role>
                        <Name>Name</Name>
                        <Role>Publisher</Role>
                    </RoleNameWrapper>
                </Wrapper>
            </Container>
        </Page>
    );
};

export default LetterEditor;
