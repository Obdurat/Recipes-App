import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const { pathname } = useLocation();
  const notToHaveLogo = ['explore', 'profile', 'done-recipes', 'favorite-recipes'];
  const [showSearchInput, setShowSearchInput] = useState(false);

  const titles = {
    '/foods': 'Foods',
    '/drinks': 'Drinks',
    '/explore': 'Explore',
    '/explore/foods': 'Explore Foods',
    '/explore/drinks': 'Explore Drinks',
    '/explore/foods/ingredients': 'Explore Ingredients',
    '/explore/drinks/ingredients': 'Explore Ingredients',
    '/explore/foods/nationalities': 'Explore Nationalities',
    '/profile': 'Profile',
    '/done-recipes': 'Done Recipes',
    '/favorite-recipes': 'Favorite Recipes',
  };

  return (
    <header>
      <h1 data-testid="page-title">{titles[pathname]}</h1>

      {!notToHaveLogo.some((e) => pathname.includes(e)
        && pathname !== '/explore/foods/nationalities')
        && (
          <button type="button" onClick={ () => setShowSearchInput((prev) => !prev) }>

            <img src={ search } alt="searchIcon" data-testid="search-top-btn" />
          </button>
        )}
      <Link to="/profile">
        <img
          src={ profile }
          alt="profileIcon"
          data-testid="profile-top-btn"
        />
      </Link>

      {showSearchInput && <SearchBar />}
    </header>
  );
};

export default Header;
