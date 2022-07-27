import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMediaDetails } from '../../services/media_api';

function MediaDetailsPage() {
  const [mediaDetails, setMediaDetails] = useState([]);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [videoKey, setVideoKey] = useState([]);
  let { type, id } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const { data, videoKey } = await getMediaDetails(id, type);
      console.log(data);
      setMediaDetails(data);
      setVideoKey(videoKey);
    } catch (error) {
      console.log(error);
    }
  };

  let style = { color: 'red' };

  if (mediaDetails.status === 'Released') {
    style = {
      color: 'green',
    };
  }

  const embedVideo = () => {
    setPlayTrailer(!playTrailer);
  };

  return (
    <div className='movie-details'>
      <div className='image'>
        <img
          src={`https://image.tmdb.org/t/p/w400/${mediaDetails.poster_path}`}
          alt=''
        />
        <button className='video-link' onClick={embedVideo}>
          <i className='fas fa-play'></i>
        </button>
      </div>

      {playTrailer && (
        <div className='video-container'>
          <iframe
            width='900'
            height='600'
            src={`https://www.youtube.com/embed/${videoKey}`}
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
          <h1>{type === 'tv' ? mediaDetails.name : mediaDetails.title}</h1>
          <p>{mediaDetails.tagline}</p>
        </div>
        <div className='genres'>
          <h4>Genres</h4>
          <ul className='genres-list'>
            {Array.isArray(mediaDetails.genres) &&
              mediaDetails.genres.map((genre, index) => (
                <li key={genre.id + index}>{genre.name}</li>
              ))}
          </ul>
        </div>
        <div className='description'>
          <h4>Description</h4>
          <p>{mediaDetails.overview}</p>
        </div>
        <div className='companies'>
          <h4>Produces By</h4>
          {Array.isArray(mediaDetails.production_companies) &&
            mediaDetails.production_companies.map((companies, index) => (
              <img
                key={companies.id + index}
                src={`https://image.tmdb.org/t/p/w92${companies.logo_path}`}
              />
            ))}
        </div>
        <div className='other-info'>
          <h4>
            Release Date:
            {mediaDetails.release_date === ''
              ? 'Unreleased'
              : mediaDetails.release_date}
          </h4>
          <h4>
            Status:
            <span style={style}>{mediaDetails.status}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MediaDetailsPage;
