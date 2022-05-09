import styled from 'styled-components';

export const RecommendationCardContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
    margin: 10px 0;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};

    div {
      display: flex;
      overflow: auto ;
    }

    h3 {
      margin-bottom: 10px;
    }
`;

export const RecommendationCard = styled.section`
    display: flex ;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 50%;
    padding: 2vw;
    margin-right: 5px;

    img {
      height: 100%;
      width: 45vw;
      border-radius: 10%;
    }
    h2 {
      margin: 10px;
    }

`;
