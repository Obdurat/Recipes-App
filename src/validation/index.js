export const loginValidation = (email, password) => {
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const MIN_CHARACTER_LENGTH = 6;
  return !(password.length > MIN_CHARACTER_LENGTH && regex.test(email));
};

export const ingredientListValidation = (ingredients, recipe) => {
  if (ingredients.length === recipe.ingredients.length) {
    return false;
  }
  return true;
};
