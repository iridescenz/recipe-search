
import  { BrowserRouter, Route, Switch } from 'react-router-dom'
import  Home from './components/Home'
import { About } from './components/About'
import { LowcarbRecipes } from './components/LowcarbRecipes'
import { NutritionFacts } from './components/NutritionFacts'
import {RecipeSearchComponent} from './components/RecipeSearchComponent'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={RecipeSearchComponent} />
        <Route path='/about' exact component={About} />
        <Route path='/low-carb-recipes' exact component={LowcarbRecipes} />
        <Route path='/nutrition-facts' exact component={NutritionFacts} />
        <Route path='/home' exact component={Home} />
        <Route path='/' render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
