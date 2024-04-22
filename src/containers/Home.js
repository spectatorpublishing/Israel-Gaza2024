import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import LetterEditor from './LetterEditor';
import ArticleTimeline from './ArticleTimeline'
import Credits from  '../components/Credits'
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
    right: 50%;
    z-index: 1;
    margin-top:253px
`;

const BeginningVerticalLine = styled.div`
    width: 36px; 
    height: 147px;
    background-color: #FFF; 
    margin: 0 20px;
    position: absolute;
    right: 50%;
    z-index: 1;
    background: linear-gradient(180deg, #000 28%, #FFF 100%);
    margin-top: 106px
`;

const EndingVerticalLine = styled.div`
    width: 36px; 
    height: 147px;
    background-color: #FFF; 
    margin: 0 20px;
    position: absolute;
    right: 50%;
    z-index: 1;
    background: linear-gradient(180deg, #FFF 28%, #000 100%);

    
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading/>
      <BeginningVerticalLine/>
      <LowerWrapper>
        <VerticalLine />
        <LetterEditor />
        <ArticleTimeline />
      </LowerWrapper>
      <EndingVerticalLine/>
      <Credits></Credits>
    </Wrapper>
    

  );
};

export default Home;

