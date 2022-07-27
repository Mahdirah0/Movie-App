import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMediaByType } from '../../services/media_api';
import ShowMedia from './ShowMedia';
import ButtonPage from '../ButtonPage';

function SeriesNav() {
  const [page, setPage] = useState(1);
  const [media, setMedia] = useState([]);
  let { media: mediaType } = useParams();

  useEffect(() => {
    fetchMedia();
  }, [page, mediaType]);

  const fetchMedia = async () => {
    const fetchMedia = await getMediaByType(page, mediaType);
    setMedia(fetchMedia.results);
  };

  return (
    <div className='show-box'>
      <ShowMedia name={mediaType} media={media} type={mediaType} />
      <div className='button-page'>
        <ButtonPage
          onClick={() => setPage(page - 1)}
          isDisabled={page === 1 ? true : false}
        >
          Prev
        </ButtonPage>
        <ButtonPage onClick={() => setPage(page + 1)}>Next</ButtonPage>
      </div>
    </div>
  );
}

export default SeriesNav;
