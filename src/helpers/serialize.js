const keys = {
  FOOD: {
    key: 'meals',
    title: 'strMeal',
    id: 'idMeal',
    thumb: 'strMealThumb',
  },
  DRINK: {
    key: 'drinks',
    title: 'strDrink',
    id: 'idDrink',
    thumb: 'strDrinkThumb',
  },
};

const convertItemsToArray = (recipe, key) => Object.keys(recipe)
  .filter((item) => item.includes(key) && recipe[item])
  .map((item) => recipe[item]);

const recipeSerialize = (obj, type) => {
  const {
    strCategory,
    strInstructions,
    strYoutube,
    strAlcoholic,
    strArea,
    ...rest
  } = obj[keys[type].key][0];
  return {
    id: rest[keys[type].id],
    type: type.toLowerCase(),
    title: rest[keys[type].title],
    thumb: rest[keys[type].thumb],
    nationality: strArea,
    category: strCategory,
    instructions: strInstructions,
    video: strYoutube,
    ingredients: convertItemsToArray(rest, 'strIngredient'),
    measures: convertItemsToArray(rest, 'strMeasure'),
    alcoholicOrNot: strAlcoholic,
  };
};

export default recipeSerialize;
