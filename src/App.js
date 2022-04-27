import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import DoneRecipe from './pages/DoneRecipe';
import FavoriteRecipe from './pages/FavoriteRecipe';
import Progress from './pages/Progress';
import DoneRecipe from './pages/DoneRecipe';
import FavoriteRecipe from './pages/FavoriteRecipe';
import Details from './pages/Details';
import ExploreRecipes from './pages/ExploreRecipes';
import ExploreIngredient from './pages/ExploreIngredient';
import Nationalites from './pages/Nationalites';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RecipesProvider>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />

          {/* <Route exact path="/foods/{id-da-receita}" component={ Details } /> */}

          <Route exact path="/foods/details" component={ Details } />

          <Route exact path="/drinks/{id-da-receita}" component={ Details } />
          <Route exact path="/foods/{id-da-receita}/in-progress" component={ Progress } />
          <Route
            exact
            path="/drinks/{id-da-receita}/in-progress"
            component={ Progress }
          />

          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreRecipes } />
          <Route exact path="/explore/drinks" component={ ExploreRecipes } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreIngredient }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreIngredient }
          />

          <Route
            exact
            path="/explore/foods/nationalities"
            component={ Nationalites }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipe } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipe } />

        </RecipesProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
