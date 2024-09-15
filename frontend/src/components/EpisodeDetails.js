
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EpisodeDetails.css';

function EpisodeDetails() {
  const [episodes, setEpisodes] = useState([]);
  const [showDates, setShowDates] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/episodes')
      .then(response => setEpisodes(response.data))
      .catch(error => console.error('Error fetching episodes:', error));
  }, []);

  const toggleDates = () => {
    setShowDates(!showDates);
  };

  const releaseDates = [
    { episode: 1, date: "March 27, 2010" },
    { episode: 3, date: "April 18, 2010" },
    { episode: 4, date: "April 25, 2010" },
    { episode: 5, date: "May 2, 2010" },
    { episode: 6, date: "May 8, 2010" },
    { episode: 7, date: "June 4, 2010" },
    { episode: 8, date: "June 26, 2010" },
    { episode: 9, date: "August 27, 2010" },
    { episode: 10, date: "September 25, 2010" },
    { episode: 11, date: "October 1, 2010" },
    { episode: 12, date: "October 8, 2010" }
  ];

  return (
    <div className="EpisodeDetails">
      <h2>VICTORiOUS Episodes: Where Every Day is a Drama Class Gone Wrong</h2>
      <p className="subtitle"><b>Remember, at Hollywood Arts, every day is an opportunity for talent, drama, and inexplicable musical numbers. It's not high school, it's high school: the musical... minus the actual musical part... most of the time.</b></p>
      <div className="episode-list">
        {episodes.map(episode => (
          <div key={episode.id} className="episode-item">
            <h3>{episode.title}</h3>
            <p className="episode-info">Season {episode.season}, Episode {episode.episodeNumber}</p>
            <p className="episode-description">{episode.description}</p>
          </div>
        ))}
      </div>
      <div className="release-dates-section">
        <h3>Season 1 Release Dates</h3>
        <button onClick={toggleDates} className="toggle-dates-btn">
          {showDates ? "Hide Release Dates" : "Show Release Dates"}
        </button>
        <div className={`date-list ${showDates ? 'show' : ''}`}>
          {releaseDates.map((item, index) => (
            <div key={index} className="date-item">
              <span className="episode-number">Episode {item.episode}</span>
              <span className="release-date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default EpisodeDetails;

