import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
width: 553px;
height: 441px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 9px;
flex-shrink: 0;
margin-left:37px
`;

const Image = styled.img`
width: 553px;
height: 369px;
flex-shrink: 0;
margin-left:37px
`;

const Title = styled.div`
width: 553px;
height: 63px;
flex-shrink: 0;
color: var(--article-text, #F0EFEB);
font-family: Bitter;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left:37px
`;

const PrintEdition = ({ cover }) => {
  return (
    <Wrapper>
      <Image src={cover.image} alt="Cover Image" />
      <Title>{cover.title}</Title>
    </Wrapper>
  );
};

export default PrintEdition;
