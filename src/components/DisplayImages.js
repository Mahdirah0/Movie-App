import React from 'react';
import { Link } from 'react-router-dom';

function DisplayImages({ name, image, id, type }) {
  if (!image) {
    return null;
  }

  return (
    <div className='movie-container'>
      <Link to={`/media/${type}/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w342/${image}`} alt={name} />
      </Link>
    </div>
  );
}

export default DisplayImages;
