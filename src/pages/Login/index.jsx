import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import Logo from '../../images/login-logo.svg';
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
    <S.LoginContainer>
      <S.Title>
        <p>FOOD</p>
        <span>HUB</span>
      </S.Title>
      <S.Logo src={ Logo } alt="logo" />
      <S.Form isDisable={ isDisable }>
        <h1>Login</h1>
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
      </S.Form>
    </S.LoginContainer>
  );
};

export default Login;
