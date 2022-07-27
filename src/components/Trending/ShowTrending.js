import React from 'react';
import DisplayImages from '../DisplayImages';

const ShowTrending = ({ props }) => {
  return (
    <div className='show-container'>
      {props.map((item) => (
        <DisplayImages
          key={item.id}
          name={item.media_type === 'movie' ? item.title : item.name}
          image={item.poster_path}
          id={item.id}
          type={item.media_type}
        />
      ))}
    </div>
  );
};

export default ShowTrending;
