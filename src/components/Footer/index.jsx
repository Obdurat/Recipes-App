import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../../images/mealIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import './footerStyle.css';

const Footer = () => (
  <div
    className="footer-container"
    data-testid="footer"
  >
    <Link to="/drinks">
      <img src={ drinkIcon } alt="drinks-button" data-testid="drinks-bottom-btn" />
    </Link>
    <Link to="/foods">
      <img src={ mealIcon } alt="meals-button" data-testid="food-bottom-btn" />
    </Link>
    <Link to="/explore">
      <img src={ exploreIcon } alt="explore-button" data-testid="explore-bottom-btn" />
    </Link>
  </div>
);

export default Footer;
