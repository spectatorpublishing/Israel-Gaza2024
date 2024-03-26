import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 350px;
  width: 600px;
`

const PrintEdition = ({cover}) => {
  return (
    <div>
      <p>FRONT COVER IMAGE HERE</p>
      <Image src={cover.image} />
      <div>{cover.title}</div>
    </div>
  );
};

export default PrintEdition;