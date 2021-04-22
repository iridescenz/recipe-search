
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Home from './components/Home';
import { LowcarbRecipes } from './components/LowcarbRecipes';
import { NutritionFacts } from './components/NutritionFacts';
import {RecipeSearchComponent} from './components/RecipeSearchComponent';
import ErrorCase from './components/ErrorCase';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/low-carb-recipes' exact component={LowcarbRecipes} />
        <Route path='/nutrition-facts' exact component={NutritionFacts} />
        <Route path='/recipe-search' exact component={RecipeSearchComponent} />
        <Route path='/' component={ErrorCase}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
