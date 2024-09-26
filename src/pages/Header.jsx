import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isActive, setisActive] = useState(false);

  return (
    <nav className='navbar is-primary' role="navigation" aria-label="main navigation">  
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <img src="logo.svg" alt="Logo" width="112" height="28" />
        </a>

        <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/news" className="navbar-item">Noticias</Link>
          <Link to="/submit-article" className="navbar-item">Escribir Articulo</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;