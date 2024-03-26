import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import LetterEditor from './LetterEditor';
import ArticleTimeline from './ArticleTimeline'

const Wrapper = styled.div`
  position: relative;
`;

const VerticalLine = styled.div`
    width: 36px; 
    height: 100%;
    background-color: white; 
    margin: 0 20px;
    position: absolute;
    right: 50%;
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading/>
      <VerticalLine />
      <LetterEditor />
      <ArticleTimeline />
    </Wrapper>
  );
};

export default Home;

