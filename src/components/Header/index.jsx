import React, { useContext, useMemo, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import { titles } from '../../helpers/constants';
import * as S from './styles';
import { RecipeContext } from '../../context/RecipeContext';

const Header = ({ recipeFunc }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { pathname } = useLocation();
  const { push } = useHistory();
  const { changeTheme } = useContext(RecipeContext);

  const whenVisible = useMemo(() => {
    const notToHaveLogo = ['explore', 'profile', 'done-recipes', 'favorite-recipes'];
    return !notToHaveLogo.some((e) => pathname.includes(e)
        && pathname !== '/explore/foods/nationalities');
  }, [pathname]);

  return (
    <S.HeaderContainer>
      <img
        role="presentation"
        onClick={ () => push('/profile') }
        src={ profile }
        alt="profile"
        data-testid="profile-top-btn"
      />
      <h1 data-testid="page-title">{titles[pathname]}</h1>
      {
        whenVisible && (
          <img
            role="presentation"
            onClick={ () => setShowSearchInput((prev) => !prev) }
            src={ search }
            alt="searchIcon"
            data-testid="search-top-btn"
          />
        )
      }

      {pathname.includes('profile')
        && (
          <button
            type="button"
            onClick={ changeTheme }
          >
            theme
          </button>
        )}

      {showSearchInput && <SearchBar
        setShowSearchInput={ setShowSearchInput }
        recipeFunc={ recipeFunc }
      />}
    </S.HeaderContainer>
  );
};

Header.propTypes = {
  recipeFunc: PropTypes.func,
}.isRequired;

export default Header;
