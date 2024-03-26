import React from 'react';
import styled from 'styled-components';

const LeftArticleTemplate = ({article}) => {
  return (
    <div>
        <p>Left Article</p>
        <div src={article.image_url} />
        <div href={article.article_link} target="_blank">{article.article_title}</div>
        <div>{article.article_authors}</div>
        <div>{article.article_date}</div>
        <div>{article.article_section}</div>
    </div>
  );
};

export default LeftArticleTemplate;