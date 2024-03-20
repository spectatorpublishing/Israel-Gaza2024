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
  bottom: 100px; /* Adjusted position */
  left: 44px; /* Adjusted position */
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 75px;
  line-height: 88px;
  letter-spacing: 0.06em;
  text-align: left;
  word-spacing: 5px;
`;

const TextOverlay2 = styled.h1`
  position: absolute;
  bottom: 50px; /* Position it higher than TextOverlay to avoid overlap */
  left: 44px; /* Align with the left of TextOverlay */
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 75px; /* Same font size as TextOverlay for consistency */
  text-align: left;
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