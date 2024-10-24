import React, { useState } from 'react';
import styled from 'styled-components';
import arrowImg from '../images/Arrow.png';
import LeftArticleTemplate from '../components/LeftArticleTemplate';
import RightArticleTemplate from '../components/RightArticleTemplate';

import { articleList } from '../data/article_list';

const PageWrapper = styled.div`
    height: fit-content;
    position: relative;
    background-color:  #181818;
    color: white;

    @media only screen and (max-width: 1023px) {
        display: none;
}
`;

const ToggleBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100px;
    background-color: #f6f6f6;
    cursor: pointer;
    box-shadow: 10px 10px 15px 5px rgba(0, 0, 0, 0.8); /* More pronounced shadow */
`;

const MonthText = styled.div`
    color: #181818;
    font-family: 'DM Serif Text';
    font-size: 50px;
    font-weight: 400;
    line-height: normal;
    margin-left: 56px;
    flex-grow: 1;
`;

const ImageWrapper = styled.div`
    width: 58px;
    height: auto;
    margin-right: 56px;
`;

const ArrowImage = styled.img`
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}
`;

const ArticlesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 56px;
`;

const ArticleContainer = styled.div`

`;

const NewArticleTimeline = () => {
  // OBTAINS ALL MONTHS
const months = Object.keys(articleList);

  // Initialize openMonths with the first two months open
const [openMonths, setOpenMonths] = useState(() => {
    const initialState = {};
    months.forEach((month, index) => {
      initialState[month] = index < 2; // Open first two months
    });
    return initialState;
});

  // Function to toggle the dropdown for a month
const toggleDropdown = (monthName) => {
    setOpenMonths((prevState) => ({
    ...prevState,
    [monthName]: !prevState[monthName],
    }));
};

return (
    <PageWrapper>
    {Object.entries(articleList).map(([month, articles], index) => {
        const isOpen = openMonths[month];

        return (
        <div key={month}>
            {/* Toggle Block */}
            <ToggleBlock onClick={() => toggleDropdown(month)}>
            <MonthText>{month}</MonthText>
            <ImageWrapper>
                <ArrowImage src={arrowImg} alt="arrow" isOpen={isOpen} />
            </ImageWrapper>
            </ToggleBlock>

            {/* Articles Grid */}
            {isOpen && articles && (
            <ArticlesGrid>
                {articles.map((article, idx) => (
                <ArticleContainer key={idx}>
                    {article.article_section === 'Opinion' ? (
                    <LeftArticleTemplate article={article} />
                    ) : (
                    <RightArticleTemplate article={article} />
                    )}
                </ArticleContainer>
                ))}
            </ArticlesGrid>
            )}
        </div>
        );
    })}
    </PageWrapper>
);
};

export default NewArticleTimeline;
