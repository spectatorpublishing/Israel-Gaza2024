import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    background-color: black;
    color: white;
    margin-bottom: 10rem;
    gap: 6rem;
`;

const ColumnOne = styled.div`
    flex: 1; 
    margin-top: 10rem;
`;

const ColumnTwo = styled.div`
    flex: 1; 
    margin-top: 10rem;
`;

const TopHeader = styled.div`
    font-family: Playfair Display;
    font-size: 82px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-align: left;
    margin-left: 89px;
    width: 25rem;
`;

const TopName = styled.div`
    font-family: "Nothing You Could Do", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 38px;
    font-weight: 400;
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
    letter-spacing: -0.02em;
    text-align: left;
    margin-left:95px;
    margin-top:34px;
`;

const Role = styled.div`
    font-family: Bodoni Moda;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    width: 180px;
    height: 29px;
    top: 1452px;
    left: 95px;
    gap: 0px;
    opacity: 0px;
    margin-left:95px;
`;

const Letter = styled.div`
    font-family: Noto Serif SC;
    font-size: 32px;
    text-align: left;
    margin-bottom: 2rem;
    width: 85%;
`;

const LetterEditor = () => {
    return (
        <Page>
            <ColumnOne>
                <TopHeader>Letter From the Editor</TopHeader>
                    <TopName>Name</TopName>
                        <Role>Editor in Chief</Role>
                    <Name>Name</Name>
                        <Role>Managing Editor</Role>
                    <Name>Name</Name>
                        <Role>Publisher</Role>
            </ColumnOne>
            <ColumnTwo>
                <Letter>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, 
                    semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. 
                    Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas
                    in dignissim et sapien faucibus. Tortor accumsan libero sed aliquam dui magna vitae, habitant egestas.
                    Consectetur egestas tellus auctor interdum id gravida quis pellentesque. At amet nulla tellus orci gravida. 
                    Egestas aenean mauris in velit. Fermentum consectetur augue et habitant commodo, libero odio.
                </Letter>
                <Letter>
                    Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id. 
                    Ipsum volutpat etiam tristique fringilla. Tellus eu quis mauris massa tristique tortor, egestas luctus lacus. 
                    Gravida facilisis sagittis eget facilisi molestie amet, ut pellentesque morbi.
                </Letter>
            </ColumnTwo>
        </Page>
    );
};

export default LetterEditor;

