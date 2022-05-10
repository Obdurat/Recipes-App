import styled from 'styled-components';

export const Form = styled.form`
display: flex;
justify-content: center;
flex-flow: column nowrap;
margin: 35vh auto;
align-items: center;
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

    @media(max-width: 800px) {
        width: 70vw;
        padding: 5vh 5vw;

        button {
            margin-top: 15px
        }
    }
`;

export const H1 = styled.h1`
text-align: center;
position: absolute;
top: 25%;
left: 50%;
transform: translateX(-50%);
`;

export const DOG = styled.img`
position: absolute;
bottom: 50px;
right: 50px;

@media(max-width: 800px) {
    width: 90px;    
}
`;
