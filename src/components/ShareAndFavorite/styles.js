import styled from 'styled-components';

export const ShareAndFavoriteContainer = styled.header`
  display: flex;
  justify-content: space-between;
  right: 18%;
  top: 40%;  
  width: 20%;
  max-width: 150px;
  div {
  position: relative;
  width: 100%;
  img {
    width: 40%;
    filter: brightness(0) saturate(100%)
    invert(42%) sepia(7%) saturate(3771%) 
    hue-rotate(218deg) brightness(93%) contrast(89%);
    position: relative;
  }

  p {
    position: absolute;
    background-color: #333;
    top: 35px;
    right: -5px;
    border-radius: 5px;
    width: 100px;
    padding: 5px;
    color: #fff;
    width: 120px;
    text-align: center;

    &:after {
      content: '';
      position: absolute;
      bottom: 100%;
      right: 10%;
      width: 0;
      height: 0;
      border-bottom: 5px solid #333;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
    }
  }
  }
  `;

export const R = 0;
