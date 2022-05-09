import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content:space-evenly;
  /* ${({ whenVisible }) => (whenVisible ? 'space-evenly' : 'flex-between')} ; */
  align-items: center;

  width: 100vw;
  height: 7vh;
  background-color: #3B235D;
  padding: 0 3%;
  
  h1 {
    color: #fff !important;
    font-size: 1.8rem;
    text-align: center;
    width: 100%;
  }

  img {
    filter: invert(100%);
  }
`;

export const r = 0;
