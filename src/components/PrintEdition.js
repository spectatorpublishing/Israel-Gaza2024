import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background: lightgray 50%;
`;

const Title = styled.div`
  color: #F0EFEB;
  font-family: Bitter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
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
