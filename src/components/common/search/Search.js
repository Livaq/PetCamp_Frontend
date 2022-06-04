import React, { useState } from 'react';
import searchLens from '../../../assets/icons/searchLens.svg';

import './search.scss';

function Search() {
  const [searchText, setSearchText] = useState('');
  return (
    <form className="search-block">
      <input
        className="search-block__input"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="search"
      />
      <button type="submit">
        <img src={searchLens} alt="search lens" />
      </button>
    </form>
  );
}

export default Search;
