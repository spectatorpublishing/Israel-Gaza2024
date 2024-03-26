import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LeftArticleTemplate from '../components/LeftArticleTemplate';
import RightArticleTemplate from '../components/RightArticleTemplate';
import PrintEdition from '../components/PrintEdition';


const Page = styled.div`
    display: flex;
    background-color: black;
    color: white;
`;

const Column = styled.div`
    flex: 1; 
`;

const VerticalLine = styled.div`
    width: 36px; 
    background-color: white; 
    margin: 0 20px;

`;

const TopHeader = styled.div`

font-family: Playfair Display;
font-size: 70px;
font-weight: 400;
line-height: 93.31px;
letter-spacing: 0.1em;
text-align: left;
margin-left:89px;
margin-top:174px;
gap: 0px;
opacity: 0px;

`;

const Header = styled.div`

font-family: Playfair Display;
font-size: 70px;
font-weight: 400;
line-height: 93.31px;
letter-spacing: 0.1em;
text-align: left;
gap: 0px;
opacity: 0px;
margin-left:89px;
`;

const TopName = styled.div`
font-family: "Nothing You Could Do", cursive;
font-weight: 400;
font-style: normal;
font-size: 38px;
font-weight: 400;
line-height: 50.69px;
letter-spacing: -0.02em;
text-align: left;
margin-left:95px;
margin-top:41px;
`;

const Name = styled.div`
font-family: "Nothing You Could Do", cursive;
font-weight: 400;
font-style: normal;
font-size: 38px;
font-weight: 400;
line-height: 50.69px;
letter-spacing: -0.02em;
text-align: left;

margin-left:95px;
margin-top:34px;

`;

const Role = styled.div`
font-family: Bodoni Moda;
font-size: 18px;
font-weight: 400;
line-height: 27.45px;
text-align: left;
width: 180px;
height: 29px;
top: 1452px;
left: 95px;
gap: 0px;
opacity: 0px;

margin-left:95px;
`;

const TopBody = styled.div`
font-family: Noto Serif SC;
font-size: 24px;
font-weight: 400;
line-height: 34.49px;
text-align: left;
margin-top:174px;
`;

const Body = styled.div`
font-family: Noto Serif SC;
font-size: 24px;
font-weight: 400;
line-height: 34.49px;
text-align: left;
margin-top:30px;
`;

const HomePage = () => {
    return (
        <div>
            <Page>
            
            <Column>
                <TopHeader>Letter</TopHeader>
                <Header>From the</Header>
                <Header>Editor</Header>
                    <TopName>Name</TopName>
                        <Role>Editor in Chief</Role>
                    <Name>Name</Name>
                        <Role>Managing Editor</Role>
                    <Name>Name</Name>
                        <Role>Publisher</Role>
            </Column>
            <VerticalLine />  
            <Column>
                <TopBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, 
                    semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. 
                    Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas
                    in dignissim et sapien faucibus. Tortor accumsan libero sed aliquam dui magna vitae, habitant egestas.
                    Consectetur egestas tellus auctor interdum id gravida quis pellentesque. At amet nulla tellus orci gravida. 
                    Egestas aenean mauris in velit. Fermentum consectetur augue et habitant commodo, libero odio.
                </TopBody>
                
                <Body>
                Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id. 
                Ipsum volutpat etiam tristique fringilla. Tellus eu quis mauris massa tristique tortor, egestas luctus lacus. 
                Gravida facilisis sagittis eget facilisi molestie amet, ut pellentesque morbi.
                </Body>

            </Column>
            </Page>
            
            <Page>
                <Column>
                    <LeftArticleTemplate></LeftArticleTemplate>
                    <PrintEdition></PrintEdition>
                </Column>

                <VerticalLine />  

                <Column>
                    <RightArticleTemplate></RightArticleTemplate>
                    <PrintEdition></PrintEdition>
                </Column>
            </Page>
        </div>
    );
};

export default HomePage;

