import recipeSerialize from './serialize';

const convertAndSlice = (obj, key, num) => obj[key]?.slice(0, num)
  ?.map((item) => recipeSerialize({ [key]: [item] }, key));

export default convertAndSlice;
