
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import EpisodeDetails from './components/EpisodeDetails';
import CastDetails from './components/CastDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/episodes">Episodes</Link></li>
            <li><Link to="/cast">Cast</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episodes" element={<EpisodeDetails />} />
          <Route path="/cast" element={<CastDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



