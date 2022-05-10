import styled, { css } from 'styled-components';

export const ExploreContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:  center ;
  align-items: center;

  padding-bottom: 8vh;
  width: 100vw;
`;

export const IngredientCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  width: 40vw;
  max-width: 600px;
  height: 120px;
  margin: 10px 0;
  position: relative;

  div {
    width: 100%;
    height: 75%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    display: flex;
    font-size: 1.4rem;
    text-align: center;
    width: 75%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ theme }) => (theme.isDark ? css`
      border: 1px solid ${theme.boxShadow};
        box-shadow: 0 0 5px 0 ${theme.borderColor};
    ` : css`
      box-shadow: 0 0 10px 0 ${theme.borderColor};
    `)
}
`;

export const ExploreCardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 8vh;
`;
