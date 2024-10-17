import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png';
import SpecLogoHeader from '../components/SpecLogoHeader';

const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 750px; 
  opacity: 1.5;
  position: relative; 
  padding: 0;
  margin: 0; 
  overflow: hidden; 
`;

const TextOverlay = styled.div`
  width: 100%;
  color: white;
  font-family: 'Times';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.92px;
  position: absolute;
  bottom: 0px;


  font-size: 300px;

  @media (max-width: 768px) {
    font-size: 150px;
    bottom: 0px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 100px;
    bottom: 0px;
    margin-left: 10px;
  }
`;

const TextOverlay2 = styled.div`
  width: 100%;
  color: var(--white, #FFF);
  font-family: 'Times';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
  position: absolute;
  bottom: 300px;
  margin-left: 30px;

  font-size: 75px;

  @media (max-width: 768px) {
    font-size: 50px;
    bottom: 150px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 35px;
    bottom: 100px;
    margin-left: 20px;
  }
`;

const Heading = () => {
  return (
    <FullPageImage>


        <TextOverlay2>COLUMBIA IN</TextOverlay2>
        <TextOverlay>CRISIS</TextOverlay>
        
      <SpecLogoHeader />
    </FullPageImage>
  );
};

export default Heading;
