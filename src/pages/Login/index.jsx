import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, H1, DOG } from './style';
import image from './food.gif';
import { loginValidation } from '../../validation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  const { push } = useHistory();

  useEffect(() => {
    setIsDisable(loginValidation(email, password));
  }, [email, password]);

  const login = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    push('/foods');
  };

  return (
    <>
      <H1>Recipe App</H1>
      <Form isDisable={ isDisable }>
        <input
          data-testid="email-input"
          onChange={ (e) => setEmail(e.target.value) }
          type="email"
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          onChange={ (e) => setPassword(e.target.value) }
          type="password"
          placeholder="Password"
        />
        <button
          data-testid="login-submit-btn"
          onClick={ login }
          disabled={ isDisable }
          type="button"
        >
          Entrar
        </button>
      </Form>
      <DOG src={ image } alt="dog" className="dog-eating" />
    </>
  );
};

export default Login;
