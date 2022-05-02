export const endpoints = {
  FOOD: {
    byIngredient: (ingredient) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
    byId: (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    foodCategories: () => 'https://www.themealdb.com/api/json/v1/1/categories.php',
    byCategory: (category) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    byNation: (nation) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`,
  },
  DRINK: {
    byId: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    byIngredient: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
  },
};

const API = async (type, arg, search) => {
  const request = fetch(endpoints[type][arg](search));
  const response = await request;
  const data = await response.json();
  return data;
};

export default API;
