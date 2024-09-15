import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const animals = [
  {
    name: 'Arctic Fox',
    description: 'The arctic fox is well adapted to living in cold environments.',
    imageUrl: [
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/refur1.jpg',
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/refur2.jpg'
    ]
  },
  {
    name: 'Dog',
    description: 'Dogs are domesticated mammals, known for their loyalty and companionship.',
    imageUrl: [
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur1.jpg',
      'https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur2.jpg'
    ]
  },
  {
    name: 'Eagle',
    description: 'Eagles are large birds of prey with excellent eyesight.',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/eagle1.jpg']
  },
  {
    name: 'Horse',
    description: 'Horses are large domesticated mammals used for riding and transport.',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/hestur1.jpg']
  },
  {
    name: 'Reindeer',
    description: 'Reindeer are species of deer found in arctic regions and domesticated for herding.',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/hreindyr1.jpg']
  },
  {
    name: 'Seal',
    description: 'Seals are semi-aquatic marine mammals known for their playful nature.',
    imageUrl: ['https://ntvskoli.s3.eu-west-2.amazonaws.com/selur1.jpg']
  }
];

function MatchScreen() {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [toggleImage, setToggleImage] = useState(0); // For animals with multiple images

  const handleMatch = () => {
    setMatches([...matches, animals[index].name]);
    nextAnimal();
  };

  const handlePass = () => {
    nextAnimal();
  };

  const nextAnimal = () => {
    setIndex((prevIndex) => (prevIndex + 1) % animals.length);
    setToggleImage((prevToggle) => (prevToggle + 1) % 2); // Toggle between two images if available
  };

  return (
    <div style={{ backgroundColor: '#fff8e1', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      {index < animals.length ? (
        <>
          <h1>{animals[index].name}</h1>
          <img
            src={animals[index].imageUrl[toggleImage % animals[index].imageUrl.length]}
            alt={animals[index].name}
            style={{ width: '300px', height: '300px' }}
          />
          <p>{animals[index].description}</p>
          <div>
            <button onClick={handleMatch} style={buttonStyle}>Match</button>
            <button onClick={handlePass} style={buttonStyle}>Pass</button>
          </div>
        </>
      ) : (
        <>
          <h1>No more animals to view!</h1>
          <h2>Your Matches:</h2>
          <ul>
            {matches.map((match, idx) => (
              <li key={idx}>{match}</li>
            ))}
          </ul>
        </>
      )}
      <div>
        <Link to="/" style={{ color: '#00796b', textDecoration: 'underline' }}>Back to Home</Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  margin: '10px',
  cursor: 'pointer',
  backgroundColor: '#00796b',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
};

export default MatchScreen;
