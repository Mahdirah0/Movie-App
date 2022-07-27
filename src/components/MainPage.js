import React, { useEffect, useState } from 'react';
import DisplayImages from './DisplayImages';
import { getTrending } from '../services/media_api';

function MainPage() {
  const [trending, setTrending] = useState([]);
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      const all = await getTrending('all');
      const movies = await getTrending('movie');
      const series = await getTrending('tv');

      setTrending(all);
      setTrendingMovie(movies);
      setTrendingSeries(series);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='main-page'>
      <h2>Trending</h2>
      <div className='show-container'>
        {trending.map((item) => (
          <DisplayImages
            key={item.id}
            name={item.title}
            image={item.poster_path}
            id={item.id}
            type={item.media_type}
          />
        ))}
      </div>
      <h2>Trending Movies</h2>
      <div className='trendingMovie'>
        {trendingMovie.map((item) => (
          <DisplayImages
            isMovie
            key={item.id}
            access={item.id}
            name={item.title}
            image={item.poster_path}
          />
        ))}
      </div>
      <h2>Trending Series</h2>
      <div className='trendingSeries'>
        {trendingSeries.map((item) => (
          <DisplayImages
            isMovie={false}
            key={item.id}
            access={item.id}
            name={item.name}
            image={item.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
