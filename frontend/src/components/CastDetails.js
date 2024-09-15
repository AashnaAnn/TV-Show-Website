
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from './Quiz'; 

import toriImage from '../images/ToriVega.png';
import andreImage from '../images/andre.png';
import jadeImage from '../images/JadeWest.png';
import catImage from '../images/CatValentine.png';
import beckImage from '../images/BeckOliver.png';
import robbieImage from '../images/RobbieRex.png';

const characterImages = {
  'Tori Vega': toriImage,
  'Andre Harris': andreImage,
  'Jade West': jadeImage,
  'Cat Valentine': catImage,
  'Beck Oliver': beckImage,
  'Robbie Shapiro': robbieImage,
};

function CastDetails() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/characters')
      .then(response => {
        const charactersWithLocalImages = response.data.map(character => ({
          ...character,
          imageUrl: characterImages[character.name] || null
        }));
        setCharacters(charactersWithLocalImages);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        setError('Failed to fetch characters. Please try again later.');
      });
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="cast-details">
      <h2>Cast</h2>
      <div className="character-list">
        {characters.map(character => (
          <div key={character.id} className="character-item">
            {character.imageUrl ? (
              <img 
                src={character.imageUrl} 
                alt={character.name} 
              />
            ) : (
              <div className="image-placeholder">Image not available</div>
            )}
            <h3>{character.name}</h3>
            <p>Portrayed by: {character.portrayer}</p>
            <p>{character.description}</p>
          </div>
        ))}
      </div>
      
      <Quiz characters={characters} />
      
    </div>
  );
}

export default CastDetails;