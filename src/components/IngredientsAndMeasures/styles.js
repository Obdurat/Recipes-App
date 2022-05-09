import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding: 10px 0 ;
  margin: 10px 0;
  line-height: 1.6rem;
  background-color: ${({ theme }) => theme.secondary};

  h3 {
    margin: 5px 0;
  }
`;

export default Container;
