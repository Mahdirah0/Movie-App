import React, { useEffect, useState } from 'react';
import ShowDetails from './ShowDetails';

function MainPage() {
  useEffect(() => {
    fetchTrending();
  }, []);

  const [trending, setTrending] = useState([]);
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);

  const fetchTrending = async () => {
    const trendingRequest = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const trendingMovie = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const trendingSeries = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const movieTrendingData = await trendingMovie.json();
    const trendingData = await trendingRequest.json();
    const seriesTrendingData = await trendingSeries.json();

    setTrending(trendingData.results);
    setTrendingMovie(movieTrendingData.results);
    setTrendingSeries(seriesTrendingData.results);
  };

  return (
    <div className='main-page'>
      <h2>Trending</h2>
      <div className='trending'>
        {trending.slice(0, 5).map((trendingItem) => (
          <ShowDetails
            isMovie={trendingItem.media_type === 'movie' ? true : false}
            key={trendingItem.id}
            access={trendingItem.id}
            name={trendingItem.title}
            image={trendingItem.poster_path}
          />
        ))}
      </div>
      <h2>Trending Movies</h2>
      <div className='trendingMovie'>
        {trendingMovie.splice(0, 5).map((movieItem) => (
          <ShowDetails
            isMovie
            key={movieItem.id}
            access={movieItem.id}
            name={movieItem.title}
            image={movieItem.poster_path}
          />
        ))}
      </div>
      <h2>Trending Series</h2>
      <div className='trendingSeries'>
        {trendingSeries.splice(0, 5).map((seriesItem) => (
          <ShowDetails
            isMovie={false}
            key={seriesItem.id}
            access={seriesItem.id}
            name={seriesItem.name}
            image={seriesItem.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
