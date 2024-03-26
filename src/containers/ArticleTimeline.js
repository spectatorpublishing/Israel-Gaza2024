import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LeftArticleTemplate from '../components/LeftArticleTemplate';
import RightArticleTemplate from '../components/RightArticleTemplate';
import PrintEdition from '../components/PrintEdition';
import { articleList } from '../data/article_list';

const PageWrapper = styled.div`
    height: fit-content;
    position: relative;
    background-color: black;
    color: white;
`;

const MonthTop = styled.div`
    display: flex;
    flex-direction: ${props => props.isEven ? 'row' : 'row-reverse'};
    align-items: center;
    margin-bottom: 50px; /* Adjust as needed */
    width: 100%;
    justify-content: space-around;
`;

const MonthText = styled.div`
`;

const MonthTitle = styled.div`
    font-family: "DM Serif Text", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 70px;
`;

const ArticleTimeline = () => {
    return (
        <PageWrapper>
            {Object.entries(articleList).map(([month, articles], index) => (
                <div key={month}>
                    <MonthTop isEven={index % 2 === 0}>
                        <PrintEdition></PrintEdition>
                        <MonthText>
                            <MonthTitle>{month}</MonthTitle>
                        </MonthText>
                    </MonthTop>
                    
                    {articles.map((article, index) => (
                        <div key={index}>
                            {article.article_section === "Opinion" ? 
                                <LeftArticleTemplate article={article} /> :
                                <RightArticleTemplate article={article} />
                            }
                        </div>
                    ))}
                </div>
            ))}
        </PageWrapper>
    );
};

export default ArticleTimeline;