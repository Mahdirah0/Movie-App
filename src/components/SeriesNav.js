import React, { useEffect, useState } from 'react';
import ShowDetails from './ShowDetails';
import ButtonPage from './ButtonPage';

function SeriesNav() {
  const [currentPage, setCurrentPage] = useState(1);

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const currentPageUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;
      const discoverSeries = await fetch(currentPageUrl);
      const seriesData = await discoverSeries.json();
      setSeries(seriesData.results);
    };
    if (currentPage < 1) {
      setCurrentPage(1);
    } else {
      fetchSeries();
    }
  }, [currentPage]);

  
  return (
    <div className='show-box'>
      <h2>Series</h2>
      <div className='show-container'>
        {series.map((seriesItem) => (
          <ShowDetails
            key={seriesItem.id}
            isMovie={false}
            access={seriesItem.id}
            image={seriesItem.poster_path}
            name={seriesItem.name}
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

export default SeriesNav;
