import React from 'react';
import { Link } from 'react-router-dom';

function HorseScreen() {
  return (
    <div style={{ backgroundColor: '#ffebee', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#d32f2f' }}>Horse</h1>
      <img
        src="https://ntvskoli.s3.eu-west-2.amazonaws.com/hestur1.jpg"
        alt="Horse"
        style={{ width: '300px', height: '300px', borderRadius: '10px' }}
      />
      <p style={{ color: '#d32f2f', marginTop: '20px' }}>
        Horses are large, domesticated mammals used for riding, transport, and companionship.
      </p>
      <Link to="/" style={{ color: '#d32f2f', textDecoration: 'underline' }}>Back to Home</Link>
    </div>
  );
}

export default HorseScreen;
