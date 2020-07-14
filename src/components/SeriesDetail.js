import React, { useEffect, useState } from 'react';

function ItemDetail({ match }) {
  const [seriesDetails, setSeriesDetails] = useState([]);
  const [trailer, setTrailer] = useState(false);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const seriesDetails = await fetch(
        `https://api.themoviedb.org/3/tv/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const video = await fetch(
        `https://api.themoviedb.org/3/tv/${match.params.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const videoData = await video.json();
      const seriesDetailData = await seriesDetails.json();
      setSeriesDetails(seriesDetailData);
      setVideo(videoData.results);
      console.log(videoData);
    };
    fetchItem();
  }, [match]);

  let style;

  if (seriesDetails.status === 'Released') {
    style = 'green';
  } else {
    style = 'red';
  }

  const videoKey = video.map((item) => {
    return item.key;
  });

  const embedVideo = () => {
    setTrailer(!trailer);
  };

  return (
    <div className='movie-details'>
      <div className='image'>
        <h4 className='watermark'>{seriesDetails.name}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w400/${seriesDetails.poster_path}`}
          alt=''
        />
        <button className='video-link' onClick={embedVideo}>
          <i className='fas fa-play'></i>
        </button>
      </div>

      {trailer && (
        <div className='video-container'>
          <iframe
            width='850'
            height='500'
            src={`https://www.youtube.com/embed/${videoKey[1]}`}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <button onClick={embedVideo}>
            <i className='fas fa-times'></i>
          </button>
        </div>
      )}

      <div className='movie-content'>
        <div className='tagline'>
          <h1>{seriesDetails.name}</h1>
          <p>{seriesDetails.tagline}</p>
        </div>
        <div className='genres'>
          <h4>Genres</h4>
          <ul className='genres-list'>
            {Array.isArray(seriesDetails.genres) &&
              seriesDetails.genres.map((genre, index) => (
                <li key={genre.id + index}>{genre.name}</li>
              ))}
          </ul>
        </div>
        <div className='description'>
          <h4>Description</h4>
          <p>{seriesDetails.overview}</p>
        </div>
        <div className='companies'>
          <h4>Produces By</h4>
          {Array.isArray(seriesDetails.production_companies) &&
            seriesDetails.production_companies.map((companies, index) => (
              <img
                key={companies.id + index}
                src={`https://image.tmdb.org/t/p/w92${companies.logo_path}`}
                alt=''
              />
            ))}
        </div>
        <div className='other-info'>
          <h4>Release Date: {seriesDetails.release_date}</h4>
          <h4>
            Status:
            <span className={style}>{seriesDetails.status}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
