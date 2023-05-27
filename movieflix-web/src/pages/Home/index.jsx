import './styles.css';

import { ReactComponent as AuthImage } from 'assets/images/main-image.svg';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <h1>Card de Signup</h1>
          </Route>
          <Route path="/recover">
            <h1>Card de Recover</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Home;
