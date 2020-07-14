import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const style = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <header>
      <Link to='/' style={style}>
        <h1>Movie Lister</h1>
      </Link>
      <nav className='navigator'>
        <ul className='nav-links'>
          <Link to='/' style={style}>
            <li>Home</li>
          </Link>
          <Link to='/trending' style={style}>
            <li>Trending</li>
          </Link>
          <Link to='/series-nav' style={style}>
            <li>Series</li>
          </Link>
          <Link to='/movie-nav' style={style}>
            <li>Movies</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
