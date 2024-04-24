import React from 'react';
import styled from 'styled-components';
import coverCollage from '../images/coverPage.png';
import SpecLogoHeader from '../components/SpecLogoHeader';

const FullPageImage = styled.div`
  background-image: url(${coverCollage});
  width: 100%;
  height: 880px;  // Make the height responsive to the viewport height
  opacity: 1.5;      // Adjust opacity as needed, assuming you want it visible
  display: flex;
`;


const TextOverlay = styled.h1`
  width: 100%;
  color: white;
  font-family: 'Times';
  font-size: calc(14vw + 14vh);  // Use a combination of viewport width and height for scalability
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.92px;
  position: absolute;
  top: 50%;
`;

const Heading = () => {
  return (
    <FullPageImage>
      <SpecLogoHeader />
    </FullPageImage>
  );
};

export default Heading;
