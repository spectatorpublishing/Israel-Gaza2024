import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import LetterEditor from './LetterEditor';
import Credits from  '../components/Credits';
import MobileTimeline from '../containers/MobileTimeline';
import LetterEditorMobile from '../containers/LetterEditoMobile.js'
import CreditsMobile from '../components/CreditsMobile.js'
import NewArticleTimeline from './NewArticleTimeline'

const Wrapper = styled.div`
  background-color: #181818;
`;

const LowerWrapper = styled.div`
  position: relative;
  
  
`;

const VerticalLine = styled.div`

    width: 12px;
    height: 98%;
  
    gap: 0px;
    opacity: 0px;

    background-color: #FFFFFF; 
    margin: 0 20px;
    right: 48%;
    z-index: 1;
    position: absolute;
    margin-top:253px;

    @media only screen and (max-width: 1023px){
        display: none;
    }
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading/>
      
      <LowerWrapper>
        <LetterEditor />
        <LetterEditorMobile/>
        <NewArticleTimeline/>
        <MobileTimeline />
      </LowerWrapper>

      <Credits></Credits>
      <CreditsMobile></CreditsMobile>
  
    </Wrapper>
  );
};

export default Home;

