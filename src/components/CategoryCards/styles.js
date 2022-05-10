import styled, { css } from 'styled-components';

export const CategoryCardsContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-x: scroll;
  width: 100vw;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};

`;

export const Button = styled.button`
    border: none;
    background: none;
    padding: 6px;
    font-size: 1.3rem;
    cursor: pointer;
    height: 8vh;

    ${({ selected, id, theme }) => (selected === id && css`
    font-weight: 700;
    border-bottom: 3px solid ${theme.fontColor};
    `)}
`;
