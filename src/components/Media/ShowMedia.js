import React from 'react';
import DisplayImages from '../DisplayImages';

const ShowMedia = ({ name, media, type }) => {
  return (
    <>
      <h2>{name}</h2>
      <div className='show-container'>
        {media.map((item) => (
          <DisplayImages
            key={item.id}
            name={item.name}
            image={item.poster_path}
            id={item.id}
            type={type}
          />
        ))}
      </div>
    </>
  );
};

export default ShowMedia;
