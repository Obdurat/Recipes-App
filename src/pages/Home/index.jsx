import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { RecipeContext } from '../../context/RecipeContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import API from '../../api';
import { TWELVE, keys, SIX } from '../../helpers/constants';
import convertAndSlice from '../../helpers/func';
import RecipeCard from '../../components/RecipeCard';
import CategoryCards from '../../components/CategoryCards';
import * as S from './styles';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [key, setKey] = useState('');
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');

  const { searchParams, setParams } = useContext(RecipeContext);
  const { pathname } = useLocation();
  const { push } = useHistory();

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

  /* useEffect(() => {
    if (categorySelected && key) {
      getByCategory();
    } else if (key) {
      getByName();
    }
  }, [categorySelected, key]); */

  useEffect(() => {
    if (key) {
      getCategories();
    }
  }, [key]);

  useEffect(() => {
    const { type, action, arg } = searchParams;
    const filter = async () => {
      const resRecipes = await API(type, action, arg);
      const convert = convertAndSlice(resRecipes, type, TWELVE);
      if (convert === undefined) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
        return;
      }
      if (convert.length < 2) {
        push(`${pathname}/${convert[0].id}`);
        return;
      }
      setRecipes(convert);
    };
    if (type && action && arg) {
      filter();
    } else if (categorySelected && key) {
      getByCategory();
    } else if (key) {
      getByName();
    }
    return () => {
      setParams({ type: '', action: '', arg: '' });
    };
  }, [categorySelected, key]);

  return (
    <S.HomeContainer>
        <Header recipeFunc={ setRecipes } />
        <CategoryCards
          categories={ categories }
          onClick={ setCategorySelected }
          categorySelected={ categorySelected }
        />
        <S.CategoryCardSContainer>
          {recipes?.map((recipe, i) => (
            <RecipeCard key={ recipe.id } type={ pathname } i={ i } recipe={ recipe } />
          ))}
        </S.CategoryCardSContainer>
      <Footer />
    </S.HomeContainer>
  );
};

export default Home;
