import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ name, image, access, isMovie }) {
  return (
    <div className='movie-container'>
      <Link to={isMovie ? `/movie-nav/${access}` : `/series-nav/${access}`}>
        <img src={`https://image.tmdb.org/t/p/w342/${image}`} alt={name} />
      </Link>
    </div>
  );
}

export default Movie;
