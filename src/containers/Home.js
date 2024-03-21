import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png'
import SpecLogoHeader from '../components/SpecLogoHeader';
import TextVector from '../components/TextVectors';
import TextHeader from '../components/TextHeader';
import FullHeader from '../components/FullHeader';

const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: relative; /* This is required for absolute positioning of children */
`;



const TextOverlay = styled.h1`
  font-family: Times;
  font-size: 5rem;
  color: white;
  position: absolute;
  font-weight: 75;
  letter-spacing: 5px;
  line-height: 10;
`;

const TextOverlay2 = styled.h1`
  font-family: Times;
  font-size: 10rem;  
  color: white; 
  
  width: 780.6px;
  height: 242.51px;
  top: 596.64px;
  left: 45.56px;

  letter-spacing: 20px; 
  text-align: justify;
`;

//this is for box containing israel-hamas and war vectors




const VerticalLine = styled.div`
    width: 36px; 
    background-color: white; 
    margin: 0 20px;
`;



const Home = () => {
  return (
    
    <FullPageImage>
      <SpecLogoHeader/>
    
      <FullHeader></FullHeader>
      

    </FullPageImage>
    

  );
};

export default Home;

