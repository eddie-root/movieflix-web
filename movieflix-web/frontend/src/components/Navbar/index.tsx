import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">

        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        <Link to="/" >
          <button className='button-retorno'>
            SAIR
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
