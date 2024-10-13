import React from 'react';
import styled from 'styled-components';



const ArticleContainer = styled.div`
  width: 493px;
  height: 423px;
  flex-shrink: 0;
`

const ImageContainer = styled.div`
  width: 493px;
  height: 300.367px;
  flex-shrink: 0;
  position: relative;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  background-color: lightgray; /* Sets the background color */
  background-position: 50%; /* Positions the background to the center */
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 27.306px;
  flex-shrink: 0;
  text-align: right;

  color: var(--article-text, #F0EFEB);
  font-family: Bitter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ArticleTitle = styled.div`
  width: 493px;
  height: 29px;
  flex-shrink: 0;
  text-align: right;

  color: var(--article-text, #F0EFEB);
  font-family: Bitter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ArticleAuthor = styled.div`
  width: 493px;
  height: 37px;
  flex-shrink: 0;
  
  text-align: right;
  margin-top:17px;

  color: var(--article-text, #F0EFEB);
  font-family: "Josefin Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const CircleContainer = styled.div`
width: 97px;
height: 88.62px;
flex-shrink: 0;
border-radius: 50%;
background-color: #000;
position: absolute;

margin-top: 13px;
margin-left: 381px;

display: flex;
justify-content: center; 

`;

const DateContainer = styled.div`
width: 58px;
height: 63.952px;
flex-shrink: 0;

color: #FFF;
text-align: center;
font-family: "PT Serif Caption";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 35px; 
`;

const DateNumber = styled.div`
  color: #FFF;
  font-family: "PT Serif Caption";
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`



const getMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString('default', { month: 'short' }).toUpperCase();
};


const RightArticleTemplate = ({ article }) => {

  const dateString = article.article_date || article.article_month;
  const date = new Date(dateString);
  const month = getMonthName(date.getMonth() + 1);
  const day = date.getDate();


  return (
    <a href={article.article_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      
      <ArticleContainer>
        <SectionContainer>SECTION | SUBSECTION</SectionContainer>
        <ImageContainer>
          <CircleContainer>
            <DateContainer> Jan <DateNumber> 05 </DateNumber></DateContainer>
          </CircleContainer>
          <StyledImage src={article.image_url}/>
        </ImageContainer>
        <ArticleTitle>ARTICLE TITLE HERE</ArticleTitle>
        <ArticleAuthor>ARTICLE AUTHOR</ArticleAuthor>
      </ArticleContainer>






    </a>
  );
};

export default RightArticleTemplate;

