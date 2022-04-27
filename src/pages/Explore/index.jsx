import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';

const Explore = () => {
  const { push } = useHistory();

  const handleRedirect = ({ target: { value } }) => {
    push(`/explore/${value}`);
  };

  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-foods"
        value="foods"
        onClick={ handleRedirect }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        value="drinks"
        onClick={ handleRedirect }
      >
        Explore Drinks
      </button>
      <Footer />
    </div>
  );
};

export default Explore;
