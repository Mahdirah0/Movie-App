import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

function Search(props) {
  const [search, setSearch] = useState('');

  let history = useHistory();

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
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

export default withRouter(Search);
