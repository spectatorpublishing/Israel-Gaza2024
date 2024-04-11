import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png'
import SpecLogoHeader from '../components/SpecLogoHeader';

const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative; 
`;

const TextOverlay = styled.h1`
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


const Heading = () => {
  return (
    <FullPageImage>
        <SpecLogoHeader/>
        <TextOverlay>WAR</TextOverlay>
    </FullPageImage>
  );
};

export default Heading;

