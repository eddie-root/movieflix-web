import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { TokenData, getTokenData, isAuthenticated } from 'util/auth';
import { useEffect, useState } from 'react';
import { removeAuthData } from 'util/storage';
import history from 'util/history';
import { Link } from 'react-router-dom';

type AuthData = {
  authenticated: boolean,
  tokenData?: TokenData
}

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData()
      });
    }
    else {
      setAuthData({
        authenticated: false
      });
    }

  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false
    });
    history.replace('/')
  }

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <h4>MovieFlix</h4>
        <div>
          {authData.authenticated ? (
            <a href='#sair' onClick={handleLogoutClick}>SAIR</a>
          ) : (
            <Link to='/'></Link>
          )

          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
