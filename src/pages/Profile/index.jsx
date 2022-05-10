import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';
import * as S from './styles';

const Profile = () => {
  const user = localStorage.getItem('user');
  const { push } = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    push('/');
  };

  return (
    <>
      <Header />
      <S.LoginContainer>
        { user && (
          <S.User data-testid="profile-email">
            { JSON.parse(user).email }
          </S.User>
        )}
        <S.Button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => push('/favorite-recipes') }
        >
          Favorite Recipes
        </S.Button>
        <S.Button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => push('/done-recipes') }
        >
          Done Recipes
        </S.Button>
        <S.Button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          Logout
        </S.Button>
        <Footer />
      </S.LoginContainer>
    </>
  );
};

export default Profile;
