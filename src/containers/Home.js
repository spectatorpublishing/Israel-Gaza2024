import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import LetterEditor from './LetterEditor';
import ArticleTimeline from './ArticleTimeline';
import Credits from  '../components/Credits';
import MobileTimeline from '../containers/MobileTimeline';
import LetterEditorMobile from '../containers/LetterEditoMobile.js'
import CreditsMobile from '../components/CreditsMobile.js'

const Wrapper = styled.div`
  background-color: black;
`;

const LowerWrapper = styled.div`
  position: relative;
  height: fit-content;
`;

const VerticalLine = styled.div`
    width: 36px; 
    height: 98%;
    background-color: #FFFFFF; 
    margin: 0 20px;
    position: absolute;
    right: 48%;
    z-index: 1;
    margin-top:253px;

    @media only screen and (max-width: 1023px){
        display: none;
    }
`;

const BeginningVerticalLine = styled.div`
    width: 36px; 
    height: 147px;
    background-color: #FFF; 
    margin: 0 20px;
    position: absolute;
    right: 48%;
    z-index: 1;
    background: linear-gradient(180deg, #000 1%, #FFF 100%);
    margin-top: 106px;

    @media only screen and (max-width: 1023px){
      width: 1rem;
      margin: 0px;
      right: 50%;
      height: 160px;
      display:none
    }
`;

const EndingVerticalLine = styled.div`
    width: 36px; 
    height: 147px;
    background-color: #FFF; 
    margin: 0 20px;
    position: absolute;
    right: 48%;
    z-index: 1;
    background: linear-gradient(180deg, #FFF 1%, #000 100%);

    @media only screen and (max-width: 1023px){
      width: 1rem;
      margin: 0px;
      right: 50%;
      margin-top: -2px;
    }
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading/>
      <BeginningVerticalLine/>
      <LowerWrapper>
        <VerticalLine />
        <LetterEditor />
        <LetterEditorMobile/>
        <ArticleTimeline />
        <MobileTimeline />
      </LowerWrapper>
      <EndingVerticalLine/>
      <Credits></Credits>
      <CreditsMobile></CreditsMobile>
    </Wrapper>
  );
};

export default Home;

