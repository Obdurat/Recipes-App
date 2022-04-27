import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';

const Profile = () => {
  const user = localStorage.getItem('user');
  const { push } = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    push('/');
  };

  return (
    <div>
      <Header />
      { user && (
        <div data-testid="profile-email">
          { JSON.parse(user).email }
        </div>
      )}
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => push('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleLogout }
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
