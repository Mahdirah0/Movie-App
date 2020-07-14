import React, { useState, useEffect } from 'react';
import ShowDetails from './ShowDetails';
import ButtonPage from './ButtonPage';

function MovieNav() {
  const [currentPage, setCurrentPage] = useState(1);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const currenPageUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;
      const discoverMovie = await fetch(currenPageUrl);
      const movieData = await discoverMovie.json();
      setMovies(movieData.results);
    };
    if (currentPage < 1) {
      setCurrentPage(1);
    } else {
      fetchMovie();
    }
  }, [currentPage]);

  return (
    <div className='show-box'>
      <h2>Movie</h2>
      <div className='show-container'>
        {movies.map((movieItem) => (
          <ShowDetails
            isMovie={true}
            key={movieItem.id}
            access={movieItem.id}
            name={movieItem.title}
            image={movieItem.poster_path}
          />
        ))}
      </div>
      <div className='button-page'>
        <ButtonPage
          onClick={() => setCurrentPage(currentPage - 1)}
          isDisabled={currentPage === 1 ? true : false}
        >
          Prev
        </ButtonPage>
        <ButtonPage onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </ButtonPage>
      </div>
    </div>
  );
}

export default MovieNav;
