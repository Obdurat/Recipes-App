import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const FavoriteRecipesContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:  center ;
  align-items: center;

  padding-bottom: 8vh;
  width: 100vw;
`;

export const Option = styled.section`
  display: flex;
  width: 80%;
`;

export const Button = styled.button`
  background: #785CB3;
  border: none;
  font-size: 1.2rem ;
  margin: 10px;
  font-weight: bold;
  color: #fff;
  height: 40px;
  width: 80%;
  border-radius: 10px;
`;

export const FavoriteRecipeCard = styled.section`
  display: flex;
  justify-content: space-between;

  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  width: 90vw;
  max-width: 600px;
  height: 80px;
  margin: 10px 0;
  position: relative;
  
  ${({ theme }) => (theme.isDark ? css`
      border: 1px solid ${theme.boxShadow};
        box-shadow: 0 0 5px 0 ${theme.borderColor};
    ` : css`
      box-shadow: 0 0 10px 0 ${theme.borderColor};
    `)
}
`;

export const RecipeInfos = styled(Link)`
    display: flex;
    text-decoration: none;
    cursor: pointer;
    width: 90%;

    img { 
      object-fit: cover;
      width: 35%;
    }
    
    div {
      display:flex ;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding-left: 4%;
      h3 {
        display: flex;
        font-size: 1.4rem;
        width: 75%;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
`;

export const ShareAndFavoriteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  max-width: 150px;
  div {
  position: relative;
  img {
    width: 25px;
    filter: brightness(0) saturate(100%)
    invert(42%) sepia(7%) saturate(3771%) 
    hue-rotate(218deg) brightness(93%) contrast(89%);
    position: relative;
    margin-left: 5px;
  }
  }
  `;

export const Copied = styled.p`
    position: fixed;
    background-color: #333;
    right: 35vw;
    bottom: 10vh;
    border-radius: 5px;
    width: 30vw;
    padding: 5px;
    color: #fff;
    text-align: center;
`;
