import './styles.css';

import Login from './Login';
import { ReactComponent as AuthImage } from 'assets/images/main-image.svg';


const Home = () => {


  return (
    <div className="rota-container">
      <div className="rota-banner-container">

        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Login />
      </div>
    </div>
  );

};

export default Home;
