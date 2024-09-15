
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from './Quiz';
import './HomePage.css';


function HomePage() {
  const [showInfo, setShowInfo] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/show-info')
      .then(response => setShowInfo(response.data))
      .catch(error => console.error('Error fetching show info:', error));

    axios.get('http://localhost:5000/api/characters')
      .then(response => setCharacters(response.data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);
  return (
    <div className="HomePage">
      <div className="site-header">
        <h1 className="site-title">VICTORiOUS</h1>
        <p className="site-subtitle">Where Every Day is a Performance</p>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          
          <li><a href="#quiz">Quiz</a></li>
        </ul>
      </nav>
      
      <main>
        {showInfo && (
          <>
            <div className="school-info">
              <h1>{showInfo.schoolName}</h1>
              <h2>{showInfo.schoolTagline}</h2>
              <p className="tagline">{showInfo.showTagline}</p>
            </div>
            <div className="show-info">
              <h2 className="section-title">{showInfo.title}</h2>
              <p>Creator: {showInfo.creator}</p>
              <p>Network: {showInfo.network}</p>
              <p>Aired: {showInfo.firstAired} - {showInfo.lastAired}</p>
              <p>Seasons: {showInfo.seasons}</p>
              <p>Episodes: {showInfo.episodes}</p>
            </div>
            <div className="about-show">
              <h3 className="section-title">About the Show</h3>
              <p>{showInfo.extendedDescription}</p>
            </div>
          </>
        )}

        <div className="cast-section">
          <h3 className="section-title">Meet the Cast (Warning: May cause spontaneous bursts of laughter and/or song)</h3>
          <div className="character-list">
            {characters.map(character => (
              <div key={character.id} className="character-item">
                <h4>{character.name}</h4>
                <p>{character.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="quiz">
          <Quiz characters={characters} />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 VICTORiOUS Fan Site</p>
        <p>All characters and content related to VICTORiOUS are property of Nickelodeon</p>
      </footer>
    </div>
  );
}

export default HomePage;