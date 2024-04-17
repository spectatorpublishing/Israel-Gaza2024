import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 100px; 
  margin-left: 10px;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  flex-grow: 1; 
  padding-right: 20px;
`;

const Title = styled.div`
  width: 300px; 
  
  height: auto;

  color: var(--article-text, #F0EFEB);
  font-family: Bitter;
  font-size: 22px; /
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;

  margin-bottom: 70px;
`;

const Author = styled.div`
  width: 300px;
  height: auto; /

  color: var(--article-text, #F0EFEB);
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px; // Larger font size
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageColumn = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
`;

const Image = styled.img`
  width: 300px; 
  height: 180px;
  object-fit: cover; 
`;

const DateWrapper = styled.div`
  width: 50px;
  height: 80px; 
  flex-shrink: 0;
`;

const Month = styled.div`
  color: var(--white, #FFF);
  text-align: center;
  font-family: "PT Serif Caption", serif; 
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;

const Day = styled.div`
  color: var(--white, #FFF);
  font-family: "PT Serif Caption", serif;
  font-size: 40px; 
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;





const LeftArticleTemplate = ({ article }) => {
  return (
    <a href={article.article_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ArticleContainer>
        <TextColumn>
          <Title>{article.article_section.toUpperCase()}: {article.article_title}</Title>
          <Author>BY {article.article_authors.toUpperCase()}</Author>
        </TextColumn>
        <ImageColumn>
          <Image src={article.image_url} alt="Article" />
        </ImageColumn>
        <DateWrapper>
          <Month>JAN</Month>
          <Day>05</Day>
        </DateWrapper>
      </ArticleContainer>
    </a>
  );
};


export default LeftArticleTemplate;

