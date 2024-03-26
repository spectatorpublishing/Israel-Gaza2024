import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LeftArticleTemplate from '../components/LeftArticleTemplate';
import RightArticleTemplate from '../components/RightArticleTemplate';
import PrintEdition from '../components/PrintEdition';
import { articleList } from '../data/article_list';
import { coverList } from '../data/front_cover_list';

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

const PrintEditionWrapper = styled.div`
    margin-left: -150px;
`;

const MonthText = styled.div`
`;

const MonthTitle = styled.div`
    font-family: "DM Serif Text", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 70px;
`;

const LeftArticleDiv = styled.div`
    width: 45%;
    margin-left: 25px;
`;

const RightArticleDiv = styled.div`
    width: 45%;
    margin-right: 25px;
`;

const ArticleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.isRight ? 'flex-end' : 'flex-start'};
`;

const ArticleTimeline = () => {
    return (
        <PageWrapper>
            {Object.entries(articleList).map(([month, articles], index) => (
                <div key={month}>
                    <MonthTop isEven={index % 2 === 0}>
                        <PrintEditionWrapper>
                            <PrintEdition cover={coverList[month]} />
                        </PrintEditionWrapper>
                        <MonthText>
                            <MonthTitle>{month}</MonthTitle>
                        </MonthText>
                    </MonthTop>
                    
                    {articles.map((article, index) => (
                        <ArticleContainer key={index} isRight={article.article_section !== "Opinion"}>
                            {article.article_section === "Opinion" ? 
                                <LeftArticleDiv>
                                    <LeftArticleTemplate article={article} /> 
                                </LeftArticleDiv>
                                :
                                <RightArticleDiv>
                                    <RightArticleTemplate article={article} />
                                </RightArticleDiv>
                            }
                        </ArticleContainer>
                    ))}
                </div>
            ))}
        </PageWrapper>
    );
};

export default ArticleTimeline;