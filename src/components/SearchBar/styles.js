import styled from 'styled-components';

export const SearchBarContainer = styled.section`
`;

export const SearchBarModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  position: absolute;
  top: 20vh;
  right: 10vw;
  padding: 8%;
  z-index: 5;
  width: 80vw;
  height: 300px;

  border-radius: 8px;
  background-color:#795DB4;

  * {
    color: #fff;
  }

  input {
    border-radius: 5px;
    border: none;
    outline:none;
    padding-left: 5px;
    height: 30px;
    color: black;
    width: 100%;
  }

  label {
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    font-weight: 600;

    input {
      margin-right:10px;
      width: 15%;
      height: 20px;
    }
  }


  button {
    margin-top: 5%;
    background-color: #FFFFFF;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 10px;
    color:  #3B235D;
    width: 100%;
    height: 25px;

    &:hover{
     background-color: #63487F;
     color: #fff;
    }
  }
`;
