// ArticleBlockStyled.js
import styled from 'styled-components';

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 16px;
  gap: 20px;
  background-color: #000; // Change to match your design
  color: #fff; // Change to match your design
  width: 822px;
  height: 242px;
`;

export const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  line-height: 1;
`;

export const ImageBlock = styled.img`
  width: 100px;
  height: auto;
`;

export const TitleBlock = styled.div`
  flex-grow: 1;
  font-size: 28px;
  margin-bottom: 8px;
`;

export const AuthorBlock = styled.div`
  font-size: 16px;
`;
