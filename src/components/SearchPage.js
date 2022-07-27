import React, { useEffect, useState } from 'react';
import ShowDetails from './DisplayImages';
import { useParams } from 'react-router-dom';
import searchMedia from '../services/search';

const SearchPage = () => {
  const [data, setData] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetchData();
  }, [params]);

  const fetchData = async () => {
    if (params.searchStrings !== '') {
      const requestData = await searchMedia(params.searchStrings);
      setData(requestData.results);
    }
  };

  return (
    <div className='search-container'>
      {data.map((dataItem) => (
        <ShowDetails
          key={dataItem.id}
          isMovie={dataItem.media_type === 'movie' ? true : false}
          access={dataItem.id}
          image={dataItem.poster_path}
          name={dataItem.name}
        />
      ))}
    </div>
  );
};

export default SearchPage;
