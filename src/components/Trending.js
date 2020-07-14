import React, { useEffect, useState } from 'react';
import ShowDetails from './ShowDetails';
import ButtonPage from './ButtonPage';

const Trending = () => {
  const [daily, setDaily] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      // current page url for DAILY and WEEKLY
      const currentPageDUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;
      const currentPageWUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`;

      // request
      const requestDaily = await fetch(currentPageDUrl);
      const requestWeekly = await fetch(currentPageWUrl);
      // data
      const dailyRequest = await requestDaily.json();
      const weeklyRequest = await requestWeekly.json();
      setDaily(dailyRequest.results);
      setWeekly(weeklyRequest.results);
    };
    if (currentPage < 1) {
      setCurrentPage(1);
    } else {
      fetchTrending();
    }
  }, [currentPage]);

  return (
    <div className='trending-page'>
      <h2 className='first-title'>Trending Daily</h2>
      <div className='trending-daily'>
        {daily.map((item, index) => (
          <ShowDetails
            key={item.id + index}
            isMovie={item.media_type === 'movie' ? true : false}
            name={item.title}
            image={item.poster_path}
            access={item.id}
          />
        ))}
      </div>
      <h2 className='trending-weekly-title'>Trending Weekly</h2>
      <div className='trending-weekly'>
        {weekly.map((item, index) => (
          <ShowDetails
            key={item.id + index}
            isMovie={item.media_type === 'movie' ? true : false}
            name={item.title}
            image={item.poster_path}
            access={item.id}
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
};

export default Trending;
