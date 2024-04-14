import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: flex;
  background: black;
  color: white;
  padding: 20px;
  padding-right: 10px;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  flex-grow: 1; 
  padding-right: 20px; 
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
`;

const Author = styled.div`
  font-size: 16px;
  margin-top: auto; 
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column; 
`;

const Image = styled.img`
  width: 240px; 
  height: 128px; 
  object-fit: cover;
`;

const RightArticleTemplate = ({ article }) => {
  return (
    <ArticleContainer>
      <TextColumn>
        <Title>{article.article_title}</Title>
        <Author>By {article.article_authors}</Author>
      </TextColumn>
      <ImageColumn>
        <Image src={article.image_url} alt="Article" />
      </ImageColumn>
    </ArticleContainer>
  );
};

export default RightArticleTemplate;

