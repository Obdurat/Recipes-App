export const endpoints = {
  meals: {
    byIngredient: (ingredient) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
    byId: (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    foodCategories: () => 'https://www.themealdb.com/api/json/v1/1/categories.php',
    categories: (category) => `https://www.themealdb.com/api/json/v1/1/list.php?c=${category}`,
    byCategory: (category) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    byNation: (nation) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`,
  },
  drinks: {
    byId: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    byIngredient: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    categories: (category) => `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${category}`,
    byCategory: (category) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
    byLetter: (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
  },
};

const API = async (type, action, arg) => {
  const response = await fetch(endpoints[type][action](arg));
  const data = await response.json();
  return data;
};

export default API;
