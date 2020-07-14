import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import Header from './components/Header';
import Search from './components/Search';
import SeriesNav from './components/SeriesNav';
import MoviesNav from './components/MoviesNav';
import MovieDetails from './components/MovieDetails';
import SeriesDetails from './components/SeriesDetail';
import SearchPage from './components/SearchPage';
import Trending from './components/Trending';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Search />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/series-nav' exact component={SeriesNav} />
          <Route path='/movie-nav' exact component={MoviesNav} />
          <Route path='/trending' exact component={Trending} />
          <Route path='/series-nav/:id' exact component={SeriesDetails} />
          <Route path='/movie-nav/:id' exact component={MovieDetails} />
          <Route path='/search/:searchStrings' exact component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
