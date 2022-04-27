import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ExploreByNationalities = () => {
  const [nationalityList, setNationalityList] = useState([]);
  const [nationality, setNationality] = useState('All');
  const [mealList, setMealList] = useState([]);

  const MAX_MEAL_QUANTITY = 12;

  useEffect(() => {
    const fetchNationalities = async () => {
      const request = fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const response = await request;
      const { meals } = await response.json();
      setNationalityList(meals);
    };

    fetchNationalities();

    const fetchMeals = async () => {
      const request = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const response = await request;
      const { meals } = await response.json();
      setMealList(meals.slice(0, MAX_MEAL_QUANTITY));
    };

    const setFilteredMeals = async () => {
      const request = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
      const response = await request;
      const { meals } = await response.json();
      setMealList(meals.slice(0, MAX_MEAL_QUANTITY));
    };

    if (nationality !== 'All') {
      setFilteredMeals();
    } else {
      fetchMeals();
    }
  }, [nationality]);

  return (
    <div>
      <Header />
      <div>
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ (e) => setNationality(e.target.value) }
        >
          <option data-testid="All-option">All</option>
          { nationalityList.map(({ strArea }, index) => (
            <option key={ index } data-testid={ `${strArea}-option` }>{ strArea }</option>
          )) }
        </select>
      </div>
      <div>
        { mealList.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Link to={ `/foods/${idMeal}` } key={ strMeal }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ `${strMealThumb}/preview` }
                alt={ strMeal }
                data-testid={ `${index}-card-img` }
              />
              <div data-testid={ `${index}-card-name` }>{ strMeal }</div>
            </div>
          </Link>
        )) }
      </div>
      <Footer />
    </div>
  );
};

export default ExploreByNationalities;
