import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;

  gap: 5px;
  margin-bottom: 100px; 
  margin-left: 62px;
`;

const TextColumn = styled.div`
align-items: flex-start;
`;

const Title = styled.div`
  width: 256px;
  height: 63px;

  color: var(--article-text, #F0EFEB);
  font-family: Bitter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 70px;
`;

const Author = styled.div`
  width: 222px;
  height: 17.821px;

  color: var(--article-text, #F0EFEB);
  font-family: "Josefin Sans";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageColumn = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  margin-top:5.7px
`;

const Image = styled.img`
width: 208px;
height: 139px;
`;

const DateWrapper = styled.div`
width: 42px;
height: 66px;
flex-shrink: 0;
margin-top:15px
`;

const Month = styled.div`
color: var(--white, #FFF);
text-align: center;
font-family: "PT Serif Caption";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 1;
`;

const Day = styled.div`
color: var(--white, #FFF);
font-family: "PT Serif Caption";
font-size: 35px;
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

