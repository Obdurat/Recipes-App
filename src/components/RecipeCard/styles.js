import styled, { css } from 'styled-components';

export const RecipeCardContainer = styled.header`
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
      ${'' /* background: rgb(64,48,94);
      background: linear-gradient(90deg, rgba(64,48,94,1) 0%,
       rgba(56,42,80,1) 10%, rgba(43,34,60,1) 22%,
       rgba(26,23,33,1) 61%, rgba(18,18,20,1) 100%); */}
        box-shadow: 0 0 5px 0 ${theme.borderColor};
    ` : css`
      box-shadow: 0 0 10px 0 ${theme.borderColor};
    `)
}
`;

export const RecipeInfos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;

    img { 
      object-fit: cover;
    }
    div {
      display:flex ;
      align-items:center ;
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
