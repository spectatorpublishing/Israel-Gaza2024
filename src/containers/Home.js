import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import LetterEditor from './LetterEditor';
import ArticleTimeline from './ArticleTimeline'

const Wrapper = styled.div`
  background-color: black;
`;

const LowerWrapper = styled.div`
  position: relative;
  height: fit-content;
`;

const VerticalLine = styled.div`
    width: 36px; 
    height: 100%;
    background-color: white; 
    margin: 0 20px;
    position: absolute;
    right: 50%;
    z-index: 1;
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading/>
      <LowerWrapper>
        <VerticalLine />
        <LetterEditor />
        <ArticleTimeline />
      </LowerWrapper>
    </Wrapper>
  );
};

export default Home;

