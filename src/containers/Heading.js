import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png'
import SpecLogoHeader from '../components/SpecLogoHeader';

const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  width: 100%; 
  height: 100%;
  flex-shrink: 0;
`;


const TextOverlay = styled.h1`
width: 346px;
height: 37px;
flex-shrink: 0;

color: var(--white, #FFF);
font-family: Times;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.92px;

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

