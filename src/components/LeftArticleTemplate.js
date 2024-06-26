import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const Title = styled.div`
  color: #F0EFEB;
  font-family: Bitter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Author = styled.div`
  color: #F0EFEB;
  font-family: "Josefin Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageColumn = styled.div` 
  width: 36%;
  margin-left: 2rem;
  margin-right: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Month = styled.div`
  color: white;
  font-family: "PT Serif Caption";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: fit-content;
  margin-bottom: 0.5rem;
`;

const Day = styled.div`
  color: white;
  font-family: "PT Serif Caption";
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
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

