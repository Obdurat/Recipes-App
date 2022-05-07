import styled from 'styled-components';

export const Form = styled.form`
display: flex;
justify-content: center;
flex-flow: column nowrap;
margin: 35vh auto;
align-items: center;
background-color: #059862;
padding: 10vh 5vw;
width: 45vw;
border-radius: 10px;

    input {
        margin-bottom: 15px;
        border-radius: 8px;
        width: 100%;
        border-bottom-color: #059862;
        border-top-color: #15202B;
        padding: 5px;
    }

    button {
        background-color: white;
        border-radius: 8px;
        margin-top: 30px;
        width: 100%;
        background-color: #282A35;
        color: white;
        padding: 10px;
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
