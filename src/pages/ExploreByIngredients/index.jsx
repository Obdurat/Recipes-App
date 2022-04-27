import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ExploreByIngredients = () => {
  const { location: { pathname } } = useHistory();
  const param = pathname.split('/')[2];

  const MAX_INGREDIENT_QUANTITY = 12;

  const URL = {
    foods: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  };

  const [ingredientList, setIngredientList] = useState([]);

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

  return (
    <div>
      <Header />
      <div>
        { ingredientList.map((ingredient, index) => {
          if (param === 'foods') {
            return (
              <div
                key={ ingredient.strIngredient }
                data-testid={ `${index}-ingredient-card` }
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
              </div>
            );
          }
          return (
            <div
              key={ ingredient.strIngredient1 }
              data-testid={ `${index}-ingredient-card` }
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
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ExploreByIngredients;
