import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';
import * as S from './styles';

const Explore = () => {
  const { push } = useHistory();

  const handleRedirect = ({ target: { value } }) => {
    push(`/explore/${value}`);
  };

  return (
    <>
      <Header />
      <S.ExploreContainer>
        <S.Button
          type="button"
          data-testid="explore-foods"
          value="foods"
          onClick={ handleRedirect }
        >
          Explore Foods
        </S.Button>
        <S.Button
          type="button"
          data-testid="explore-drinks"
          value="drinks"
          onClick={ handleRedirect }
        >
          Explore Drinks
        </S.Button>
        <Footer />
      </S.ExploreContainer>
    </>
  );
};

export default Explore;
