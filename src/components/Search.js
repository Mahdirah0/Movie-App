import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch(search);
  };

  return (
    <div className='container'>
      <form className='search-form' onSubmit={getSearch}>
        <input
          className='search-bar'
          type='text'
          placeholder='search..'
          value={search}
          onChange={changeSearch}
        />
      </form>
    </div>
  );
}

export default Search;
