import React from 'react';
import { Link } from 'react-router-dom';

function DogScreen() {
  return (
    <div style={{ backgroundColor: '#f3e5f5', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#6a1b9a' }}>Dog</h1>
      <img
        src="https://ntvskoli.s3.eu-west-2.amazonaws.com/hundur1.jpg"
        alt="Aslan"
        style={{ width: '300px', height: '300px', borderRadius: '10px' }}
      />
      <p style={{ color: '#6a1b9a', marginTop: '20px' }}>
        Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves.
      </p>
      <Link to="/" style={{ color: '#6a1b9a', textDecoration: 'underline' }}>Back to Home</Link>
    </div>
  );
}

export default DogScreen;
