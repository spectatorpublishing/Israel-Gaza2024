import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png'
import SpecLogoHeader from '../components/SpecLogoHeader';
import ArticleTemplate from '../components/LeftArticleTemplate';


const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: relative; 
`;


const TextOverlay = styled.h1`
  position: absolute;
  bottom: 500px;
  color: white; 
  font-size: 2rem; 
  padding-left: 1rem; 
  padding-bottom: 1rem; 
  margin: 0; 
  width: 918px
  height: 82px
  top: 503px
  left: 44px
  font-family: Times;
  line-height: 88px;
  letter-spacing: 0.06em;
  text-align: left;
  word-spacing: 5px;
`;

const TextOverlay2 = styled.h1`
  position: absolute;
  color: white; 
  font-family: Times;
  font-size: 10rem;  
  width: 780.6px;
  height: 242.51px;
  top: 596.64px;
  left: 45.56px;
  gap: 0px;
  opacity: 0px;

`;


const Home = () => {
  return (
    <FullPageImage>
      <SpecLogoHeader/>
      <TextOverlay2>WAR</TextOverlay2>
    </FullPageImage>

  );
};

export default Home;

