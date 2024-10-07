import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './headerStyle.css';

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <header className="header">
      <div className="logo">EduMusic</div>
      <nav>
        {token ? (
          <button className="nav-link logout-button" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Cadastrar</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;