import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { getTokenData, isAuthenticated } from 'util/auth';
import { useEffect, useContext } from 'react';
import { removeAuthData } from 'util/storage';
import history from 'util/history';
import { Link } from 'react-router-dom';
import { AuthContext } from 'AuthContext';


const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData()
      });
    }
    else {
      setAuthContextData({
        authenticated: false
      });
    }

  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false
    });
    history.replace('/')
  }

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <h4>MovieFlix</h4>
        <div className='nav-logout'>
          {authContextData.authenticated ? (
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
