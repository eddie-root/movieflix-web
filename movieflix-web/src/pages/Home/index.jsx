import './styles.css';

import { ReactComponent as AuthImage } from 'assets/images/main-image.svg';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <h1>Divulgue seus produtos no DS Catalog</h1>
        <p>
          Faça parte do nosso catálogo de divulgação e aumente a venda dos seus
          produtos
        </p>
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
