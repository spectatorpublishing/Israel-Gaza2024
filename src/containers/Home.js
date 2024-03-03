import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png'


const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: relative; /* This is required for absolute positioning of children */
`;

const TextOverlay = styled.h1`
  position: absolute;
  bottom: 100px;
  left: 0; 
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
  font-size: 75px;
  line-height: 88px;
  letter-spacing: 0.06em;
  text-align: left;

`;

const TextOverlay2 = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0; 
  color: white; 
  font-size: 2rem; 
  padding-left: 1rem; 
  padding-bottom: 1rem; 
  margin: 0; 
`;


const Home = () => {
  return (
    <FullPageImage>
      <TextOverlay>THE ISRAEL-HAMAS</TextOverlay>
      <TextOverlay2>WAR</TextOverlay2>
    </FullPageImage>

  );
};

export default Home;