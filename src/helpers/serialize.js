const keys = {
  meals: {
    title: 'strMeal',
    id: 'idMeal',
    thumb: 'strMealThumb',
  },
  drinks: {
    title: 'strDrink',
    id: 'idDrink',
    thumb: 'strDrinkThumb',
  },
};

const convertItemsToArray = (recipe, key) => Object.keys(recipe)
  .filter((item) => item.includes(key) && recipe[item])
  .map((item) => recipe[item]);

const recipeSerialize = (obj, type) => {
  const { strCategory, strInstructions,
    strYoutube, strAlcoholic, strArea, strTags,
    ...rest } = obj[type][0];

  return {
    id: rest[keys[type].id],
    type: type === 'drinks' ? 'drink' : 'food',
    title: rest[keys[type].title],
    thumb: rest[keys[type].thumb],
    nationality: strArea,
    category: strCategory,
    instructions: strInstructions,
    video: strYoutube,
    ingredients: convertItemsToArray(rest, 'strIngredient'),
    measures: convertItemsToArray(rest, 'strMeasure'),
    alcoholicOrNot: strAlcoholic,
    tags: strTags ? strTags.split(',') : [],
  };
};

export default recipeSerialize;
