import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="details" element={<MovieDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
