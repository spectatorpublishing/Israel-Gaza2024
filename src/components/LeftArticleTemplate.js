// LeftArticleTemplate.js
import React from 'react';
import { ArticleBlock, DateBlock, ImageBlock, TitleBlock, AuthorBlock } from './ArticleBlockStyled';

const LeftArticleTemplate = ({article}) => {
  const date = new Date(article.article_date); // Assumes article_date is a valid date string
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = date.getDate();

  return (
    <ArticleBlock>
      <DateBlock>
        <div>{month}</div>
        <div>{day}</div>
      </DateBlock>
      <ImageBlock src={article.image_url} alt={`Article image for ${article.article_title}`} />
      <div>
        <TitleBlock>{article.article_title}</TitleBlock>
        <AuthorBlock>{article.article_authors}</AuthorBlock>
      </div>
    </ArticleBlock>
  );
};

export default LeftArticleTemplate;
