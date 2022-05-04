export const handleInProgress = (pathname, recipeId) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (pathname.includes('foods')) {
    Object.assign(inProgressRecipes.meals, { [recipeId]: [] });
  } else {
    Object.assign(inProgressRecipes.cocktails, { [recipeId]: [] });
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

export const handleVerfication = (ingredients, recipe) => {
  if (ingredients.length === recipe.ingredients.length) {
    return false;
  }
  return true;
};

export const updateIngredients = (ingredients, checked, value) => {
  if (checked) {
    return [...ingredients, value];
  }
  return ingredients.filter((e) => e !== value);
};

export const handleFinishRecipe = (recipe) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) {
    localStorage.setItem('doneRecipes', JSON.stringify([recipe]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, recipe]));
  }
};
