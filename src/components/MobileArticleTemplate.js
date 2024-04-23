import React from 'react';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  filter: blur(5px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const ArticleContainer = styled.div`
  margin-bottom: 100px;
  width: 100%;
  height: 23rem;
  position: relative;
  overflow: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
  margin: 0 1rem 1rem 1rem;
`;

const Title = styled.div`
  color: #F0EFEB;
  font-family: Bitter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1rem;
`;

const Author = styled.div`
  color: #F0EFEB;
  font-family: "Josefin Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1rem;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 2rem;
`;

const Month = styled.div`
  color: #FFB300;
  font-family: "PT Serif Caption";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const Day = styled.div`
  color: #FFB300;
  font-family: "PT Serif Caption";
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;


const MobileArticleTemplate = ({ article }) => {
  return (
    <a href={article.article_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ArticleContainer>
        <BackgroundImage image={article.image_url} />
        <DateWrapper>
          <Month>JAN</Month>
          <Day>05</Day>
        </DateWrapper>
        <Text>
          <Title>{article.article_section.toUpperCase()}: {article.article_title}</Title>
          <Author>BY {article.article_authors.toUpperCase()}</Author>
        </Text>
      </ArticleContainer>
    </a>
  );
};

export default MobileArticleTemplate;
