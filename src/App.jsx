import Home from './pages/Home';
import Category from './pages/Category';
import Details from './pages/Details';
import Generation from './pages/Generation';
import NotFound from './pages/NotFound';

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/categorias" component={Category} />
        <Route path="/geracoes" component={Generation} />
        <Route path="/pokemon/:pokemonId" component={Details}/>
        <Route component={NotFound} /> 

      </Switch>
    </BrowserRouter>
  )
}

export default App;
