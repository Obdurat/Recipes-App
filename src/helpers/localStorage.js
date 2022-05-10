export const verifyIsDoneRecipe = (recipeId) => JSON
  .parse(localStorage.getItem('doneRecipes'))?.some(
    ({ id }) => id === recipeId,
  );

export const verifyIsInProgressRecipe = (recipeId, key) => {
  const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (recipes) {
    const arr = Object.keys(recipes[key]);
    return arr?.some((id) => id === recipeId);
  }
};

const toLocalStorageFormat = ({
  id,
  type,
  nationality = '',
  alcoholicOrNot = '',
  category,
  title: name,
  thumb: image,
}) => ({
  id,
  type,
  nationality,
  category,
  name,
  alcoholicOrNot,
  image,
});

export const favoriteRecipe = (recipe) => {
  const recipeList = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let newList = [];
  if (recipeList) {
    newList = recipeList.find((item) => item.id === recipe.id)
      ? recipeList.filter((item) => item.id !== recipe.id)
      : [...recipeList, toLocalStorageFormat(recipe)];
  } else {
    newList = [toLocalStorageFormat(recipe)];
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
};

export const isFavoriteRecipe = (recipe) => {
  const recipeList = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (recipeList) return recipeList.some((item) => item.id === recipe.id);
  return false;
};

const updateLocalStorage = (pathname, recipeId) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (pathname.includes('foods')) {
    Object.assign(inProgressRecipes.meals, { [recipeId]: [] });
  } else {
    Object.assign(inProgressRecipes.cocktails, { [recipeId]: [] });
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

const pathType = (pathname) => (pathname.includes('foods') ? 'meals' : 'cocktails');

export const setInProgressRecipes = (pathname, recipeId) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgressRecipes) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {},
      meals: {},
    }));
    updateLocalStorage(pathname, recipeId);
  } else if (!inProgressRecipes[pathType(pathname)][recipeId]) {
    updateLocalStorage(pathname, recipeId);
  }
};
