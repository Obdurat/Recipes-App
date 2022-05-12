import styled from 'styled-components';

export const LoginContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
flex-flow: column nowrap;
background-color:#3B235D;
padding: 10vh 5vw;
width: 45vw;
border-radius: 10px;

    input {
        margin-bottom: 15px;
        border-radius: 8px;
        width: 100%;
        border: none;
        outline: none;
        padding: 10px;
        color: #000000;
    }

    button {
        border-radius: 8px;
        margin-top: 30px;
        width: 100%;
        background-color: #fff;
        filter: brightness(${({ isDisable }) => (isDisable ? '80%' : '100%')});
        color: white;
        padding: 10px;
        border: none;
        font-size: 1.2rem;
        color: #3B235D;
    }

    h1 {
        color: #fff;
        margin: 15px 0;
    }

    @media(max-width: 800px) {
        width: 70vw;
        padding: 5vh 5vw;
        padding-top: 2vw;

        button {
            margin-top: 15px
        }
    }
`;

export const Logo = styled.img`
    width: 80%;
    height: 20%;
    margin-bottom: 40px ;
    filter: invert(10%)
`;

export const Title = styled.div`
    display: flex ;
    align-items: center;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px #5e5e5e;
    
    span {
        color: #fff;
        margin-left: 5px;
        background: #e88f00;
        border-radius: 8px;
        padding: 4px;
    }
`;
