import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LeftArticleTemplate from '../components/LeftArticleTemplate';
import RightArticleTemplate from '../components/RightArticleTemplate';
import PrintEdition from '../components/PrintEdition';
import { articleList } from '../data/article_list';

const PageWrapper = styled.div`
    height: fit-content;
    position: relative;
`;



const ArticleTimeline = () => {
    return (
        <PageWrapper>
            {Object.entries(articleList).map(([month, articles]) => (
                    <div key={month}>
                        <h2>{month}</h2>
                        {articles.map((article, index) => (
                            <div key={index}>
                                <div src={article.image_url} />
                                <div href={article.article_link} target="_blank">{article.article_title}</div>
                                <div>{article.article_authors}</div>
                                <div>{article.article_date}</div>
                                <div>{article.article_section}</div>
                            </div>
                        ))}
                    </div>
                ))}
        </PageWrapper>
    );
};

export default ArticleTimeline;

