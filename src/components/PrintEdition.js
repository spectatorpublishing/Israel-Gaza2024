import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 350px;
  width: 600px;
  object-fit: cover; // Ensures images are nicely fitted into the dimensions
`

const PrintEdition = ({ cover }) => {
  const imageUrl = cover.image !== "Not Provided" ? cover.image : "path_to_default_image.jpg"; // Provide a default image path

  return (
    <div>
      <Image src={imageUrl} alt={`Cover for ${cover.title}`} />
      <div>{cover.title}</div>
    </div>
  );
};

export default PrintEdition;
