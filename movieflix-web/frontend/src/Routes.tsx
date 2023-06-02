import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Reviews from 'pages/Reviews';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" >
        <Movies />
      </Route>
      <Route path="/reviews" >
        <Reviews />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
