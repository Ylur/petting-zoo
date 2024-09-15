import React from 'react';
import { Link, useParams } from 'react-router-dom';

function AnimalDetailScreen() {
  const { animal } = useParams();

  const animalData = {

    dog: {
      name: 'Dog',
      description: 'Dogs are domesticated mammals, known for their loyalty and companionship.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/dog.jpg',
      backgroundColor: '#e8f5e9',
      textColor: '#1b5e20'
    },
    eagle: {
      name: 'Eagle',
      description: 'Eagles are large birds of prey with excellent eyesight.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/fugl1.jpg',
      backgroundColor: '#e3f2fd',
      textColor: '#0d47a1'
    },
    arcticFox: {
      name: 'Arctic Fox',
      description: 'The arctic fox is well adapted to living in cold environments.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/arcticFox.jpg',
      backgroundColor: '#e0f2f1',
      textColor: '#004d40'
    },
    horse: {
      name: 'Horse',
      description: 'Horses are large, domesticated mammals used for riding and transport.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/horse.jpg',
      backgroundColor: '#ffebee',
      textColor: '#d32f2f'
    },
    seal: {
      name: 'Seal',
      description: 'Seals are semi-aquatic marine mammals known for their playful nature.',
      imageUrl: 'https://ntvskoli.s3.eu-west-2.amazonaws.com/seal.jpg',
      backgroundColor: '#e3f2fd',
      textColor: '#1976d2'
    }
  };

  const animalInfo = animalData[animal];

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
