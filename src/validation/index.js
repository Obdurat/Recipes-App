const loginValidation = (email, password) => {
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const MIN_CHARACTER_LENGTH = 6;
  return !(password.length > MIN_CHARACTER_LENGTH && regex.test(email));
};

export default loginValidation;
