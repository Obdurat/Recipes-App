export const updateIngredientList = (ingredients, checked, value) => {
  if (checked) {
    return [...ingredients, value];
  }
  return ingredients.filter((e) => e !== value);
};

export const handleFinishRecipe = (recipe) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const date = new Date();
  if (!doneRecipes) {
    localStorage.setItem('doneRecipes', JSON.stringify([{
      ...recipe,
      doneDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    }]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, {
      ...recipe,
      doneDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    }]));
  }
};
