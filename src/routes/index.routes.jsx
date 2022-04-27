import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreType from '../pages/ExploreType';
import ExploreByIngredients from '../pages/ExploreByIngredients';
import ExploreByNationalities from '../pages/ExploreByNationalities';
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
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreType } />
      <Route exact path="/explore/drinks" component={ ExploreType } />
      <Route path="/explore/foods/ingredients" component={ ExploreByIngredients } />
      <Route path="/explore/drinks/ingredients" component={ ExploreByIngredients } />
      <Route path="/explore/foods/nationalities" component={ ExploreByNationalities } />
      <Route
        path="/explore/drinks/nationalities"
        render={ () => (<h1>Not Found</h1>) }
      />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
