import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import SearchPage from './components/SearchPage';
import Trending from './components/Trending/Trending';
import Media from './components/Media/Media';
import MediaDetailsPage from './components/Media/MediaDetailsPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Search />
        <Routes>
          <Route path='/' element={<Trending />} />
          <Route path=':media' element={<Media />} />
          <Route path='media/:type/:id' element={<MediaDetailsPage />} />
          <Route path='search/:searchStrings' element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
