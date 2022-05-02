import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

const ExploreType = () => {
  const { location: { pathname }, push } = useHistory();

  const START_POSITION = 9;
  const param = pathname.slice(START_POSITION);

  const URL = {
    foods: 'https://www.themealdb.com/api/json/v1/1/random.php',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  };

  const handleRedirect = ({ target: { value } }) => {
    push(`/explore/${param}/${value}`);
  };

  const fetchRandomMeal = async () => {
    const request = fetch(URL[param]);
    const response = await request;
    const data = await response.json();
    return data;
  };

  const handleSurpriseMe = async () => {
    const data = await fetchRandomMeal();
    if (param === 'foods') {
      push(`/${param}/${data.meals[0].idMeal}`);
    } else {
      push(`/${param}/${data.drinks[0].idDrink}`);
    }
  };

  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        value="ingredients"
        onClick={ handleRedirect }
      >
        By Ingredient
      </button>
      { param !== 'drinks' && (
        <button
          type="button"
          data-testid="explore-by-nationality"
          value="nationalities"
          onClick={ handleRedirect }
        >
          By Nationality
        </button>
      ) }
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurpriseMe }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
};

export default ExploreType;
