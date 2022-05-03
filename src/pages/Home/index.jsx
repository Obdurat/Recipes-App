import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import API from '../../api';
import { TWELVE, keys, SIX } from '../../helpers/constants';
import convertAndSlice from '../../helpers/func';
import RecipeCard from '../../components/RecipeCard';
import CategoryCards from '../../components/CategoryCards';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [key, setKey] = useState('');
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    setKey(keys[pathname]);
  }, [pathname]);

  const getByCategory = async () => {
    const resCategories = await API(key, 'byCategory', categorySelected);
    setRecipes(convertAndSlice(resCategories, key, TWELVE));
  };
  const getByName = async () => {
    const res = await API(key, 'byName', '');
    setRecipes(convertAndSlice(res, key, TWELVE));
  };
  const getCategories = async () => {
    const resCategories = await API(key, 'categories', 'list');
    setCategories(resCategories[key].slice(0, SIX - 1));
  };

  useEffect(() => {
    if (categorySelected && key) {
      getByCategory();
    } else if (key) {
      getByName();
    }
  }, [categorySelected, key]);

  useEffect(() => {
    if (key) {
      getByName();
      getCategories();
    }
  }, [key]);

  return (
    <div>
      <Header />
      <CategoryCards
        categories={ categories }
        onClick={ setCategorySelected }
        categorySelected={ categorySelected }
      />
      {recipes?.map((recipe, i) => (
        <RecipeCard key={ recipe.id } type={ pathname } i={ i } recipe={ recipe } />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
