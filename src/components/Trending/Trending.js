import React, { useEffect, useState } from 'react';
import ButtonPage from '../ButtonPage';
import { getTrending } from '../../services/trending';
import ShowTrending from './ShowTrending';

const Trending = () => {
  const [daily, setDaily] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTrending();
  }, [currentPage]);

  const fetchTrending = async () => {
    const { daily, weekly } = await getTrending(currentPage);
    setDaily(daily.results);
    setWeekly(weekly.results);
  };

  return (
    <div className='trending-page'>
      <h2 className='trending-title'>Trending Daily</h2>
      <ShowTrending props={daily} />
      <h2 className='trending-title'>Trending Weekly</h2>
      <ShowTrending props={weekly} />
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
