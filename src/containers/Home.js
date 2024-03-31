import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png'
import RVector from '../images/RVector.png'
import AVector from '../images/AVector.png'
import WVector from '../images/WVector.png'
import SpecLogoHeader from '../components/SpecLogoHeader';

const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative; /* This is required for absolute positioning of children */
`;


const TextOverlay = styled.h1`
  color: #FFF;
  font-family: Times;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28125rem;
 
`;

const Column = styled.div`
    flex: 1; 
`;


const Box1 = styled.div`
  bottom:0;
  width: fit-content;
  position:absolute;
  margin-top: 3.31rem;
  margin-bottom: 3.13rem;
  margin-left: 6.62rem;
  margin-right:
  
`;
const SubBox1 = styled.div`
  width: 57.375rem;
  height: 5.125rem;
  margin-right:31.94rem;
  margin-top:31.44rem;
  flex-shrink: 0;
  margin-bottom:11.64px;

`;

const SubBox2 = styled.div`
  display:flex;
  flex-direction:row;
  width: 780.598px;
  height: 242.511px;
  flex-shrink: 0;
  margin-right:8.41rem;

`;



const WImage = styled.div`
  background-image: url(${WVector});
  background-repeat: no-repeat;
  width: 20.51531rem;
  height: 14.89763rem;
  flex-shrink: 0;
`;
const AImage = styled.div`
  background-image: url(${AVector});
  background-repeat: no-repeat;
  margin-left: -30px;
  margin-right: 9px;
  width: 15.28656rem;
  height: 14.89763rem;
  flex-shrink: 0;
`;
const RImage = styled.div`
  background-image: url(${RVector});
  background-repeat: no-repeat;
  width: 14.21706rem;
  height: 14.63838rem;
  flex-shrink: 0;
`;

const VerticalLine2 = styled.div`
    width: 35.8px; 
    height: 8rem;
    bottom:0;
    position:absolute;
    margin-left:689px;
    margin-right:41.25rem;
    background-color: white; 
`;



const Home = () => {
  return (
    
    <FullPageImage>
      
      <SpecLogoHeader/>
      <Column>
      <VerticalLine2/> 
      </Column>

      <Box1>
        <SubBox1>
          <TextOverlay>THE ISRAEL-HAMAS</TextOverlay>
        </SubBox1>
        <SubBox2>
          <WImage></WImage>
          <AImage></AImage>
          <RImage></RImage>
        </SubBox2>
      </Box1>
      
    </FullPageImage>

  );
};

export default Home;

