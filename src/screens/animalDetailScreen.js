import React from 'react';
import { Link, useParams } from 'react-router-dom';

function AnimalDetailScreen() {
  const { animal } = useParams();

  const animalData = {
    hreindyr: {
      name: 'Reindeer',
      description: 'Reindeer are species of deer found in arctic regions and domesticated for herding.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/hreindyr1.jpg',
      backgroundColor: '#f5f5f5',
      textColor: '#4caf50'
    },
    dog: {
      name: 'Dog',
      description: 'Dogs are domesticated mammals, known for their loyalty and companionship.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur1.jpg',
      backgroundColor: '#e8f5e9',
      textColor: '#1b5e20'
    },
    eagle: {
      name: 'Eagle',
      description: 'Eagles are large birds of prey with excellent eyesight.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/eagle1.jpg',
      backgroundColor: '#e3f2fd',
      textColor: '#0d47a1'
    },
    arcticFox: {
      name: 'Arctic Fox',
      description: 'The arctic fox is well adapted to living in cold environments.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/refur1.jpg',
      backgroundColor: '#e0f2f1',
      textColor: '#004d40'
    },
    horse: {
      name: 'Horse',
      description: 'Horses are large, domesticated mammals used for riding and transport.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/hestur1.jpg',
      backgroundColor: '#ffebee',
      textColor: '#d32f2f'
    },
    seal: {
      name: 'Seal',
      description: 'Seals are semi-aquatic marine mammals known for their playful nature.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/selur1.jpg',
      backgroundColor: '#e3f2fd',
      textColor: '#1976d2'
    }
  };

  const animalInfo = animalData[animal]; // Retrieve data based on the URL parameter

  if (!animalInfo) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Animal Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: animalInfo.backgroundColor, minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: animalInfo.textColor }}>{animalInfo.name}</h1>
      <p style={{ color: animalInfo.textColor }}>{animalInfo.description}</p>
      <img src={animalInfo.imageUrl} alt={animalInfo.name} style={{ width: '300px', height: '300px' }} />
      <div>
        <Link to="/" style={{ color: animalInfo.textColor, textDecoration: 'underline' }}>Back to Home</Link>
      </div>
    </div>
  );
}

export default AnimalDetailScreen;
