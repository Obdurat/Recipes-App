import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipeContext } from '../../context/RecipeContext';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ExploreByIngredients = () => {
  const { location: { pathname }, push } = useHistory();
  const param = pathname.split('/')[2];

  const MAX_INGREDIENT_QUANTITY = 12;

  const URL = {
    foods: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  };

  const [ingredientList, setIngredientList] = useState([]);
  const { setParams } = useContext(RecipeContext);

  useEffect(() => {
    const fetchIngredients = async () => {
      const request = fetch(URL[param]);
      const response = await request;
      const data = await response.json();
      if (param === 'foods') {
        setIngredientList(data.meals.slice(0, MAX_INGREDIENT_QUANTITY));
      } else {
        setIngredientList(data.drinks.slice(0, MAX_INGREDIENT_QUANTITY));
      }
    };
    fetchIngredients();
  }, []);

  const handleFilterMeals = ({ currentTarget: { value } }) => {
    setParams({ type: 'meals', action: 'byIngredient', arg: value });
    push('/foods');
  };

  const handleFilterDrinks = ({ currentTarget: { value } }) => {
    setParams({ type: 'drinks', action: 'byIngredient', arg: value });
    push('/drinks');
  };

  return (
    <div>
      <Header />
      <div>
        { ingredientList.map((ingredient, index) => {
          if (param === 'foods') {
            return (
              <button
                type="button"
                data-testid={ `${index}-ingredient-card` }
                key={ ingredient.strIngredient }
                onClick={ handleFilterMeals }
                value={ ingredient.strIngredient }
              >
                <img
                  src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                  alt={ ingredient.strIngredient }
                  data-testid={ `${index}-card-img` }
                />
                <div
                  data-testid={ `${index}-card-name` }
                >
                  { ingredient.strIngredient }
                </div>
              </button>
            );
          }
          return (
            <button
              type="button"
              data-testid={ `${index}-ingredient-card` }
              key={ ingredient.strIngredient1 }
              onClick={ handleFilterDrinks }
              value={ ingredient.strIngredient1 }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                alt={ ingredient.strIngredient1 }
                data-testid={ `${index}-card-img` }
              />
              <div
                data-testid={ `${index}-card-name` }
              >
                { ingredient.strIngredient1 }
              </div>
            </button>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ExploreByIngredients;
