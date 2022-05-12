import styled from 'styled-components';

export const DetailsContainer = styled.section`
  color: #fff;
  width: 100vw;
  font-size: 1.1rem;
  padding-bottom: 10%;
  h1 {
    font-size: 3rem;
  }
`;

export const RecipeThumb = styled.section`
   height: 20vh;
   width: 100%;
   overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RecipeInfos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  padding: 4%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      width: 80%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const StartRecipeBtn = styled.button`
  position: fixed ;
  bottom: 0;
  width: 80%;
  background: #785CB3;
  border: none;
  font-size: 1.2rem ;
  font-weight: bold;
  box-shadow: 0 0 10px 2px #000;
  color: #fff;
  width: 100%;
  height: 40px;
`;

export const Instructions = styled.article`

  h3{
    margin-bottom: 10px;
  }
`;
