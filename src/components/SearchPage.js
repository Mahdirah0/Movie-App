import React, { useEffect, useState } from 'react';
import ShowDetails from './ShowDetails';

const SearchPage = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const params = match.params.searchStrings;

      if (params !== '') {
        const requestUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${params}&page=1&include_adult=false`;
        const request = await fetch(requestUrl);
        const requestData = await request.json();
        setData(requestData.results);
      }
    };
    fetchData();
  }, [match]);

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
