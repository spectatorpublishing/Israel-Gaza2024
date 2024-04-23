import React, { useState } from 'react';
import styled from 'styled-components';
import MobileArticleTemplate from '../components/MobileArticleTemplate'; 
import PrintEdition from '../components/PrintEdition';
import { articleList } from '../data/article_list';
import { coverList } from '../data/front_cover_list';
import ShowToggle from '../images/show-arrow.png';
import HideToggle from '../images/no-show-arrow.png';

const PageWrapper = styled.div`
    height: fit-content;
    position: relative;
    background-color: black;
    color: white;

    @media only screen and (min-width: 1023px){
        display: none;
    }
`;

const MonthTop = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
    width: 90%;
`;

const PrintEditionWrapper = styled.div`
    width: 100%;
    margin-bottom: 8rem;
`;

const MonthText = styled.div`
`;

const MonthTitle = styled.div`
    font-family: "DM Serif Text", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 82px;
`;

const Toggle = styled.div`
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const ToggleText = styled.div`
    font-family: Bitter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
`;

const Arrow = styled.div`
`;

const Image = styled.img`
`;

const ArticleContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const ArticleTimeline = () => {
    const [toggleStates, setToggleStates] = useState({});

    const toggleOpinion = (month) => {
        setToggleStates(prevState => ({
            ...prevState,
            [month]: {
                ...prevState[month],
                opinion: !prevState[month]?.opinion
            }
        }));
    };

    const toggleNews = (month) => {
        setToggleStates(prevState => ({
            ...prevState,
            [month]: {
                ...prevState[month],
                news: !prevState[month]?.news
            }
        }));
    };

    return (
        <PageWrapper>
            {Object.entries(articleList).map(([month, articles], index) =>{
                if (!toggleStates[month]) {
                    setToggleStates(prevState => ({
                        ...prevState,
                        [month]: { opinion: false, news: false }
                    }));
                }

                return (
                    <div key={month}>
                        <MonthTop isEven={index % 2 === 0}>
                            <PrintEditionWrapper>
                                <PrintEdition cover={coverList[month]} />
                            </PrintEditionWrapper>
                            <MonthText>
                                <MonthTitle>{month}</MonthTitle>
                            </MonthText>
                        </MonthTop>

                        <Toggle onClick={() => toggleOpinion(month)}>
                            <ToggleText>OPINION</ToggleText>
                            <Arrow><Image src={toggleStates[month]?.opinion ?  ShowToggle : HideToggle}  alt="Toggle-Opinion Arrow" /></Arrow>
                        </Toggle>

                        <Toggle onClick={() => toggleNews(month)}>
                            <ToggleText>NEWS</ToggleText>
                            <Arrow><Image src={toggleStates[month]?.news ? ShowToggle : HideToggle} alt="Toggle-News Arrow" /></Arrow>
                        </Toggle>
                        
                        {articles.map((article, index) => {
                            if ((toggleStates[month]?.opinion && article.article_section === "Opinion") ||
                                (toggleStates[month]?.news && article.article_section !== "Opinion")) {
                                return (
                                    <ArticleContainer key={index} >
                                        <MobileArticleTemplate article={article} />
                                    </ArticleContainer>
                                );
                            }
                            return null;
                        })}
                    </div>
                )
            })}
        </PageWrapper>
    );
};

export default ArticleTimeline;