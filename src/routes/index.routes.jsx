import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import InProgress from '../pages/InProgress';
import Details from '../pages/Details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route path="/foods/:recipeId" component={ Details } />
      <Route path="/drinks/:recipeId" component={ Details } />
      <Route path="/foods/:recipeId/in-progress" component={ InProgress } />
      <Route path="/drinks/:recipeId/in-progress" component={ InProgress } />
      <Route path="/explore" component={ Explore } />
      <Route path="/explore/foods" component={ Explore } />
      <Route path="/explore/drinks" component={ Explore } />
      <Route path="/explore/foods/ingredients" component={ Explore } />
      <Route path="/explore/drinks/ingredients" component={ Explore } />
      <Route path="/explore/foods/nationalities" component={ Explore } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
