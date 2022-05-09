import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:  space-between ;
  align-items: center;
  padding-bottom: 8vh;

`;

export const CategoryCardSContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
